function checkLocalStorage() {
  if (window.localStorage.getItem("class") !== "") {
    document.querySelectorAll(".links li a").forEach((element) => {
      element.classList.remove("active");
      if (element.dataset.name === localStorage.getItem("class")) {
        element.classList.add("active");
      }
    });
  }
}
checkLocalStorage();
// Start
function upButton() {
  const button = document.querySelector("#up");
  window.onscroll = function () {
    if (window.scrollY >= 700) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  //  window.scrollTo({
  //    left: 0,
  //    top: 0,
  //    behavior: "smooth",
  //  });
  button.onclick = function () {
    window.scrollTo({
      left: 0,
      top: 0,
    });
  };
}
upButton();
// End
function toggle() {
  document.querySelector(".container-bars").onclick = function () {
    document.querySelector("header ul").classList.toggle("show");
  };
}
toggle();
// End

// Start
function links() {
  const links = document.querySelectorAll(".links li a");
  links.forEach((element) => {
    element.addEventListener("click", (e) => {
      links.forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");
      window.localStorage.setItem("class", e.target.dataset.name);
    });
  });
}
links();
// End

// footer
const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
