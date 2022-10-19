const link = document.querySelector("#link");
const text = document.querySelector(".mainly article form span");
console.log(text);

link.addEventListener("blur", (event) => {
  let regex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (event.target.value.match(regex)) {
    link.classList = "";
    text.style.color = "transparent";
  } else {
    link.classList = "error--message";
    text.style.color = "hsl(0, 87%, 67%)";
  }
});

link.addEventListener("keypress", (event) => {
  link.classList = "";
  text.style.color = "transparent";
});
