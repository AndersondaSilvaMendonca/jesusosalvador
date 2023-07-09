const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "imagens/foto_anderson.jpg"){
        myImage.setAttribute("src", "imagens/foto_anderson.jpg");
    } else{
        myImage.setAttribute("src", "imagens/foto_anderson.jpg");
    }

};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storeName}`;
}
myButton.onclick = () => {
    setUserName();
};

