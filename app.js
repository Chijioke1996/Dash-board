const hamburger = document.querySelector(".hamburger");
const statusBar = document.querySelector(".statusbar");
const sideBar = document.querySelector(".side-bar");
const sideBarList = document.querySelectorAll(".side-bar-list");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    statusBar.classList.toggle("active");
    sideBar.classList.toggle("active");

})

sideBarList.forEach(list =>
    list.addEventListener("click", () => {
        sideBar.classList.remove("active");
        hamburger.classList.remove("active");
        statusBar.classList.remove("active");



    }))

    if (sideBarList = false) {

        function close () {
            sideBar.classList.remove("active");
            hamburger.classList.remove("active");
            statusBar.classList.remove("active");  
        }
           
        
    }