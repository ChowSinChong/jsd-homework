// var x = 5;
// console.log(x);

// let y = 10;
// console.log(y);

// console.log(z);
// var z = 2;
// console.log(z);

// console.log(b);
// b = 4

// console.log(a);
// let a = 3;
// console.log(a);


// if(true){
//     var a = 10;
//     let b = 100;
//     const c = 1000;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);


// var x = 10;
// var x = 12;

// console.log(x);

// function OnClick(){
//     var question = document.getElementById("questions").value;
//     getQuestionAnswer(question);
// }

// function getQuestionAnswer(question){
//     var input = document.getElementById("questions").value;
//     switch (question){
//         case 1:
//             question1();
//     }
// }

// function question1(){}

// sleepfor(5000);
// sleepfor(10000);

// function sleepfor(x){
//     console.log("Start sleep for :" + x);
//     setTimeout(() => {
//         console.log("Finish sleep for :" + x);        
//     }, x);
// }


function question1(x){
    // let x = "4";
    console.log(typeof(x) + ":" + x);
    x = parseInt(x);
    console.log(typeof(x) + ":" + x);
}

function question2(x){
    // let x = 15;
    console.log(typeof(x) + ":" + x);
    x = x.toString();
    console.log(typeof(x) + ":" + x);
}

function question3(x){
    // let x = "hello";
    console.log(typeof(x) + ":" + x);
    x = x.toUpperCase();
    console.log(typeof(x) + ":" + x);
}

function question4(x){
    console.log(typeof(x) + ":" + x);
    x = x.split('')[1]
    console.log(typeof(x) + ":" + x);
}

function question5(x,y){
    console.log("Input 1:" + x);
    console.log("Input 2:" + y);
    x = x.concat(y);
    console.log("Result :" + x);
}

function question6(x,y){
    console.log("Input 1:" + x);
    console.log("Input 2:" + y);
    x = Math.pow(x,y);
    console.log("Result :" + x);
}

function question7(x){
    console.log("Input :" + x);
    x = Math.sqrt(x);
    console.log("Result :" + x);
}


function greaterThan(x,y){
    if(x === y)
    console.log(`numOne ${x} is equal to numTwo ${y}`)
    else if(x > y)
console.log(`numOne ${x} is bigger than numTwo ${y}`)
else
console.log(`numOne ${x} is smaller than numTwo ${y}`)
}

function checkAge(){
    let name = prompt("Please enter your name");
    let age = prompt("Please enter your age");
    let driveAge = 16;
    if(age < driveAge){
        console.log(`Sorry, you (${name}) still have ${driveAge - age} years before you can drive`);
        return;
    }
    console.log("Drive into the sunset!");
}


function example1(){
    let x = prompt("Registered? (Y/N)");
    if(x.toUpperCase() == 'Y'){
        console.log("Registered")
        return;
    }
    console.log("Not register");
}

for(x=0;x<=10;x++) console.log(x)
for(x=4;x>=-16;x--) console.log(x)
for(x=8;x<=41;x+=4) console.log(x)

for(x=0;x<=100;x++){
    if(x%3 == 0 && x%5 == 0)
        console.log(`${x}: Fizzbuzz`)
    else if(x%3 == 0)
        console.log(`${x}: Fizz`)
    else if(x%5 == 0)
        console.log(`${x}: buzz`)
} 