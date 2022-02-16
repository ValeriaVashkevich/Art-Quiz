function button(ico, content) {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "button-wrapper";
  const button = document.createElement("button");
  button.className = "button";
  const buttonImg = document.createElement("div");
  buttonImg.className = "button-img";
  if (!ico) {
    buttonImg.className = "button-img_undefined";
  }
  buttonImg.style.backgroundImage = ico;
  const buttonContent = document.createElement("span");
  buttonContent.className = "button-content";
  buttonContent.textContent = content;

  button.append(buttonImg);
  button.append(buttonContent);

  buttonWrapper.append(button);
  return buttonWrapper;
}

export default button;
