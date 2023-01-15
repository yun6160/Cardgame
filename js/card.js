function shuffle() {
  // 카드 섞기
  var carddeck = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card1",
    "card2",
    "card3",
    "card4",
    "card5"
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
      "<img src='img/backimg.jpg' class=" +
      mixup[i] +
      " width='100px' height='150px'>&nbsp";
    $("#cardground").append(createcard);
  }
}

cardset();

$(document).ready(function () {
  $(document).on("click", "img", function () {
    var check = $(this).hasClass("open"); // 클릭한 카드가 오픈된 카드인지 true/false
    var CSS = $(this).attr("class"); // 클릭한애 클래스 값 클래스 값이 card1, card2, card2 open 이런식으로 했음

    if (check != true) {  //카드가 오픈되지않은 카드일 경우
      $(this).attr("src", "img/" + CSS + ".jpg"); // 클릭한애 <img src="/img/card2.jpg" class="card2">(예시) 열려있음
      $(this).addClass("open"); //클릭한 애 <img src="./img/card2.jpg" class="card2 open">
    } else {
      console.log("뒤집힌 카드");
    }
    var openLength = $(".open").length; //선택된 카드 정렬 길이

    if (openLength == 2) {
      //두개 선택됐을때 정렬이 찼을때
      var FirstB = $(".open").eq(0).attr("class"); //class="card1 open"
      var SecondB = $(".open").eq(1).attr("class"); //class="card2 open"

      var CSSCheck = $(".open").hasClass("card1");  //당첨 카드인지 아닌지

      if (FirstB != SecondB) {
        setTimeout(function () {
          $(".open").attr("src", "img/backimg.jpg"); //class="open"인 애의 src 요소를 저걸로 바꿔라(다시 덮어라)
          $("img").removeClass("open"); //열었다는 클래스 지워라
        }, 200);
      } else if (CSSCheck == false) {
        setTimeout(function () {
          $(".open").attr("src", "img/backimg.jpg"); //clas="back"인 애의 src 요소를 저걸로 바꿔라(다시 덮어라)
          $("img").removeClass("open"); //열었다는 클래스 지워라
        }, 200);
      } else {
        setTimeout(function(){
          alert("바니 찾기 성공!");
          show();
  
          return;

        }, 200);
      }
      openLength = 0;
    }
  });
});

// 포인트 적립 버튼
function show() {
  $("#start_btn").show();
}
