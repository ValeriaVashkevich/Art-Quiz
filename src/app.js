import mainPage from "./pages/mainPage";
import settingsPage from "./pages/settingsPage";
import categoriPage from "./pages/categoriPage";
import "./styles/style.css";

document.body.style.backgroundImage = "url(img/background.jpg)";

const root = document.getElementById("root");
root.className = "root";

function clearRoot() {
  root.innerHTML = null;
}

function renderCategoriPage() {
  clearRoot();
  root.append(categoriPage(renderMainPage));
}

function renderSettingsPage() {
  clearRoot();
  root.append(settingsPage(renderMainPage));
}

function renderMainPage() {
  clearRoot();
  root.append(mainPage(renderCategoriPage, renderSettingsPage));
}

root.append(mainPage(renderCategoriPage, renderSettingsPage));
