import mainPage from "./mainPage";
import "./styles/style.css";

const root = document.getElementById("root");
root.className = "root";
document.body.style.backgroundImage = "url(img/background.jpg)";
root.append(mainPage());
