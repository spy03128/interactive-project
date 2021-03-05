window.addEventListener("DOMContentLoaded", function() {
  const stageElem = document.querySelector(".stage");
  let currentItem = null; //현재 활성화된 아이템을 저장하는 변수

  function activate(elem) {
    elem.classList.add("door-opened");
    currentItem = elem;
  }

  function inactivate(elem) {
    elem.classList.remove("door-opened");
  }

  function doorHandler(e) {
    const targetElem = e.target;
    // const currentItem = document.querySelector(".door-opened");

    if (currentItem) {
      inactivate(currentItem);
    }
    if (targetElem.classList.contains("door-body")) {
      activate(targetElem.parentNode);
    }
  }

  stageElem.addEventListener("click", doorHandler);

  // activate(document.querySelector(".door:first-child"));
  activate(document.querySelector(".door:nth-child(1)"));
});
