import logo from "../components/logo";
import questionType from "../components/questionType";
import button from "../components/button";

function mainPage(rerender) {
  const mainPage = document.createElement("div");
  mainPage.id = "main-page";

  const typeQuestionContainer = document.createElement("div");
  typeQuestionContainer.className = "type-question_container";

  typeQuestionContainer.append(
    questionType("url(img/artists_quiz.jpg)", "artist")
  );
  typeQuestionContainer.append(
    questionType("url(img/pictures_quiz.jpg)", "pictures")
  );

  const settingsButton = button("url(vector/settings.png)", "settings");
  settingsButton.classList.add("settings-button");

  settingsButton.onclick = () => {
    rerender();
  };

  mainPage.append(logo());
  mainPage.append(typeQuestionContainer);
  mainPage.append(settingsButton);
  return mainPage;
}

export default mainPage;
