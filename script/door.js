window.addEventListener("DOMContentLoaded", function() {
  const stageElem = document.querySelector(".stage");
  let currentItem = null; //현재 활성화된 아이템을 저장하는 변수

  function doorHandler(e) {
    const targetElem = e.target;

    // const currentItem = document.querySelector(".door-opened");

    if (currentItem) {
      currentItem.classList.remove("door-opened");
    }
    if (targetElem.classList.contains("door-body")) {
      targetElem.parentNode.classList.add("door-opened");
      currentItem = targetElem.parentNode;
    }
  }

  stageElem.addEventListener("click", doorHandler);
});
