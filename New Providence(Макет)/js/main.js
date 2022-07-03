$(document).ready(function(){
  const header = document.getElementById('main-nav');

  window.addEventListener("scroll", checkScroll);
  document.addEventListener("DOMContentLoaded", checkScroll);

  // Находим количество пролистанных пикселей
  function checkScroll() {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
      header.classList.add('active');

    } else {
      header.classList.remove('active');
    }
  }
  
  // Переключать в блоке Плана //
  $(".switch-btn").click(function(){
    $(".switch-btn").toggleClass("active");
    $(".individual").toggleClass('active');
    $(".company").toggleClass('active');
  });
});
