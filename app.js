const hamburger = document.querySelector(".hamburger");
const statusBar = document.querySelector(".status-bar");
const sideBar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const sideBarList = document.querySelectorAll(".side-bar-list");
const section = document.querySelector(".section");


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

section.addEventListener("click", () => {
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

section.addEventListener("click", () => {
    dropDown.classList.remove("active")
    


})

// TABLE SOURCE CODE FOR RECENT ACTIVITIES
async function tableDataUpdate (url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    // const data = await response.json();
    const {headers, rows} = await response.json();
    // console.log({headers, rows});

    //TO CLEAR THE TABLE ON REFRESH
    tableHead.innerHTML = "<tr><tr>"
    tableBody.innerHTML = " "

    // POPULATING TABLE-HEADING WITH DATA FRON LOCAL JSON FILE
    for (const headerText of headers) {
        const headerHtmlElement = document.createElement("th")
        headerHtmlElement.textContent = headerText
        tableHead.querySelector("tr").appendChild(headerHtmlElement)

        // console.log(headerText);
        // console.log(headerHtmlElement);
        
        
        
    }

    for (const row of rows) {
       const rowHtmlElement = document.createElement("tr")

       for (const cellText of row) {
        const cellElement = document.createElement("td")
        cellElement.textContent = cellText
        rowHtmlElement.appendChild(cellElement)
         
       }

       tableBody.appendChild(rowHtmlElement)
    }




}

tableDataUpdate("./data.json", document.querySelector(".table"))

// LOADIND PAGE

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  











