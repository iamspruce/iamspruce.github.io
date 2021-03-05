var toggleBtn = document.querySelector('.js-nav-open');
var closeBtn = document.querySelector('.js-nav-close');
var nav = document.querySelector('.js-nav');

toggleBtn.addEventListener('click', function() {
    nav.classList.add('active');
    document.documentElement.classList.add('active');
    this.setAttribute("aria-label", "open menu");
    this.setAttribute("aria-expanded", "false");
});
closeBtn.addEventListener('click', function() {
    nav.classList.remove('active');
    document.documentElement.classList.remove('active');
    this.setAttribute("aria-expanded", "true");
    this.setAttribute("aria-label", "Close menu");
});

