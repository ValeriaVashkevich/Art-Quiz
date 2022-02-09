import logo from "./components/logo";

function renderMainPage() {
  const mainPage = document.createElement("div");
  mainPage.id = "main-page";
  mainPage.append(logo());
  return mainPage;
}

export default renderMainPage;
