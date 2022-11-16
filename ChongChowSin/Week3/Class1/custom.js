// Method
const person = {
    firstName: "Jacques",
    lastName: "Cousteau",
    sayHi: function() {
        console.log("Hi, I am Jacques");
    }
};

person.sayHi()

// CallBack
function receiveCallBack(callback){
    callback()
}

function myFirstCallBack(){
    console.log('function as argument')
}

receiveCallBack(myFirstCallBack)

// CallBack - Example 2
// Delay
function delay(cb, time){
    let timeInMs = 1000 * time
    setTimeout(cb, timeInMs)
}

function animate(){
    console.log(`Animate was called`)
}

delay(animate, 1)

// CallBack - Example 3
// ForEach
function forEach(letters, cb){
    for (index in letters)
        cb(letters[index])
}

function processLetter(letter){
    console.log(letter)
}

const letters = ['a','b','c','d']
forEach(letters, processLetter)

forEach(letters, function(l){
    console.log(`custom function: ${l}`)
})

// Variable declaration within scope
let global = 'Global'

function createNewScope(){
    let local = 'local'
    if(true){
        let localIf = 'if local'    // try change 'let' to 'var'
        console.log(global, local, localIf)
    }
    // console.log(global, local, localIf) // if localIf is declare as 'var', can access from here
    global = 'Changed'
}

createNewScope()
console.log(global)

// Hoisting
hoistingEx()
// hoistingEx2() //Error
// hoistingEx3() //Error

function hoistingEx(){
    console.log(`This is weird`)
}


const hoistingEx2 = function(){
    console.log(`This is not weird`)
}

const hoistingEx3 = () => {
    console.log(`Another method to declare function`)
}

hoistingEx()
hoistingEx2() //Working
hoistingEx3() //Working

// Closure
function scoreGame(){
    let score = 0
    return function(){
        score += 1
        console.log(score)
    }
}

let scoreLatest = scoreGame()

// Closure - Example 2
function createBank(){
    let balance = 100

    function deposit(myr){
        balance += myr
        // console.log(balance)
    }

    function withdraw(myr){
        balance -= myr
        // console.log(balance)
    }

    function showBalance(){
        return balance
    }

    function logoutAccount(){
        return `User account logged out`
    }
    
    // deposit(20)
    // withdraw(30)
    return {
        deposit: deposit,       // either declare like this
        withdraw: withdraw,
        showBalance,            // or like this, if the key & value same name
        logoutAccount
    }
}

let bank = createBank()

function createUser(){
    return {
        logout: () => {
            return `User account logged out`
        }
    }
}

let user = createUser()
console.log(user.logout())

// IIFE
// Must put ; for previous line
;(function(){
    console.log('This run')
})();

// Rest parameter
function add(...nums){
    console.log(nums)
    sum = 0
    nums.forEach((num) => {sum += num})
    return sum
}

console.log(add(1,2,3,4,5,6,7))
console.log(add(...[2,3,4,5,6,7,8]))

// Copying an array/object
let nums = ["One", "Two", "Three"];
let myNums = nums; // Points to the same place in memory as `nums`
myNums[0] = "Satu";
console.log(nums, myNums); // What do you think will be printed?
let alphabet = ["A", "B", "C"];
let myAlphabet = [...alphabet]; // Copied!
myAlphabet[0] = "Did this work?";
console.log(alphabet, myAlphabet); // Yes! It worked

function createGreeting(prefix){
    return (name) =>{
        console.log(`${prefix} ${name}`)
    }
}

let hi = createGreeting('Hi')
hi('bye bye')

// forEach
let arr = 'abcdefg'.split('')
arr.forEach((x, index)=>{
    console.log(`${index}. ${x}`)
})
// or
const strArr = (x, index)=>{
    console.log(`${index}. ${x}`)
}

arr.forEach(strArr)

// filter
// forEach method with return value
// similar as linq .where
let arr2 = 'aBcDeFg'.split('')

let filteredCapitralLetter = arr2.filter((element) => {
    return element === element.toUpperCase()
})

console.log(filteredCapitralLetter)

// map
// transform and same length with the array
let arr3 = 'abcdefg'.split('')

let mapArr = arr3.map((x)=> { return x.toUpperCase()})

console.log(mapArr)

// reduce
// perform calculation and return value
let numbers = [1,2,3,4,5,6]

let total = numbers.reduce((preNum, currNum) => {
    console.log(`In loop value: ${preNum}`)
    return (preNum += currNum)
},0)

console.log(total)