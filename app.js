const hamburger = document.querySelector(".hamburger");
const statusBar = document.querySelector(".statusbar");
const sideBar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const sideBarList = document.querySelectorAll(".side-bar-list");
const contentContainer = document.querySelector(".content-container");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    statusBar.classList.toggle("active");
    sideBar.classList.toggle("active");

})

logo.addEventListener("click", () => {
    sideBar.classList.remove("active");
    hamburger.classList.remove("active");
    statusBar.classList.remove("active");

})



sideBarList.forEach(list =>
    list.addEventListener("click", () => {
        sideBar.classList.remove("active");
        hamburger.classList.remove("active");
        statusBar.classList.remove("active");


    }))

contentContainer.addEventListener("click", () => {
    sideBar.classList.remove("active");
    hamburger.classList.remove("active");
    statusBar.classList.remove("active");


})

// DROP DOWN
const dropDown = document.querySelector(".drop-down");
const dropDownItems = document.querySelectorAll(".drop-down-item");
const arrow = document.querySelector(".arrow");


arrow.addEventListener("click", () => {
    dropDown.classList.toggle("active")


})

dropDownItems.forEach(dropDownItem => {
    dropDownItem.addEventListener("click", () => {
        dropDown.classList.remove("active")
    })
})

contentContainer.addEventListener("click", () => {
    dropDown.classList.remove("active")


})












