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
  this.xPos = info.xPos;
  //바로이전 스크롤 위치
  this.lastScrollTop = 0;
  //캐릭터 스피드
  this.speed = info.speed;
  //캐릭터 방향
  this.direction;
  //좌우 이동 중인지 아닌지 판별
  this.runningState = false;
  this.rafID;
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

      //이전 스크롤 위치와 현재 스크롤 위치를 비교
      if (self.lastScrollTop > pageYOffset) {
        self.mainElem.setAttribute("data-direction", "backward");
      } else {
        self.mainElem.setAttribute("data-direction", "forward");
      }

      self.lastScrollTop = pageYOffset;
    });

    window.addEventListener("keydown", function(e) {
      if (self.runningState) return; //함수종료

      if (e.keyCode == 37) {
        self.direction = "left";
        self.mainElem.setAttribute("data-direction", "left");
        self.mainElem.classList.add("running");
        self.run(self);
        self.runningState = true;
      } else if (e.keyCode == 39) {
        self.direction = "right";
        self.mainElem.setAttribute("data-direction", "right");
        self.mainElem.classList.add("running");
        self.run(self);
        self.runningState = true;
      }
    });

    window.addEventListener("keyup", function(e) {
      self.mainElem.classList.remove("running");
      cancelAnimationFrame(self.rafID);
      self.runningState = false;
    });
  },
  run: function(self) {
    // const self = this;
    if (self.direction == "left") {
      self.xPos -= self.speed;
    } else if (self.direction == "right") {
      self.xPos += self.speed;
    }

    if (self.xPos < 2) {
      self.xPos = 2;
    } else if (self.xPos > 88) {
      self.xPos = 88;
    }

    self.mainElem.style.left = self.xPos + "%";

    self.rafID = requestAnimationFrame(function() {
      self.run(self);
    });
  }
};
