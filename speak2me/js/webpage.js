
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

$(".edit-button").click(function(){
    $(".tags-menu").css("visibility", "visible");
    $(".tags-menu").css("opacity", "1");
    $(".overlay-wrapper-tags").css("display", "block");
    $(".tags-menu .column").each(function(){
            $(this).removeClass("tag-selected");
    });
});

$(".overlay-wrapper-tags").click(function(){
    $(".tags-menu").css("visibility", "hidden");
    $(".tags-menu").css("opacity", "0");
    $(".overlay-wrapper-tags").css("display", "none");
})

function closeTagMenu(){
    $(".tags-menu").css("visibility", "hidden");
    $(".tags-menu").css("opacity", "0");
    $(".overlay-wrapper-tags").css("display", "none");
}

$(".tags-menu .tag-image-text").click(function(){
    if($(this).parent().hasClass("tag-selected")){
        $(this).parent().removeClass("tag-selected");
    } 
    else{
        $(this).parent().addClass("tag-selected");
    }
      
});

$(".tags-menu button").click(function(){
    $(".tags-menu .column").each(function(){
        if($(this).hasClass("tag-selected")){
            var tag = $(this).text().replace(/\s+/g, " ");
            var add = 1;
            $(".account-details .tag").not(".tag-reputation").each(function(){
                var otherTag = $(this).text().replace(/\s+/g, " ");
                var more = " " + otherTag;
                if(tag == more){
                    add = 0;
                }
            });
            if(add){
            $(".account-details p:contains('Preferred tags') .fa-tags").after(
                $("<span class='tag'>"+ tag +"  <span class='fa fa-times-circle created-tag'></span></span>"));
            }
        }
    });
    closeTagMenu();

});


$(document.body).on("click", ".fa-times-circle", function(){
    $(this).parent().remove();
})
