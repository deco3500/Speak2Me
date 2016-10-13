
var sideup = 0;

$(".side-bar").click(function(){
	if(sideup == 0){



	$("#Sidenav").css("transition", "0.5s");
	$(".account").css("display", "block");
 		
 	$("body div").css("opacity","1");
 	$("body #Sidenav").css("opacity", "1");
 	sideup = 1;
    }
    else{
    	$("#Sidenav").css("transition", "0.2s");
       
        $(".account").css("display", "none");
 	    sideup = 0;
 	    $("body div").css("opacity","1");
    }
})



$("#Sidenav-clear").click(function(){
	if(sideup == 0){



	$("#Sidenav").css("transition", "0.5s");
	$(".account").css("display", "block");
 		
 	$("body div").css("opacity","1");
 	$("body #Sidenav").css("opacity", "1");
 	sideup = 1;
    }
    else{
    	$("#Sidenav").css("transition", "0.2s");
       
        $(".account").css("display", "none");
 	    sideup = 0;
 	    $("body div").css("opacity","1");
    }
})








