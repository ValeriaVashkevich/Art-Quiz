import logo from "../components/logo";
import questionType from "../components/questionType";
import button from "../components/button";

function mainPage() {
  const typeQuestionContainer = document.createElement("div");
  typeQuestionContainer.className = "type-question_container";

  typeQuestionContainer.append(
    questionType("url(img/artists_quiz.jpg)", "artist")
  );
  typeQuestionContainer.append(
    questionType("url(img/pictures_quiz.jpg)", "pictures")
  );

  const mainPage = document.createElement("div");
  mainPage.id = "main-page";
  mainPage.append(logo());
  mainPage.append(typeQuestionContainer);
  mainPage.append(button("url(vector/settings.png)", "settings"));
  return mainPage;
}

export default mainPage;
