// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

let product;
let price;

goMart();
pickDrink();
pay(product, price);

function goMart() {
  console.log("마트에 가서 어떤 음료를 마실까요?");
}
function pickDrink() {
  setTimeout(() => {
    console.log("고민 끝");
    product = "Zero Coke";
    price = 3000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
