const categories = document.querySelectorAll("#categories .item");

function calcCategories(elements) {
  console.log(`Number of categories: ${elements.length}`);

  elements.forEach((el) => {
    const title = el.querySelector("h2").textContent;
    const items = el.querySelectorAll("li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);
  });
}

calcCategories(categories);