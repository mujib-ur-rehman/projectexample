function myname(state, num) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve();
      console.log(num *= num);
    } else {
      reject('error');
    }
  });
}

let promise = myname(true, 0);
promise.then(
    () => {
      console.log('dad');
      return myname(true, 2);
    }
  )
  .then(
    () => {
      console.log('child');
      return myname(false, 3);
    }
  )
  .then(
    () => {
      console.log('grand child');
      return myname(false, 4);
    }
  )
  .catch(
    (error) => {
      console.log('error');
    }
  )
  .finally(
    () => {
      console.log("finally empty")
    }
  )