import restaurantImg from "./images/restaurant-image.jpg";

export default function loadHome(){
const content = document.getElementById("content");

const container = document.createElement("div");
container.classList.add("container");
container.classList.add("active");

const heading = document.createElement("h1");
const headingNode = document.createTextNode("Fine Dining");
heading.appendChild(headingNode);

const paragraph = document.createElement("p");
const paragraphNode = document.createTextNode("At fine dining, we serve you the freshest meals prepared with organically grown ingredients and cooked by the world's best chefs.");
paragraph.appendChild(paragraphNode);

const homeImage = document.createElement("img");
homeImage.src = restaurantImg;

container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(homeImage);
content.appendChild(container);

return content;
}