username = document.getElementById("username");
password = document.getElementById("password");
btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  addUser(username.value, password.value);
});

let users = [];

const addUser = (username, password) => {
  users.push([username, password]);
};

export default users;
