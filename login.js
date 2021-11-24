let username = "";
let password = "";

chrome.runtime.sendMessage({ localstorage: "username" }, function (response) {
  username = response.username;
  document.getElementById("username").value = username;
});

chrome.runtime.sendMessage({ localstorage: "password" }, function (response) {
  password = response.password;
  document.getElementById("password").value = password;
  document.getElementById("loginbtn").click();
});
