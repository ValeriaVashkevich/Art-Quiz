function logo() {
  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  logoContainer.style.backgroundImage = "url(img/logo.jpg)";
  return logoContainer;
}

export default logo;
