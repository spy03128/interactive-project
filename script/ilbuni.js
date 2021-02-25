window.addEventListener('DOMContentLoaded',function(){
  const ilbuni = document.querySelector('.ilbuni.c');

  function clickInbuntilHandler(){
    ilbuni.classList.toggle('special');
  }

  ilbuni.addEventListener('click',clickInbuntilHandler);
});
