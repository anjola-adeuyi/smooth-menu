const lineContainer = document.querySelector(".line-container");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu-item");

lineContainer.addEventListener("click", () => {
  lineContainer.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItem.forEach( (menuItemList) => {
    menuItemList.addEventListener("click", () => {
        lineContainer.classList.remove("active");
        menu.classList.remove("active")
    })
})


