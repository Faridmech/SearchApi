const allTabsBody = document.querySelectorAll(".tab-body-single");
const allTabsHead = document.querySelectorAll(".tab-head-single");
const searchForum = document.querySelector(".app-header-search")
let searchList = document.querySelector(".search-list")

let activeTab = 1;
const init = ()=>{
    showActiveTabsBody();
    showActiveTabsHead();
}

const showActiveTabsHead = () => allTabsHead[activeTab - 1].classList.add("active-tab");

const showActiveTabsBody = () =>{
    hideAllTabBody();
    allTabsBody[activeTab -1].classList.add("show-tab")
}

const hideAllTabBody = () =>{
    allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove("show-tab"))
}
const hideAllTabHead = () =>{
    allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove("active-tab"))
}


window.addEventListener("DOMContentLoaded", ()=> init());

allTabsHead.forEach(singleTabHead => 
    singleTabHead.addEventListener("click" , () =>{
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        showActiveTabsHead();
        showActiveTabsBody();
    }))