const hamburger = document.querySelector(".hamburger");
const statusBar = document.querySelector(".statusbar");
const sideBar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const sideBarList = document.querySelectorAll(".side-bar-list");


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



const fish = sideBarList.forEach(list =>
    list.addEventListener("click", () => {
        sideBar.classList.remove("active");
        hamburger.classList.remove("active");
        statusBar.classList.remove("active");


    }))

    console.log(fish);

