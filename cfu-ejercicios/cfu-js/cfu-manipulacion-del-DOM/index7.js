
let shopLi = document.querySelector(".shopping-list")
let listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.textContent);
    });
});

// Bonus

listItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.remove()
    });
});

