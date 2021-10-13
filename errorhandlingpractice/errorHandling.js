//basic practice of error handling

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
async function main() {
  try {
    await myname(true, 0);
    console.log('dad');
    await myname(true, 2);
    console.log('child');
    await myname(true, 3);
    console.log('grand child');
    blabla(); // reference error 
    await myname(true, 3);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Reference error');
    } else {
      console.log('error');
    }
  }

}
main();