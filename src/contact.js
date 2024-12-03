

export default function loadContact(){
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");
    
    const heading = document.createElement("h1");
    const headingNode = document.createTextNode("Fine Dining");
    heading.appendChild(headingNode);

    const subHeading = document.createElement("h2");
    const subHeadingNode = document.createTextNode("Contact Us");
    subHeading.appendChild(subHeadingNode);
    
    const address = document.createElement("p");
    const addressNode = document.createTextNode("Address: No. 10 Cuisine Crescent, Chow Town");
    address.appendChild(addressNode);

    const telephone = document.createElement("p");
    const telephoneNode = document.createTextNode("Phone No: +234 801 xxxx 321");
    telephone.appendChild(telephoneNode);

    const email = document.createElement("p");
    const emailNode = document.createTextNode("Email: finedining@foodie.com");
    email.appendChild(emailNode);
    
    container.appendChild(heading);
    container.appendChild(subHeading);
    container.appendChild(address);
    container.appendChild(telephone);
    container.appendChild(email);
    content.appendChild(container);
    
    return content;
    }