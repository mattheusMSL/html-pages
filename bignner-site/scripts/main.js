// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

// function showMessage(text){
//     text = alert("Hello world!");
//     return text;
// }

// showMessage();


/* changing user */ 

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name!");
    // if(!myName){
    //     setUserName();
    // }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Greeting from Mozilla dear ${myName}!`;
}
  
if(!localStorage.getItem("name")){
    setUserName();


    }else if(localStorage.getItem("name") == "null" || localStorage.getItem("name") == " "  ){
      myHeading.textContent = 'Please write a name! try it by using the "change user" below!';
    
  }else{
      const storedName = localStorage.getItem("name");
      myHeading.textContent = `Greeting from Mozilla dear ${storedName}`;
  
  }
  
  myButton.onclick = () => {
      setUserName();
  }

/* changing the image by using the arrow function and using onclick function*/ 

const myImage = document.querySelector('img');

function changeImage(){
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src","images/tomorrowland.png");
        myImage.style.height = '256px';
        myImage.style.width = "256px";
    }else{
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

myImage.onclick = () => {
changeImage(); 
}



