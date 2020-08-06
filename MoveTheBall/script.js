var ball=document.getElementById('ball') ;
var coordinates = ball.getBoundingClientRect() ;

document.addEventListener('keypress' , function(event){
    var key= event.keyCode ;
    var height=window.innerHeight;
    var width=window.innerWidth;
    var coordinates = ball.getBoundingClientRect() ;
    var top= ball.offsetTop ;
    var left=ball.offsetLeft;

    if(key==83 && height-coordinates.top - coordinates.height >0){

        ball.style.top =top + 20+'px' ;

    }
    else if(key==68 && width-coordinates.width - coordinates.left >0){
        
        ball.style.left = left + 20+'px';

    }
    else if(key==87 && top>0){

        ball.style.top=top-20+'px' ;

    }
    else if(key==65 && left >0){

        ball.style.left = left - 20+'px';

    }

});