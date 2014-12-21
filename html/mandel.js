var canvas;
var ctx;

var i_max = 1.5;
var i_min = -1.5;
var r_min = -2.5;
var r_max = 1.5;

var max_iter = 1024;
var escape = 1025;
var palette = [];

function createTask(row){
	var task = {
		row: row,
		width: rowData.width,
		generation: generation,
		r_min: r_min,
		r_max: r_max,
		i: i_max + (i_min - i_max) * row / canvas.height,
		max_iter: max_iter,
		escape: escape
	};
	return task;
}

function makePalette(){
	function wrap(x){
		x = ((x+256)&0x1ff)-256;
		if(x<0)x = -x;
		return x;
	}
	for(i=0;i<=this.max_iter;i++){
		palette.push([wrap(7*i),wrap(5*i),wrap(11*i)]);
	}
}

function drawRow(workerResults){
	var values = workerResults.value;
	var pixelData = rowData.data;
	for(i=0;i<rowData.width;i++){
		var red = i*4;
		var green = i*4+1;
		var blue = i*4+2;
		var alpha = i*4+3;
		pixelData[alpha] = 255;
		if(values[i]<0){
			pixelData[red] = pixelData[green] = pixelData[blue] = 0;
		}else{
			var color = this.palette[values[i]];
			pixelData[red] = color[0];
			pixelData[green] = color[1];
			pixelData[blue] = color[2];
		}
	}
	ctx.putImageData(this.rowData, 0, workerResults.row);
}

function setupGraphics(){
	canvas = document.getElementById("fractal");
	ctx = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var width = ((i_max - i_min)*canvas.width/canvas.height);
	var r_mid = (r_max + r_min)/2;
	r_min = r_mid - width/2;
	r_max = r_mid + width/2;

	rowData = ctx.createImageData(canvas.width,1);

	makePalette();
}

var numberOfWorkers = 8;
var workers = [];

function handleClick(x,y){
	var width = r_max - r_min;
	var height = i_min - i_max;
	var click_r = r_min + width*x/canvas.width;
	var click_i = i_max + height*y/canvas.height;

	var zoom = 8;

	r_min = click_r - width/zoom;
	r_max = click_r + width/zoom;
	i_max = click_i - height/zoom;
	i_min = click_i + height/zoom;

	startWorkers();
}

window.onload = init;

function init(){
	setupGraphics();
	window.onresize = function(){
		resizeToWindow();
	};

	canvas.onclick = function(event){
		handleClick(event.clientX,event.clientY);
	};

	for(var i = 0; i < numberOfWorkers;i++){
		var worker = new Worker("worker.js");

		worker.onmessage = function(event){
			processWorker(event.target,event.data);
		}

		worker.idle = true;
		workers.push(worker);
	}
	startWorkers();
}

var nextRow = 0;
var generation = 0;

function startWorkers(){
	generation++;

	for(var i=0;i<workers.length;i++){
		var worker = workers[i];
		if(worker.idle){
			var task = createTask(nextRow);
			worker.idle = false;
			worker.postMessage(task);

			nextRow++;
		}
	}
}

function processWork(worker,workerResults){
	if(workerResults.generation == generation){
		drawRow(workerResults);
	}
	reassignWorker(worker);
}

function reassignWorker(worker){
	var row = nextrow++;
	if(row>=canvas.height){
		worker.idle = true;
	}else{
		var task = createTask(row);
		worker.idle = false;
		worker.postMessage(task);
	}
}

function resizeToWindow(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var width = ((i_max-i_min)*canvas.width/canvas.height);
	var r_mid = (r_max+r_min)/2;
	r_min = r_mid - width/2;
	r_max = r_mid + width/2;
	rowData = ctx.createImageData(canvas.width,1);
	startWorkers();
}
