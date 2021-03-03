window.addEventListener("DOMContentLoaded", function() {
  const ilbuniGroup = document.querySelectorAll(".ilbuni");
  const stage = document.querySelector(".stage");

  function clickHandler() {
    // stage.removeChild(this);
    this.parentNode.removeChild(this);
  }

  for (let i = 0; i < ilbuniGroup.length; i++) {
    ilbuniGroup[i].addEventListener("click", clickHandler);
  }
});
