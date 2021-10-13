function callBacks(state, callback) {
  if (state) {
    console.log('error')
  } else {
    count++;
    callback();
    if (state) {
      console.log('error')
    } else {
      count++;
      callback();
      return callBacks(false, displayConsole)
      if (state) {
        console.log('error')
      } else {
        count++;
        callback();
      }
    }
  }
}
let count = 0;

function displayConsole() {

  console.log(`Call backs working succesfully ${count}`);
}

callBacks(false, displayConsole);