// sum function - calculates sum
// Call it when the user clicks the button in the form
const sum = (num1, num2) => {
    num1 = +num1;
    num2 = +num2;
    let sumindex =  +(num1+num2);
    return `answer is ${sumindex}\n `
} 

const getZodiacAnimal = (age) => {
    let animal = "";

    switch (age % 12) {
        case 0:
          animal = "Monkey";
          return `Your Zodiac Animal is ${animal}\n `
          break;
        case 1:
          animal = "Rooster";
          return `Your Zodiac Animal is ${animal}\n `
          break;
        case 2:
          animal = "Dog";
          return `Your Zodiac Animal is ${animal}\n `
          break;
        case 3:
          animal = "Pig";
          return `Your Zodiac Animal is ${animal}\n `
          break;
        case 4:
            animal = "Rat";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 5:
            animal = "Ox";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 6:
            animal = "Tiger";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 7:
            animal = "Rabbit";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 8:
            animal = "Dragon";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 9:
            animal = "Snake";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 10:
            animal = "Horse";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        case 11:
            animal = "Goat";
            return `Your Zodiac Animal is ${animal}\n `
            break;
        default:
            animal = "Unknown";
            return `Your Zodiac Animal is ${animal}\n `
    }
}
//ysh


//DOM



const calculator = document.querySelector("#calculator");

console.log(calculator)
const animal = document.querySelector("#animal");

const form = document.querySelector(".form");
console.log(form)
const formAnimal = document.querySelector(".formAnimal");

const messageDiv = document.querySelector("#message");
console.log(messageDiv.children);

const messageAnimalDiv = document.querySelector("#messageAnimal");
console.log(messageAnimalDiv.children);

const album = document.querySelector("#album")
console.log(album)

const gallery = document.querySelector(".gallery")
console.log(gallery)
//ysh
const startBtn = document.querySelector("#startBtn")

const startmenu = document.querySelector(".startmenu")
console.log(startmenu)

//ysh
// const web = document.querySelector("#web")
// const internet = document.querySelector(".internet")
// console.log(internet)

const close = document.querySelectorAll(".close")
console.log(close)

const closeSum = close[0];
console.log(closeSum)

const closeAlbum = close[1];
// const closeWeb = close[2];
const closeAnimal = close[2];

//Making top secret folder button display/close sum calculator and x close it

calculator.addEventListener("click", () => {

    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    form.classList.toggle("form--clicked")
    console.log(form)
})

closeSum.addEventListener("click", () => {

    form.classList.remove("form--clicked")
    console.log(gallery)
})

// Making album folder button open and close gallery and X close gallery

album.addEventListener("click", () => {

    gallery.classList.toggle("gallery--clicked")
    console.log(gallery)
})

closeAlbum.addEventListener("click", () => {

    gallery.classList.remove("gallery--clicked")
    console.log(gallery)
})
//ysh startmenu
startBtn.addEventListener("click", () => {

    startmenu.classList.toggle("startmenu--clicked")
    console.log(startmenu)
})

//ysh
// web.addEventListener("click", () => {

//     internet.classList.toggle("internet--clicked")
//     console.log(internet)
// })

// closeWeb.addEventListener("click", () => {

//     internet.classList.remove("internet--clicked")
//     console.log(internet)
// })
animal.addEventListener("click", () => {

    if (messageAnimalDiv.children.length > 0) {
        messageAnimalDiv.removeChild(document.querySelector("#msgAnimal"));
    }

    formAnimal.classList.toggle("formAnimal--clicked")
    console.log(formAnimal)
})

closeAnimal.addEventListener("click", () => {

    formAnimal.classList.remove("formAnimal--clicked")
    
})
//ysh


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
    const num1 = formData.get("num1");
    // num1 = parseInt(num1);  //ysh ask ahn
    const num2 = formData.get("num2");
    // num2 = parseInt(num2); //ysh ask ahn
    
    
    let messageStr = sum(num1, num2);

    
    // const bmiCalc = bmi(weight, height);

    // bmiCalc();

    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    // create a p tag to add to the page
    const newPara = document.createElement("p");
    newPara.id = "msg";

    // create a text node from messageSTr for the p tag
    const text = document.createTextNode(messageStr);

    // tell the text to go inside my paragraph
    newPara.appendChild(text);

    // tell teh p tag where to go on the page
    messageDiv.appendChild(newPara);

    // clear the from
    // form.reset();

})

formAnimal.addEventListener("submit", (event) => {
    event.preventDefault();

    const formDataAnimal = new FormData(formAnimal);
    console.log(formDataAnimal);
    const age = formDataAnimal.get("age");
    // num1 = parseInt(num1);  //ysh ask ahn
        
    let messageAnimalStr = getZodiacAnimal(age);

    if (messageAnimalDiv.children.length > 0) {
        messageAnimalDiv.removeChild(document.querySelector("#msgAnimal"));
    }

    // create a p tag to add to the page
    const newParaAnimal = document.createElement("p");
    newParaAnimal.id = "msgAnimal";

    // create a text node from messageSTr for the p tag
    const textAnimal = document.createTextNode(messageAnimalStr);

    // tell the text to go inside my paragraph
    newParaAnimal.appendChild(textAnimal);

    // tell teh p tag where to go on the page
    messageAnimalDiv.appendChild(newParaAnimal);

    // clear the from
    // form.reset();

})



function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);

  console.log(timeElement.textContent, "timeElement.textContent");


    



