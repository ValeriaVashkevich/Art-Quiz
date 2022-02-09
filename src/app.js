import renderMainPage from "./mainPage";
import "./styles/style.css";

const root = document.getElementById("root");
root.className = "root";
root.append(renderMainPage());
