let userInfo = new XMLHttpRequest();
userInfo.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("userName").innerHTML = myObj.users[0].username;
    document.getElementById("role").innerHTML = myObj.users[0].role;
    document.getElementById("languages").innerHTML = myObj.users[0].languages;

    console.log(myObj.users[0].username);
    console.log(myObj.users[0].role);
    console.log(myObj.users[0].languages);
  }
};

userInfo.open("GET", "mock-server.json", true);
userInfo.send();
