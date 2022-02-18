import mainPage from "./pages/mainPage";
import settingsPage from "./pages/settingsPage";
import "./styles/style.css";

document.body.style.backgroundImage = "url(img/background.jpg)";

const root = document.getElementById("root");
root.className = "root";

function clearRoot() {
  root.innerHTML = null;
}

function renderSettingsPage() {
  clearRoot();
  root.append(settingsPage(renderMainPage));
}

function renderMainPage() {
  clearRoot();
  root.append(mainPage(renderSettingsPage));
}

root.append(mainPage(renderSettingsPage));
