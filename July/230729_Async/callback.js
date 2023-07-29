/*
// callback() 사용 예시
// 메인 함수, 함수 파라미터 맨 마지막에 하나 더 선언
function mainFunc(param1, param2, callback) {
  // 콜백 함수에 결과 전달
  const result = param1 + param2;
  //   console.log("mainFunc");
  callback(result);
}

function callbackFunc(param) {
  console.log(param);
}
mainFunc(1, 2, callbackFunc);

//---------------------------------------//
let product;
let price;

goMart();
pickDrink(pay);
// pay(product, price);

function goMart() {
  console.log("마트에 가서 어떤 음료를 마실까요?");
}
function pickDrink(callback) {
  setTimeout(() => {
    console.log("고민 끝");
    product = "Zero Coke";
    price = 3000;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

*/

// -----------------callback hell--------------------
// 1초마다 배경색이 변경되는 코드 (red - orange - yellow - green - blue)
setTimeout(() => {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(() => {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
