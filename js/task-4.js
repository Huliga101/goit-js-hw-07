const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;
  const formData = { email: email.value.trim(), password: password.value.trim() };

  if (!formData.email || !formData.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);
  form.reset();
});
