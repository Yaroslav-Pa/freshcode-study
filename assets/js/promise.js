new Promise((resolve, reject) => {
  Math.random() >= 0.5 ? resolve('resolve') : reject('reject');
}).then(
  (result) => console.log(result),
  (result) => console.log(result)
);
