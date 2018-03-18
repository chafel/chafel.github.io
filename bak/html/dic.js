function Dictionary(){
	this.add = add;
	this.datastore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key,value){
	this.datastore[key] = value;
}

function find(key){
	return this.datastore[key];
}

function remove(key){
	delete this.datastore[key];
}

function showAll(){
	for each (var key in this.keys(this.datastore).sort()){ //为何用到each?
		print (key + ":" + this.datastore[key]);
	}
}

function count(){
	var n=0;
	for each (var key in this.keys(this.datastore)){
		++n;
	}
	return n;
}

function clear(){
	for each (var key in this.keys(this.datastore)){
		delete this.datastore[key];
	}
}