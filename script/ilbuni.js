window.addEventListener('DOMContentLoaded',function(){
  const ilbuni = document.querySelector('.ilbuni.c');

  function clickInbuntilHandler(){
    ilbuni.classList.toggle('special');
  }

  ilbuni.addEventListener('click',clickInbuntilHandler);


  const ilbuni2 = document.querySelector('.ilbuni.a');
  function clickHandler(){
    ilbuni2.classList.toggle('plus');
  }
  ilbuni2.addEventListener('mousedown',clickHandler);

});
