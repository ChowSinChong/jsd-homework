function getRandomNumber(){
    return Math.floor(Math.random() * 10)
}

function rollDice(){
    noSides = document.querySelector('input').value
    number = getRandomNumber()
    while(number > noSides || number == 0)
        number = getRandomNumber()
    console.log(number)
    outputElement = document.querySelector('span')
    outputElement.innerText = number
}