// when the button is clicked, log "The button was clicked"
function onClick(event){
    console.log(`${event} had clicked`)
}

const btn = document.querySelector("button")
// btn.addEventListener("click", () => onClick("Button"))

// create a button to toggle themes
// if its light it must dark
// if its dark it must light
function toggleTheme(){
    const body = document.querySelector("body")
    if(body.className == "dark")
        body.className = "light"
    else 
        body.className = "dark"
}

btn.addEventListener("click",toggleTheme)

// Start with a clickCount of 0
// Anytime the button is clicked with the class of click-count is clicked
// To do:
//  Increment clickCount by 1
//  Change the HTML of a p tag to be "Number of clicks: N"
let count = 0
const pText = "Number of clicks:"
const p = document.querySelector("p")
p.innerText = `${pText} 0`
function onIncrement(){
    count++
    p.innerText = `${pText} ${count}`
}

const btnCount = document.querySelector(".click-count")
btnCount.addEventListener("click",onIncrement)

// make the decrement button work! when it is clicked, subtract 1 from
// clickCount and update the paragraph tag
// cannot below than 0
function onDecrement(){
    if(count > 0)count--
    p.innerText = `${pText} ${count}`
}
const btnDecrement = document.querySelector(".click-count-d")
btnDecrement.addEventListener("click",onDecrement)

