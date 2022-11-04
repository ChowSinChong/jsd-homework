function logOrAlert(value){
    // alert(value);
    console.log(value);
}

/* 00_primitive_data_types */
function AgeCalc(){
    let currentYear = new Date().getFullYear();
    let birthYear = prompt("Birth Year:");
    if(birthYear > currentYear){
        logOrAlert("You have not born yet.");
        return;
    }
    let age = currentYear - birthYear;
    logOrAlert(`They are either ${age} or ${age-1}`);
}

function LifeTimeCalc(){
    let age = parseInt(prompt("Your age:"));
    let maxAge = parseInt(prompt("Your max age:"));
    if(age > maxAge){
        logOrAlert("Age cannot greater than max age.");
        return;
    }
    let numOfDays = (maxAge - age) * 365;
    logOrAlert(`You will need ${numOfDays} to last you until the ripe old age of ${maxAge}`);
}

function Geometrizer(){
    let r = parseFloat(prompt("Enter radius of the circle:"));
    logOrAlert(`The circumference is ${2 * r * Math.PI} \nThe area is ${Math.PI*(r**2)}`);
}

function TemperatureConverter(){
    let temp = parseFloat(prompt("Enter temperature: "));
    let cf = prompt("Celsius or Fahrenheit? (C/F)");
    if(cf.toUpperCase() == "C")
        logOrAlert(`${temp}°C is ${(temp * 9/5) + 32}°F`);
    else
        logOrAlert(`${temp}°F is ${(temp - 32) * 5/9}°C.`);
}

/* 01_conditionals */

function WorldTranslator(){
    let lang = prompt("English/French/Malay? (En/Fr/My)");
    switch(lang.toUpperCase()){
        case "EN":
            logOrAlert("Hello World");
            break;
        case "FR":
            logOrAlert("Bonjour le monde");
            break;
        case "MY":
            logOrAlert("Hai dunia");
            break;
        default:
            logOrAlert("Invalid Language");
    }
}

function GradeAssigner(s){
    // if(!s)
    //     s = parseFloat(prompt("Your score:"));

    if(s >= 80)
        logOrAlert(`You got 'A'`);
    else if(s >= 70)
        logOrAlert(`You got 'B'`);
    else if(s >= 50)
        logOrAlert(`You got 'C'`);
    else if(s >= 40)
        logOrAlert(`You got 'D'`);
    else if(s >= 20)
        logOrAlert(`You got 'E'`);
    else
        logOrAlert(`You 'F'ailed`);
}

function AirCon(){
    const hotTemp = 38;
    let temp = parseFloat(prompt("Temperature:"));
    let functional = (prompt("A/C Function? (T/F)")).toUpperCase() == "T" ? true: false;
    if(functional && temp >= hotTemp){
        logOrAlert(`Turn on the A/C Please`);
        return;
    }
    if(!functional){
        if(temp >= hotTemp)
            logOrAlert(`Fix the A/C now! It's hot!`);
        else
            logOrAlert(`Fix the A/C whenever you have the chance... It's cool...`);
    }
}

function VoteGovernment(){
    let age = prompt("Your age:")
    if(age >= 35)
        logOrAlert(`You can vote AND hold any place in government!`);
    else if(age >= 25)
        logOrAlert(`You can vote AND run for the Senate!`);
    else if(age >= 18)
        logOrAlert(`You can vote!`);
    else
        logOrAlert(`You can't vote yet`);
}

function Golf(par, score){
    // if(!par)
    //     par = 18; //not sure
    // if(!score)
    //     score = prompt("Score:");

    if(score == 1)
        logOrAlert(`Hole in one`);
    else if(score <= par -2)
        logOrAlert(`Eagle`);
    else if(score == (par-1))
        logOrAlert(`Birdie`);
    else if(score == par)
        logOrAlert(`Par`);
    else if(score == (par+1))
        logOrAlert(`Bogey`);
    else if(score ==(par+2))
        logOrAlert(`Double Bogey`);
    else if(score >= (par+3))
        logOrAlert(`Not sure`);
    else 
        logOrAlert("Invalid input");
}

//Refer link below
//https://stackoverflow.com/questions/17572873/how-can-i-check-if-a-string-is-all-uppercase-in-javascript
String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};

function SergeSays(){
    let input = prompt("Enter message:");
    if(input.endsWith('?'))
        logOrAlert(`Sure.`);
    else if(input.isUpperCase())
        logOrAlert(`Woah, chill out!`)
    else if(!input)
        logOrAlert(`Fine. Be that way!`)
    else
        logOrAlert(`Whatever.`)
}

//using library from https://github.com/plurals/pluralize
import Pluralize from 'pluralize';

function Pluralizer(noun,num){
    // let noun = prompt("Enter noun:")
    // let num = parseInt(prompt("Enter number:"));

    return Pluralize(noun,num);
}

//https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
function Rest(){

}

/* 02_loops */
function EvenOdd(){
    for(i = 0; i<=20;i++)
        i%2==0? logOrAlert(`${i} is even.`) : logOrAlert(`${i} is odd.`);
}

function MultipleTable(){
    for(i=1; i<=12;i++)
        for(j=1;j<=12;j++)
            logOrAlert(`${j} * ${i} = ${j*i}`);
}

function GradeAssignerLoop(){
    for(i=60;i<=100;i++)
        GradeAssigner(i);
}

function GolfLoop(){
    for(i=1;i<=8;i++)
        Golf(5,i);
}

function BottlesBeer(){
    let count = 100;
    while(count >= 0){
        btl = Pluralizer("bottle",count);
        logOrAlert(`${count == 0? "No more" : count} ${btl} of beer on the wall, ${count} ${btl} of beer.\nTake one down and pass it around, ${count-- == 0? "no more" : count} ${btl} of beer on the wall.`);
    }
}