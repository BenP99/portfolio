window.onscroll = function() {
    var nav = document.getElementById('nav');
    if ( window.pageYOffset > 800 ) {
        nav.classList.add("navbar-down");
    } else {
        nav.classList.remove("navbar-down");
    }
}