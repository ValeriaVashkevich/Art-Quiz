function settingsType(image, settingBar, type) {
  const settingCard = document.createElement("div");
  settingCard.className = "setting-card";

  const imgSetting = document.createElement("div");
  imgSetting.className = "img-setting";
  imgSetting.style.backgroundImage = image;

  const funktsionalContainer = document.createElement("div");

  const typeSetting = document.createElement("h2");
  typeSetting.className = "type-setting";
  typeSetting.textContent = type;

  funktsionalContainer.append(settingBar);

  settingCard.append(imgSetting);
  settingCard.append(funktsionalContainer);
  settingCard.append(typeSetting);

  return settingCard;
}

export default settingsType;
