import logo from "../components/logo";
import questionType from "../components/questionType";
import button from "../components/button";

function mainPage(rerenderCategori, rerenderSettings) {
  const mainPage = document.createElement("div");
  mainPage.id = "main-page";

  const typeQuestionContainer = document.createElement("div");
  typeQuestionContainer.className = "type-question_container";

  const artist = questionType("url(img/artists_quiz.jpg)", "artist");
  const pictures = questionType("url(img/pictures_quiz.jpg)", "pictures");

  typeQuestionContainer.append(artist);
  typeQuestionContainer.append(pictures);

  typeQuestionContainer.onclick = () => {
    rerenderCategori();
  };

  const settingsButton = button("url(vector/settings.png)", "settings");
  settingsButton.classList.add("settings-button");

  settingsButton.onclick = () => {
    rerenderSettings();
  };

  mainPage.append(logo());
  mainPage.append(typeQuestionContainer);
  mainPage.append(settingsButton);
  return mainPage;
}

export default mainPage;
