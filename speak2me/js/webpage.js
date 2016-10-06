
var sideup = 0;

$("div .top-nav-link a").click(function(){
	if(sideup == 0){
	$("#Sidenav").css("transition", "0.5s");
 	$("#Sidenav").css("width", "300px"); 	
 	$("body div").css("opacity","0.6");
 	$("body #Sidenav").css("opacity", "1");
 	sideup = 1;
    }
    else{
    	$("#Sidenav").css("transition", "0.2s");
        $("#Sidenav").css("width", "0px");
 	    sideup = 0;
 	    $("body div").css("opacity","1");
    }
})








