const formEl = document.querySelector("#form");
const errorEl = document.querySelector("#error");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const re = /\S+@\S+\.\S+/;
  const inputEl = e.target.input;
  const inputValue = inputEl.value;
  inputEl.classList.remove("error");
  errorEl.style.display = "none";
  const isValidEmail = re.test(inputValue);

  if (!isValidEmail) {
    inputEl.classList.add("error");
    errorEl.style.display = "block";
  }
});
