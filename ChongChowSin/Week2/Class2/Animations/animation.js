// reduce the opacity of an image 0.005
// function should be executed after 3 seconds
let opacity = 1
const img = document.querySelector("img")
img.style.opacity = opacity
function decreaseOpacity(){
    console.log("Decrease opacity was called")
    img.style.opacity = opacity -= 0.005
}

setTimeout(decreaseOpacity, 3000);

// Set up a variable called width and set it to 300
// Select the img the DOM node and change its width style to be 300px using the variable above
// Create a function that increases that width by 5 at a time
//   Update the img's width based on variable "width"
//      Note: You will need to add px at the end (use concatenation or interpolation)
//     Stop calling the function when the width is 600
// Call the function once every 100ms
let width = 300
img.style.width = `${width}px`

function widthIncreament(){
    img.style.width = `${width += 5}px`
    if(width < 600)
        setTimeout(widthIncreament,100)
}

widthIncreament()

