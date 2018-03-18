window.onload = getMyLocation;
function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation,displayErro);
	}else{
		alert("得不到位置找不到人！");
	}
}
function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var div = document.getElementById("location");
	div.innerHTML = "你的经度："+latitude+" 纬度："+longitude;
}
function displayErro(error){
	var errorTypes = {
		0:"未知错误",
		1:"用户未允许获取位置",
		2:"位置请求不可用",
		3:"请求超时"
	};
	var errorMesssage = errorTypes[error.code];
	if(error.code == 0 || error.code == 2){
		errorMesssage = errorMesssage + "" + error.Messsage;
	}
		// 对于错误0和2，有时error.message属性中会有一些额外的信息，所以把这些信息增加到errorMessages串
		var div = document.getElementById("location");
		div.innerHTML = errorMesssage;
}