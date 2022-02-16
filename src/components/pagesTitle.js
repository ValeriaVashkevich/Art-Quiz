function pagesTitle(name) {
  const pagesTitle = document.createElement("h1");
  pagesTitle.className = "pages-title";
  pagesTitle.textContent = name;

  return pagesTitle;
}

export default pagesTitle;
