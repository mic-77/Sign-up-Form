document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;
  let error = document.querySelector("#error");
  console.log("hi");
  if (password === confirmPassword && password !== "") {
    error.textContent = "*password do match";
  } else {
    error.textContent = "*password do not match";
  }
});
