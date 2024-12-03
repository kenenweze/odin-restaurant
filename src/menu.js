

export default function loadMenu(){
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");
    
    const heading = document.createElement("h1");
    const headingNode = document.createTextNode("Fine Dining");
    heading.appendChild(headingNode);

    const subHeading = document.createElement("h2");
    const subHeadingNode = document.createTextNode("Menu");
    subHeading.appendChild(subHeadingNode);
    
    const list = document.createElement("ul");
    
    const listItem1 = document.createElement("li");
    const listItem1Node = document.createTextNode("Abacha");
    listItem1.appendChild(listItem1Node);

    const listItem2 = document.createElement("li");
    const listItem2Node = document.createTextNode("Jollof Rice");
    listItem2.appendChild(listItem2Node);

    const listItem3 = document.createElement("li");
    const listItem3Node = document.createTextNode("Isi Ewu");
    listItem3.appendChild(listItem3Node);

    const listItem4 = document.createElement("li");
    const listItem4Node = document.createTextNode("Fufu & Egusi");
    listItem4.appendChild(listItem4Node);

    const listItem5 = document.createElement("li");
    const listItem5Node = document.createTextNode("Nkwobi");
    listItem5.appendChild(listItem5Node);

    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    list.appendChild(listItem4);
    list.appendChild(listItem5);
    
    container.appendChild(heading);
    container.appendChild(subHeading);
    container.appendChild(list);
    content.appendChild(container);
    
    return content;
    }