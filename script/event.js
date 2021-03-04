window.addEventListener("DOMContentLoaded", function() {
  // const btns = document.querySelectorAll(".menu-btn");
  const menu = document.querySelector(".menu");

  function clickHandler(e) {
    let elem = event.target;
    while (!elem.classList.contains("menu-btn")) {
      elem = elem.parentNode;

      if (elem.nodeName == "BODY") {
        elem = null;
        return;
      }
    }
    // console.log(e.target.getAttribute("data-value"));
    // console.log(e.target.dataset.value);
    console.log(elem.dataset.value);
  }
  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", clickBtnHandler);
  // }
  menu.addEventListener("click", clickHandler);
});
