function getColor(){
    // console.log("color") ;
	var randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
    //16777215 total colors possible 16^6 ;
    return randomColor;
}

var background=document.getElementsByClassName("outer-circle");
var changeColor=document.getElementsByClassName("btn1");
var shape=document.getElementsByClassName("shape");
var changeShape=document.getElementsByClassName("btn2");

changeColor[0].addEventListener('click',function(){
    // console.log("hy")
    var color=getColor() ;
    background[0].style.backgroundColor=color ;
});

changeShape[0].addEventListener('click',function(){
    // console.log("hy")
    
});

