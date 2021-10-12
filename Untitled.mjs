import fetch from 'node-fetch';
//console.log("practice");
async function loadUser() {
  //console.log("inside load user");
  const response = await fetch("https://randomuser.me/api");
  //console.log("data is fetched");
  // return response;

  // var jsons = JSON.parse(response);
  console.log(response);
  const users = await response.json();
  //console.log("data is resolved");
  // console.log(users);
  return users;
  // return users;
  // return users;
}
//console.log("running");
loadUser().then((data) => console.log(data));
//console.log("running1");
//console.log("running3");
// console.log(fetch("https:randomuser.me/api"));
