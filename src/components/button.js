function button(ico, content) {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "button-wrapper";
  const button = document.createElement("button");
  button.className = "button";
  const buttonImg = document.createElement("div");
  buttonImg.className = "button-img";
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
