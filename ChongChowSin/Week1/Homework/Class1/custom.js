function AgeCalc(){
    let currentYear = new Date().getFullYear();
    let birthYear = prompt("Birth Year:");
    if(birthYear > currentYear){
        alert("You have not born yet.");
        return;
    }
    let age = currentYear - birthYear;
    alert(`They are either ${age} or ${age-1}`);
}

function LifeTimeCalc(){
    let age = parseInt(prompt("Your age:"));
    let maxAge = parseInt(prompt("Your max age:"));
    if(age > maxAge){
        alert("Age cannot greater than max age.");
        return;
    }
    let numOfDays = (maxAge - age) * 365;
    alert(`You will need ${numOfDays} to last you until the ripe old age of ${maxAge}`);
}

function Geometrizer(){
    let r = parseFloat(prompt("Enter radius of the circle:"));
    alert(`The circumference is ${2 * r * Math.PI} \nThe area is ${Math.PI*(r**2)}`);
}

function TemperatureConverter(){
    let temp = parseFloat(prompt("Enter temperature: "));
    let cf = prompt("Celsius or Fahrenheit? (C/F)");
    if(cf.toUpperCase() == "C")
        alert(`${temp}°C is ${(temp * 9/5) + 32}°F`);
    else
        alert(`${temp}°F is ${(temp - 32) * 5/9}°C.`);
}

function WorldTranslator(){
    let lang = prompt("English/French/Malay? (En/Fr/My)");
    switch(lang.toUpperCase()){
        case "EN":
            alert("Hello World");
            break;
        case "FR":
            alert("Bonjour le monde");
            break;
        case "MY":
            alert("Hai dunia");
            break;
        default:
            alert("Invalid Language");
    }
}

function GradeAssigner(){
    let s = parseFloat(prompt("Your score:"));
    if(s >= 80)
        alert(`You got 'A'`);
    else if(s >= 70)
        alert(`You got 'B'`);
    else if(s >= 50)
        alert(`You got 'C'`);
    else if(s >= 40)
        alert(`You got 'D'`);
    else if(s >= 20)
        alert(`You got 'E'`);
    else
        alert(`You 'F'ailed`);
}

function AirCon(){
    
}