function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML =
    "" +
    '<div class="character">' +
    '<div class="character-face-con character-head">' +
    ' <div class="character-face character-head-face face-front"></div>' +
    ' <div class="character-face character-head-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-torso">' +
    '<div class="character-face character-torso-face face-front"></div>' +
    '<div class="character-face character-torso-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-arm character-arm-right">' +
    '<div class="character-face character-arm-face face-front"></div>' +
    '<div class="character-face character-arm-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-arm character-arm-left">' +
    '<div class="character-face character-arm-face face-front"></div>' +
    '<div class="character-face character-arm-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-leg character-leg-right">' +
    '<div class="character-face character-leg-face face-front"></div>' +
    '<div class="character-face character-leg-face face-back"></div>' +
    "</div>" +
    '<div class="character-face-con character-leg character-leg-left">' +
    '<div class="character-face character-leg-face face-front"></div>' +
    '<div class="character-face character-leg-face face-back"></div>' +
    "</div>" +
    "</div>";

  document.querySelector(".stage").appendChild(this.mainElem);
  this.mainElem.style.left = info.xPos + "%";
  this.scrollState = false; //스크롤중인지 아닌지를 체크하는 변수
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function() {
    const self = this;
    window.addEventListener("scroll", function() {
      clearTimeout(self.scrollState);
      //이전 setTimeout 함수로 인해서 0.5초 후에 remove 함수가 실행되는데,
      //0.5초전에 다음 스크롤이 일어나기때문에, setTimeout을 삭제시킨다

      if (!self.scrollState) {
        self.mainElem.classList.add("running");
      }

      self.scrollState = setTimeout(function() {
        self.scrollState = false;
        self.mainElem.classList.remove("running");
      }, 500);
    });
  }
};
