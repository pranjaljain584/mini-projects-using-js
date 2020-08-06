var box = document.getElementById('box') ;
var coord = box.getBoundingClientRect() ;

box.addEventListener('mouseover' , catchMe) ;

function getRandomTop(){
    var height = window.innerHeight ;
    var randomNum = Math.random() * 2000 ;
    var randomTop = +(randomNum % height) ;
    return randomTop; 
}

function getRandomLeft(){
    var width = window.innerWidth ;
    var randomNum = Math.random() * 2000 ;
    var randomLeft = +(randomNum % width) ;
    return randomLeft; 
}

function catchMe(){
    var top = getRandomTop() ;
    var left = getRandomLeft() ;

    if(left + coord.width > window.innerWidth){
        left = left-coord.width;
    }

    if(top + coord.height > window.innerHeight){
        top = top-coord.height;
    }

    box.style.left = left + 'px' ;
    box.style.top = top + 'px' ; 
}
