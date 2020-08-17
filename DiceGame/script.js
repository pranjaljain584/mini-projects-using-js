var player1 = document.getElementsByClassName('img1')[0] ;
var player2 = document.getElementsByClassName('img2')[0] ;
var result = document.getElementsByClassName('result')[0] ;

window.onload = function(){myFunction()} ;

function getRandomNum(){
    var random = Math.random() ;
    var num = Math.floor(random*7);
    if(num==0){
        return 1 ;
    }
    return num ;
}

function myFunction(){
    var num1 = getRandomNum() ;
    var num2= getRandomNum() ;
    
    player1.setAttribute("src" , 'images/dice'+num1+'.png');
    player2.setAttribute("src" , 'images/dice'+num2+'.png');

    if(num1==num2){
        result.innerText = "Draw" ;
    }else if (num1>num2){
        result.innerText ="🚩Player 1 wins!" ;
    }else{
        result.innerText="Player 2 wins! 🚩" ;
    }
};