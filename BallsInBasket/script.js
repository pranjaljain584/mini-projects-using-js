var container = $("#container");

$("#btn").click(function(){

    container.append('<div class="circle" style="background-color: '+ getRandomColor() +'" ></div>')

    // $("#container").add("div").addClass("circle").css("backgroundColor" , getRandomColor());
});

var colorArray=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick' , 'crimson'];

function getRandomColor(){
    var num = Math.floor( Math.random()*(colorArray.length) );
    return colorArray[num];
}