// $("#outerDiv").click(function(){
//    console.log("hi") ;
//    $("#circle").toggleClass("toggled2") ;
//    $("body").toggleClass("toggled1");
//    $("h1").toggleClass("toggled3");
// });

var btn=document.getElementById("outerDiv") ;
var innerDiv=document.getElementById("circle");
var toggled=true;
var bodyEle=document.body ;
var head=document.getElementsByTagName('h1') ;

btn.addEventListener('click',function(){
    // console.log('Hii');
   if(toggled){
      bodyEle.style.backgroundColor="black" ;
      innerDiv.style.marginLeft="-0.01px";
      head[0].style.color="white" ;
      toggled=false;
   }else{
      bodyEle.style.backgroundColor="white" ;
      innerDiv.style.marginLeft="45px";
      toggled=true;
      head[0].style.color="black" ;
   }
});