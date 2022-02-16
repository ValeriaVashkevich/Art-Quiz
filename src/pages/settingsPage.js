import logo from "../components/logo";
import pagesTitle from "../components/pagesTitle";
import settingsType from "../components/settingsType";
import button from "../components/button";

function addVolumeFunktsional() {
  const volumeBar = document.createElement("div");
  volumeBar.classList = "volume-bar";

  const volumeIco = document.createElement("div");
  volumeIco.className = "volume-ico";
  volumeIco.style.backgroundImage = "url(vector/volume_off.svg)";

  const volumeRange = document.createElement("input");
  volumeRange.className = "volume-range";
  volumeRange.type = "range";
  volumeRange.value = "35";

  volumeBar.append(volumeIco);
  volumeBar.append(volumeRange);

  return volumeBar;
}

function addTimerFunktsional() {
  const timerBar = document.createElement("div");
  timerBar.classList = "timer-bar";

  const timerCheckbox = document.createElement("input");
  timerCheckbox.className = "timer-checkbox";
  timerCheckbox.type = "checkbox";
  timerCheckbox.checked = "true";
  timerCheckbox.style.backgroundImage = "url(vector/timer_check.svg)";

  const timerSubtitle = document.createElement("span");
  timerSubtitle.className = "timer-subtitle";
  timerSubtitle.textContent = "on/off";

  timerBar.append(timerCheckbox);
  timerBar.append(timerSubtitle);

  return timerBar;
}

function settingsPage() {
  const settingsPage = document.createElement("div");
  settingsPage.id = "settings-page";

  const title = pagesTitle("settings");

  const settingsContainer = document.createElement("div");
  settingsContainer.className = "settings-container";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  settingsContainer.append(
    settingsType("url(img/volume_on.svg)", addVolumeFunktsional(), "volume")
  );
  settingsContainer.append(
    settingsType(
      "url(img/timer_picture.svg)",
      addTimerFunktsional(),
      "time game"
    )
  );

  buttonContainer.append(button(null, "save"));
  buttonContainer.append(button(null, "default"));

  settingsPage.append(logo());
  settingsPage.append(title);
  settingsPage.append(settingsContainer);
  settingsPage.append(buttonContainer);

  return settingsPage;
}

export default settingsPage;
