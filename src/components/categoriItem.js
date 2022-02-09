function renderCategoriItem(number, title) {
  const categoriItem = document.createElement("div");
  categoriItem.className = "categori-item";
  categoriItem.textContent = number;
  categoriItem.append(title);
  return categoriItem;
}

export default renderCategoriItem;
