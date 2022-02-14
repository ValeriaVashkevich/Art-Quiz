function questionType(image, title) {
  const questionCard = document.createElement("div");
  questionCard.className = "question-card";

  const imgQuestion = document.createElement("div");
  imgQuestion.className = "img-question";
  imgQuestion.style.backgroundImage = image;

  const titleQuestion = document.createElement("div");
  titleQuestion.className = "title-question";

  const typeQuestion = document.createElement("span");
  typeQuestion.className = "type-question";
  typeQuestion.textContent = title;

  const quizQuestion = document.createElement("span");
  quizQuestion.className = "quiz-question";
  quizQuestion.textContent = "quiz";

  const space = document.createElement("span");
  space.innerHTML = "&ensp;";

  titleQuestion.append(typeQuestion);
  titleQuestion.append(space);
  titleQuestion.append(quizQuestion);

  questionCard.append(imgQuestion);
  questionCard.append(titleQuestion);

  return questionCard;
}

export default questionType;
