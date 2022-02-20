function categoriItem(number, title, image) {
  const categoriItem = document.createElement("div");
  categoriItem.className = "categori-item";

  const categoriNumber = document.createElement("div");
  categoriNumber.className = "categori-number";
  categoriNumber.textContent = number;

  const categoriTitle = document.createElement("div");
  categoriTitle.className = "categori-title";
  categoriTitle.textContent = title;

  const categoriImage = document.createElement("div");
  categoriImage.className = "categori-image";
  categoriImage.style.backgroundImage = image;

  categoriItem.append(categoriNumber);
  categoriItem.append(categoriTitle);
  categoriItem.append(categoriImage);

  return categoriItem;
}

export default categoriItem;
