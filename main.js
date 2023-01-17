const primaryNav = document.querySelector('.nav_links');
const navToggle = document.querySelector('.mobile__toggle');

navToggle.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.setAttribute("style","background:url('assets/images/icon-menu-close.svg')no-repeat");
    }
    else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navToggle.setAttribute("style","background:url(assets/images/icon-menu.svg)no-repeat");
    }
    
})