import mainPage from "./pages/mainPage";
import settingsPage from "./pages/settingsPage";
import "./styles/style.css";

document.body.style.backgroundImage = "url(img/background.jpg)";

const root = document.getElementById("root");
root.className = "root";

function renderSettingsPage() {
  root.innerHTML = null;
  root.append(settingsPage());
}

root.append(mainPage(renderSettingsPage));
