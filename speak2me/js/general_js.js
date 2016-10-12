$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});




/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function openNavMusic() {
    document.getElementById("myNavmusic").style.width = "100%";
}


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function closeNavMusic() {
    document.getElementById("myNavmusic").style.width = "0%";
}