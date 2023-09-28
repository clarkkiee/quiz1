window.onscroll = function() {
    const nav = document.querySelector('nav');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add("navbar-fixed");
    } else {
        nav.classList.remove("navbar-fixed");
    }
 
}