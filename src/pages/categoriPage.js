import logo from "../components/logo";
import pagesTitle from "../components/pagesTitle";
import button from "../components/button";
import categoriItem from "../components/categoriItem";

const categoriItemArray = [
  {
    number: "1",
    title: "portrait",
    image: "url(../img/category_image/category-01-color.jpg)",
  },
  {
    number: "2",
    title: "landscape",
    image: "url(../img/category_image/category-02-color.jpg)",
  },
  {
    number: "3",
    title: "still life",
    image: "url(../img/category_image/category-03-color.jpg)",
  },
  {
    number: "4",
    title: "impressionism",
    image: "url(../img/category_image/category-04-color.jpg)",
  },
  {
    number: "5",
    title: "expressionism",
    image: "url(../img/category_image/category-05-color.jpg)",
  },
  {
    number: "6",
    title: "avant-garde",
    image: "url(../img/category_image/category-06-color.jpg)",
  },
  {
    number: "7",
    title: "renaissance",
    image: "url(../img/category_image/category-07-color.jpg)",
  },
  {
    number: "8",
    title: "surrealism",
    image: "url(../img/category_image/category-08-color.jpg)",
  },
  {
    number: "9",
    title: "kitsch",
    image: "url(../img/category_image/category-09-color.jpg)",
  },
  {
    number: "10",
    title: "minimalism",
    image: "url(../img/category_image/category-10-color.jpg)",
  },
];

function categoriPage(rerenderMainPage) {
  const categoriPage = document.createElement("div");
  categoriPage.id = "categori-page";

  const headerBar = document.createElement("div");
  headerBar.className = "header-bar";

  const title = pagesTitle("categori");
  const homeButton = button("url(vector/home.svg)", "home");
  homeButton.classList.add("home-button");

  homeButton.onclick = () => {
    rerenderMainPage();
  };

  const scoreButton = button("url(vector/score.svg)", "score");
  scoreButton.classList.add("score-button");

  headerBar.append(homeButton);
  headerBar.append(title);
  headerBar.append(scoreButton);

  const categoriItemContainer = document.createElement("div");
  categoriItemContainer.className = "categori-item_container";

  for (let i = 0; i < categoriItemArray.length; i++) {
    let item = categoriItem(
      categoriItemArray[i].number,
      categoriItemArray[i].title,
      categoriItemArray[i].image
    );
    categoriItemContainer.append(item);
  }

  categoriPage.append(logo());
  categoriPage.append(headerBar);
  categoriPage.append(categoriItemContainer);

  return categoriPage;
}

export default categoriPage;
