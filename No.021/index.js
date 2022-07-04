const tempPromise = function (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) resolve(num);
      else reject(-100);
    }, 1000);
  });
};

tempPromise(1)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// function callbackFunc(num, time = undefined, func = undefined) {
//   if (time) {
//     setTimeout(() => {
//       console.log(num);
//       func(num);
//     }, time);
//   } else {
//     setTimeout(() => {
//       console.log(num);
//     }, 10000);
//   }
// }

// callbackFunc(1, 5555, () => {
//   callbackFunc(2, 1111, () => {
//     callbackFunc(3, 2222, () => {
//       callbackFunc(4, 4444, () => {
//         callbackFunc(6);
//       });
//     });
//   });
// });

function promiseFunc(num, time) {
  return new Promise((resolve, reject) => {
    try {
      if (num === 0) {
        setTimeout(() => {
          reject("문제가 있어");
        }, time);
      } else {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, time);
      }
    } catch (e) {
      console.log(e);
    }
  });
}

// promiseFunc(1, 5555)
//   .then(() => {
//     return promiseFunc(0);
//   })
//   .then(() => {
//     return promiseFunc(2, 1111);
//   })
//   .then(() => {
//     return promiseFunc(3, 2222);
//   })
//   .then(() => {
//     return promiseFunc(4, 4444);
//   })
//   .then(() => {
//     return promiseFunc(5, 1111);
//   })
//   .then(() => {
//     return promiseFunc(6);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// console.log("완료");
async function asyncFunc() {
  try {
    await promiseFunc(1, 5555);
    await promiseFunc(2, 1111);
    await promiseFunc(3, 2222);
    await promiseFunc(0, 2222);
  } catch (e) {
    console.log(e);
  }
  console.log("완료");
}
asyncFunc();
