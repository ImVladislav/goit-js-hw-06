const navList = document.querySelector('categories');
const allNavList = document.querySelectorAll(`.item`);
const numCatigories = allNavList.length;

const message = `Number of categories: ${numCatigories}`;
console.log(message)

calcCategoty(allNavList);

function calcCategoty() {
    allNavList.forEach(el => {
        const categoryName = el.firstElementChild.textContent;
        const numElements = el.lastElementChild.childElementCount
    console.log(`Category: ${categoryName} Elements: ${numElements}`);
 });
}

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5