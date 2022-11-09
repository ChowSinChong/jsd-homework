let heading = document.querySelector("h1")
let subheading = document.querySelector("h2")
let paragraphs = document.querySelectorAll("p")

let listItems = document.querySelectorAll("ul li")
let img = document.querySelector("img")

// Creating own HTML via JS
let myParagraph = document.createElement("p")
myParagraph.innerText = "Created with JS"

// Append to the end of the body
document.body.appendChild(myParagraph)

// Insert before some tag
document.body.insertBefore(myParagraph, heading)

// Create h3
// Set the text to be "Also created by JS"
// Set the following styles:
//  font-size to be "30px"
//  color to be "green"
// Add it before the h2 on the page
let newH3 = document.createElement("h3")
newH3.innerText= "Also created by JS"
newH3.style.fontSize=30
newH3.style.color="green"
document.body.insertBefore(newH3,subheading)

//Event handle
function onClick(){ 
    console.log(`was clicked`)
}
heading.addEventListener("click", onClick)
subheading.addEventListener("click", onClick)

// select the input DOM node using the query selector
// create a function that logs "The user typed something"
// when the "keypress" event takes place on the input of DOM node, run the function
function onKeyPress(value){
    console.log(`KeyPress: ${value}`)
}

let input = document.querySelector("input")
input.addEventListener("keypress", (event) => (onKeyPress(event.key)))

// Mousemove event

// function onMouseMove(x,y){
//     console.log(`The mouse is moving, x: ${x}, y: ${y}`)
// }

// img.addEventListener('mousemove',(event) => onMouseMove(event.movementX, event.movementY))

// when the first item in List is clicked
// call a function that logs out "The First Item was clicked"
function onFirstItemClicked(){
    console.log(`The First Item was clicked`)
}

listItems[0].addEventListener("click",onFirstItemClicked)


// //Delay function
// function delayedFunction(){
//     console.log("Delay")
// }

// setTimeout(delayedFunction, 2000);

// //Interval function
// function regularlyCalledFunction(){
//     console.log("This called every 3 seconds")
// }

// setInterval(regularlyCalledFunction, 3000);x

// animations
function increaseWidth(){
    let styles = getComputedStyle(img)
    let currentWidth = parseInt(styles.width)
    img.style.width = `${currentWidth + 10}px`
}

// increaseWidth()
// setTimeout(increaseWidth, 5000);
setInterval(increaseWidth, 5000);

// // mouse movement
// // example 1
// function onMouseMove(event){
//     console.log(`The mouse is moving`)
// }

// document.body.addEventListener('mousemove',onMouseMove)

// // example 2
// function onMouseMove(event){
//     console.log(`The mouse is moving, ${event}`)
// }

// document.body.addEventListener('mousemove',onMouseMove)

//example 3
function onMouseMove(event){
    const x = event.clientX
    const y = event.clientY
    img.style.left = x + "px"
    img.style.right = y + "px"
    img.style.top = y + "px"
    img.style.bottom = x + "px"
}

document.body.addEventListener('mousemove',onMouseMove)