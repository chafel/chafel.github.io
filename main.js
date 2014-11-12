
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Hello, MVC!";
var letterColors = [red, orange, green, blue, purple];
 var w=document.body.clientWidth;
/*如何获取屏幕尺寸？

if(w >=760px) {
    bubbleShape = 'square';
}
else {
    bubbleShape = 'circle';
}*/
bubbleShape = 'circle';
drawName(myName, letterColors);
bounceBubbles();