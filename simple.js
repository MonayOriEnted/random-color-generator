//linking html elements to js variables

const newbtn = document.querySelector(".newbtn"); 
const color = document.querySelector(".color");
const main = document.querySelector(".main");
const title = document.querySelector(".title");

//functions to set a random number for each color in rbg

function random1 (min = 1, max = 255 /*255 is max for a color num*/){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random2 (min = 1, max = 255){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random3 (min = 1, max = 255){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//func to change text color depending on the random num generated from before
function textColor(){
    const num1 = random1() //makes new variable to specifically get the num from the func
    const num2 = random2()
    const num3 = random3()
    if (num1 < 150 && num2 < 150 && num3 < 150 /*changes at 150 so you can see in darker backgrounds*/){
        title.style.color = 'rgba(255, 255, 255, 1)'/*changes title to white*/;
        color.style.color = 'rgba(255, 255, 255, 1)'/*changes color to white*/;
    } else {
        title.style.color = 'rgba(0, 0, 0, 1)'/*changes title to black*/;
        color.style.color = 'rgba(0, 0, 0, 1)'/*changes color to black*/;
    }
}

newbtn.addEventListener('click', function(event){ //makes changes when button is clicked
    main.style.backgroundColor = `rgba(${random1()}, ${random2()}, ${random3()}, 1)`;//changes background color

    color.textContent = `rgba(${random1()}, ${random2()}, ${random3()}, 1)`;//changes text into what the color shown is

    textColor()
});
