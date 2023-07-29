/*
function promise1(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve(
        "promise 상태는 fulfilled!! then으로 연결됩니다.\n이때의 flag는 true입니다.",
      );
    } else {
      reject(
        "promise 상태는 rejected!! catch로 연결됩니다.\n이때의 flag는 false입니다.",
      );
    }
  });
}

promise1(true) //false
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

*/

//---------------------------------//

/*
let product;
let price;

goMart();
// pickDrink().then(pay);
pickDrink()
  .then(() => {
    console.log(`상품명: ${product}, 가격: ${price}`);
  })
  .catch((error) => {
    console.log(error);
  });

function goMart() {
  console.log("마트에 가서 어떤 음료를 마실까요?");
}
function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝");
      product = "Zero Coke";
      price = 4000;
      if (price <= 3000) {
        resolve();
      } else {
        reject("돈이 부족해요");
      }
    }, 3000);
  });
}

// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }
*/

//* ------------------Promise Chaining-----------------------
// (4+3)*2-1
// 체이닝 사용 안한 경우

// function add(n1, n2, callback) {
//   setTimeout(() => {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(() => {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(() => {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// add(4, 3, (x) => {
//   console.log("1: ", x);
//   mul(x, (y) => {
//     console.log("2: ", y);
//     sub(y, (z) => {
//       console.log("3: ", z);
//     });
//   });
// });

//* 체이닝 사용한 경우
//* 장점
//* then 메서드를 연속해서 사용이 가능하다 👉🏻 순차적으로 작업 가능
//* 예외처리 간편 👉🏻 마지막에 catch 구문으로 한 번에 처리

/*
function add(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = n - 1;
      //   resolve(result);
      reject(new Error("의도적으로 에러를 일으켜봤음!"));
    }, 500);
  });
}

add(4, 3)
  .then((result) => {
    console.log("1: ", result);
    return mul(result);
  })
  .then((result) => {
    console.log("2: ", result);
    return sub(result);
  })
  .then((result) => {
    console.log("3: ", result);
  })
  .catch((error) => {
    console.log("실패!");
    console.log(error);
  });
*/

//* ------------------Promise → async/await-----------------------
//* 구조
//* 함수 앞에 async 키워드 붙이고, 비동기 처리 메서드 앞에 await 키워드 붙임(기다림)

let product;
let price;
exec();

function goMart() {
  console.log("마트에 가서 어떤 음료를 마실까요?");
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝");
      product = "Zero Coke";
      price = 3000;
      if (price <= 3000) {
        resolve();
      } else {
        reject("돈이 부족해요");
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); // 1번쨰 실행
  await pickDrink(); // 2번쨰 실행
  pay(); // 3번쨰 실행
}
