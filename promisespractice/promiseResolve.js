function myname(state) {
  return new Promise(function (resolve, reject) {
    throw resolve();
  });
}

let promise = myname(true);
promise.then(
    () => {
      console.log('dad');
      return true;
    }
  )
  .then(
    () => {
      console.log('child');
      return myname(false);
    }
  )
  .then(
    () => {
      console.log('grand child');
      return myname(false);
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