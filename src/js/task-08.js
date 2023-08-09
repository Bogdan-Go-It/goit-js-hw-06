const form = document.querySelector("form.login-form");
form.addEventListener("submit", handlSubmit);
function handlSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const emailPassword = [];
  emailPassword.push(`${email.name}: ${email.value}`);
  emailPassword.push(`${password.name}: ${password.value}`);
  console.log(emailPassword);

  event.currentTarget.reset();
}
