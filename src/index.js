import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

loadHome();
loadMenu();
loadContact();

const buttons = document.querySelectorAll(".tabs");
const tabContent = document.querySelectorAll(".container");

buttons.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabContent.forEach(contents => {
            contents.classList.remove("active");
        });
        tabContent[index].classList.add("active");
    });
});