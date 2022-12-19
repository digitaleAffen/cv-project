function MakeItLight() {
  let body = document.querySelector("body");

  //   body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
  }
}

let buttonElement = document.querySelector(".theme-button");
buttonElement.addEventListener("click", MakeItLight);
