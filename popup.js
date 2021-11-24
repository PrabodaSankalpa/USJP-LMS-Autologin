document.addEventListener("DOMContentLoaded", documentEvents, false);

function myAction(username, password) {
  //alert("The entered data is : " + username.value + " and " + password.value);
  if (username.value && password.value) {
    let user = [{ username: username.value, password: password.value }];
    localStorage.setItem("users", JSON.stringify(user));
    chrome.notifications.create("SaveData", {
      type: "basic",
      iconUrl: "images/logo64.png",
      title: "Successful!",
      message: "Your data successfully saved in Database",
      priority: 2,
    });
  } else {
    alert("Please, enter your user credentials");
  }
}

function documentEvents() {
  document.getElementById("setbtn").addEventListener("click", function () {
    myAction(
      document.getElementById("username"),
      document.getElementById("password")
    );
  });
}

//let userdata = JSON.parse(localStorage.getItem("users"));


