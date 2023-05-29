const hexadecimalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]
let firstColorBox = document.getElementById("fisrt-color-bracket")
let firstHexCode = document.getElementById("fisrt-color-word")
let secondColorBox = document.getElementById("second-color-bracket")
let secondHexCode = document.getElementById("second-color-word")
let thirdColorBox = document.getElementById("third-color-bracket")
let thirdHexCode = document.getElementById("third-color-word")
let fourthColorCode = document.getElementById("fourth-color-bracket")
let fourthHexCode = document.getElementById("fourth-color-word")
let fifthColorCode = document.getElementById("fifth-color-bracket")
let fifthHexCode = document.getElementById("fifth-color-word")
let sixthColorCode = document.getElementById("sixth-color-bracket")
let sixthHexCode = document.getElementById("sixth-color-word")

let button = document.getElementById("button")


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() *16)
    return randomNumber
}

button.addEventListener("click", function(){
    let hexCodeFirstBox = "#"
    for (let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
        let randomHex = hexadecimalArray[generateRandomNumber()]
        hexCodeFirstBox += randomHex
    }

    firstColorBox.style.backgroundColor = hexCodeFirstBox
    firstHexCode.innerText = hexCodeFirstBox
    firstHexCode.style.color = hexCodeFirstBox

    let hexCodeSecondBox = "#"
    for (let mySecondLoop = 0; mySecondLoop<6; mySecondLoop++){
        let randomHex = hexadecimalArray[generateRandomNumber()]
        hexCodeSecondBox += randomHex
    }
    secondColorBox.style.backgroundColor = hexCodeSecondBox
    secondHexCode.innerText = hexCodeSecondBox
    secondHexCode.style.color = hexCodeSecondBox


    let hexCodethirdBox = "#"
    for (let myThirdLoop = 0; myThirdLoop<6; myThirdLoop++){
        let randomHex = hexadecimalArray[generateRandomNumber()]
        hexCodethirdBox += randomHex
    }
    thirdColorBox.style.backgroundColor = hexCodethirdBox
    thirdHexCode.innerText = hexCodethirdBox
    thirdHexCode.style.color = hexCodethirdBox

    let hexCodeFourthBox = "#"
    for (let myFourthLoop = 0; myFourthLoop<6; myFourthLoop++){
        let randomHex = hexadecimalArray[generateRandomNumber()]
        hexCodeFourthBox += randomHex
    }
    fourthColorCode.style.backgroundColor = hexCodeFourthBox
    fourthHexCode.innerText = hexCodeFourthBox
    fourthHexCode.style.color = hexCodeFourthBox

    let hexCodeFifthBox = "#"
    for (let myFifthLoop = 0; myFifthLoop<6; myFifthLoop++){
        let randomHex = hexadecimalArray[generateRandomNumber()]
        hexCodeFifthBox += randomHex
    }
    fifthColorCode.style.backgroundColor = hexCodeFifthBox
    fifthHexCode.innerText = hexCodeFifthBox
    fifthHexCode.style.color = hexCodeFifthBox

    let hexCodeSixthBox = "#"
    for (let mySixthLoop = 0; mySixthLoop<6; mySixthLoop++){
        let randomHex = hexadecimalArray[generateRandomNumber()]
        hexCodeSixthBox += randomHex
    }
    sixthColorCode.style.backgroundColor = hexCodeSixthBox
    sixthHexCode.innerText = hexCodeSixthBox
    sixthHexCode.style.color = hexCodeSixthBox
})