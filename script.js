const windowMatch = window.matchMedia("(prefers-color-scheme:dark)");
const logoImage = document.querySelector("[data-logo]");

if (logoImage) {
  function darkMode() {
    if (windowMatch.matches()) {
      logoImage.setAttribute("src", "./img/instagram-for-dark-theme.png");
    } else {
      logoImage.setAttribute("src", "/img/instagram-logo.png");
    }
  }
}

window.addEventListener("onload", darkMode);
