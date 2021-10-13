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
    await myname(false, 3)
  } catch (error) {
    console.log('error');
  }

}
main();