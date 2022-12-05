$(function () {


  const burger = document.querySelector('.header__burger');
  const navMenu = document.querySelector('.header__menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.header__menu-link').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
  }));


  const wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  );
  wow.init();
      

 

});

