//* callback hell → Promise
// 1초마다 배경색이 변경되는 코드 (red - orange - yellow - green - blue)

// callack hell 코드

// setTimeout(() => {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(() => {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise 코드 (me)
function red() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "red";
      resolve();
    }, 1000);
  });
}

function orange() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "orange";
      resolve();
    }, 1000);
  });
}

function yellow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "yellow";
      resolve();
    }, 1000);
  });
}

function green() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "green";
      resolve();
    }, 1000);
  });
}

function blue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "blue";
      resolve();
    }, 1000);
  });
}

async function exec() {
  await red();
  await orange();
  await yellow();
  await green();
  await blue();
}

exec();

// Promise 코드 (teacher)
function changeBgColor(newColor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

// 1. then() 사용
changeBgColor("red")
  .then(() => {
    return changeBgColor("orange");
  })
  .then(() => {
    return changeBgColor("yellow");
  })
  .then(() => {
    return changeBgColor("green");
  })
  .then(() => {
    return changeBgColor("blue");
  });

// 2. async/await 사용
async function exec() {
  await changeBgColor("red");
  await changeBgColor("orange");
  await changeBgColor("yellow");
  await changeBgColor("green");
  await changeBgColor("blue");
}

exec();
