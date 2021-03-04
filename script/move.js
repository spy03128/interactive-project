// window.addEventListener("DOMContentLoaded", function() {
//   const ilbuniGroup = document.querySelectorAll(".ilbuni");
//   const stage = document.querySelector(".stage");
//
//   function clickHandler() {
//     // stage.removeChild(this);
//     this.parentNode.removeChild(this);
//   }
//
//   // for (let i = 0; i < ilbuniGroup.length; i++) {
//   //   ilbuniGroup[i].addEventListener("click", clickHandler);
//   // }
//
//   //for문 풀어쓴것
//   ilbuniGroup[0].addEventListener("click", clickHandler);
//   ilbuniGroup[1].addEventListener("click", clickHandler);
//   ilbuniGroup[2].addEventListener("click", clickHandler);
//
//
//
// });

//이벤트 위임으로 다시 짠 코드 : 부모한테 위임 <stage 이용>
window.addEventListener("DOMContentLoaded", function() {
  const stage = document.querySelector(".stage");

  function clickHandler(e) {
    if (e.target.classList.contains("ilbuni")) {
      // console.log(e.target);
      stage.removeChild(e.target);
    }
  }

  stage.addEventListener("click", clickHandler); //한번만 사용가능. 이전에는 모든 요소에 사용해야하였음.
});
