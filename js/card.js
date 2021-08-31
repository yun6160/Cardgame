function shuffle() {
  // 카드 섞기
  var carddeck = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
  ];
  var j, x, i;
  for (i = carddeck.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = carddeck[i - 1];
    carddeck[i - 1] = carddeck[j];
    carddeck[j] = x;
  }
  return carddeck; // 섞인 어레이
}

function cardset() {
  //카드 깔기
  var mixup = shuffle();
  for (var i = 0; i < mixup.length; i++) {
    var createcard =
      "<img src='/img/backimg.jpg' class=" +
      mixup[i] +
      " width='100px' height='150px'>&nbsp";
    $("#cardground").append(createcard);
  }
}

cardset();

$(document).ready(function () {
  $(document).on("click", "img", function () {
    //클릭시 id 값 가져와서 사진 매치 시키기
    var check = $(this).hasClass("back"); // 클릭한 애 엘리먼트 안에 클래스 네임을 가진 애를 찾아줌 true/false
    var CSS = $(this).attr("class"); // 클릭한애 클래스 속성의 값 위에서 클래스 값이 card1, card2, card2 back 이런식으로 했음

    if (check != true) {
      $(this).attr("src", "/img/" + CSS + ".jpg"); // 클릭한애 <img src="/img/card2.jpg" class="card2">(예시) 열려있음
      $(this).addClass("back"); //클릭한 애 <img src="./img/card2.jpg" class="card2 back">
    } else {
      console.log("back");
    }
    var BackLength = $(".back").length; //선택된 카드 정렬 길이

    if (BackLength == 2) {
      //두개 선택됐을때 정렬이 찼을때
      var FirstB = $(".back").eq(0).attr("class"); //class="card1 back"
      var SecondB = $(".back").eq(1).attr("class"); //class="card2 back"

      var CSSCheck = $(".back").hasClass("card1");

      if (FirstB != SecondB) {
        setTimeout(function () {
          $(".back").attr("src", "/img/backimg.jpg"); //class="back"인 애의 src 요소를 저걸로 바꿔라(다시 덮어라)
          $("img").removeClass("back"); //열었다는 클래스 지워라
        }, 200);
      } else if (CSSCheck == false) {
        setTimeout(function () {
          $(".back").attr("src", "/img/backimg.jpg"); //clas="back"인 애의 src 요소를 저걸로 바꿔라(다시 덮어라)
          $("img").removeClass("back"); //열었다는 클래스 지워라
        }, 200);
      } else {
        setTimeout(function(){
          alert("바니 찾기 성공!");
          alert("100 point 적립하세요!");
          show();
  
          return;

        }, 200);
      }
      BackLength = 0;
    }
  });
});

// 포인트 적립 버튼
function show() {
  $("#start_btn").show();
}
