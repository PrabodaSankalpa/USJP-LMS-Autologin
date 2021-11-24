chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.localstorage == "username") {
    sendResponse({
      username: JSON.parse(localStorage.getItem("users"))[0].username,
    });
  } else if (request.localstorage == "password")
    sendResponse({
      password: JSON.parse(localStorage.getItem("users"))[0].password,
    });
  else sendResponse({});
});
