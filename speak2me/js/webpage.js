
var sideup = 0;

$(".side-bar").click(function(){
	if(sideup == 0){



	$("#Sidenav").css("transition", "0.5s");
	$(".account").css("display", "block");
 		
 
 	
 	sideup = 1;
    }
    else{
    	$("#Sidenav").css("transition", "0.2s");
       
        $(".account").css("display", "none");
 	    sideup = 0;
 	   
    }
})



$("#Sidenav-clear").click(function(){
	if(sideup == 0){



	$("#Sidenav").css("transition", "0.5s");
	$(".account").css("display", "block");
 		

 
 	sideup = 1;
    }
    else{
    	$("#Sidenav").css("transition", "0.2s");
       
        $(".account").css("display", "none");
 	    sideup = 0;
 
    }
})








