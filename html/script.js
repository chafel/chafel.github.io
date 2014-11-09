// Generates a bar graph in the provided DOM element
function createGraph($element) {
    var rowCount = 5;
    var name=["科比·布莱恩特：","勒布朗·詹姆斯：","吉姆·邓肯：","德克·诺维茨基：","保罗·加索尔："];
    for (var i=0; i < rowCount; i++) {
        
        $element.append(
            $('<div/>')
                .append(
                    $('<div/>')
                        .addClass('name')
                        .append(name[i])
                    )
                .append(
                    $('<input/>')
                        .attr('type','text')
                        .addClass('barInput')
                        .val("50")
                )
                .append(
                    $('<div/>')
                        .addClass('barHolder')
                        .append(
                            $('<div/>').addClass('bar')
                        )
                )
        );
        
    }
}
// This function takes a text box as input and adjusts the bar graph. 
// You have to fill in missing pieces in the other functions.
function useOneInput(index, el) {
    
    // Use $ to turn the HTML element into a jQuery object
    var $this = $(el);
    
    // Get the value from the input box. $this.val()
    // returns a string; parseInt() makes it a number.
    var value = parseInt($this.val(),10);
    
    // Find the bar corresponding to this input
    var $bar = $this.siblings().find('.bar');
    //sibling()获得匹配元素集合中每个元素的兄弟元素,可以提供一个可选的选择器。
    //find()通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代。   

    // Use percentToWidth to set the new width of the bar
    var maxWidth = $this.siblings('.barHolder').width();

    var newWidth = percentToWidth(value,maxWidth);
    
    setBarWidth($bar,newWidth);
    
    // Remove the old event on the bar
    $bar.off('click');//"click"类型的事件（包括直接和委派）从元素上被移除。
    
    addBarClickEvent($bar,value);
    
}




// Exercise 2
function percentToWidth(percent,maxWidth) {
    // Takes a number between 0 and 100 and a maximum
    // width, and returns the fraction of the maximum width
    // that is given by the number out of 100.
    // percentToWidth(50,250) = 125
    // percentToWidth(75,1000) = 750
    // if percent is not a number, it should return 0
    // if percent is smaller than 0, it should return 0
    // if percent is greater than 100, it should return maxWidth
    var m=maxWidth*(percent/100);
    if(isNaN(percent)){
        return 0;
    }else{
        if(percent<=0){
        return 0;
        }else if(percent>=100){
        return maxWidth;
        }else{
            return (percent/ 100)*maxWidth;
        }
    }
}

// Exercise 3
function setBarWidth($bar,newWidth) {
    // set the width of $bar to width
    // using $bar.width(newWidth);
    $bar.width(newWidth);
}

// Exercise 4
function regraph() {
    // the function that gets called when
    // the user clicks.
    
    // jQuery code that selects all the inputs
    $allInputs = $('.barInput');
    $allInputs.each(useOneInput);
    // each(function(index, Element))遍历一个jQuery对象，为每个匹配元素执行一个函数。
    
}

// Exercise 5
function addBarClickEvent($bar,value) {
    // add a click event to the bar that 
    // pops up an alert with the bars value
    $bar.click(
        function(e){
        alert(value);
        }
    );
}

// Provided jQuery code that creates the graph, attaches a click 
// handler, and draws the initial bar graph.
$('document').ready(function() {
    
    createGraph($('#grapher'));
    
    $('#graphButton').click(regraph);
    
    regraph();
});