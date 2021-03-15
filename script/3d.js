(function() {
  const houseElem = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  const stageElem = document.querySelector(".stage");
  const mousePos = { x: 0, y: 0 };
  let maxScrollValue = 0;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function() {
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  window.addEventListener("mousemove", function(e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    // console.log(mousePos.x, mousePos.y);
    stageElem.style.transform =
      "rotateX(" + mousePos.y * 5 + "deg) rotateY(" + mousePos.x * 5 + "deg)";
  });

  window.addEventListener("resize", resizeHandler);

  stageElem.addEventListener("click", function(e) {
    //생성되게, 생성자 호출
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
      speed: Math.random() * 0.5 + 0.2
    });
  });

  // 처음에한번실행
  resizeHandler();
})();
