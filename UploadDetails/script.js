$(".btn").click(function(){

    var rollNo = $("#Num").val() ; 
    var name = $("#Name").val() ;
    var marks =$("#marks").val() ;

    if(rollNo==="" || name==="" ||marks===""){
        alert("required") ;
    }else{

        $("#aside").append('<div> Roll No: <span class="box">'+ rollNo +'</span> , <span class="box">'+ name +'</span> has got <span class="box">'+ marks +'</span> marks </div>');
    }
    
})