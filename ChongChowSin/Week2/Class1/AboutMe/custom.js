document.body.style.fontFamily = "Arial, sans-serif"

const spans = document.querySelectorAll("span")
spans[0].innerText = "Chong"
spans[1].innerText = "My Favorites"
spans[2].innerText = "Selangor"

const listItems = document.querySelectorAll("li")
listItems.forEach(e => {e.className = "list-item"})

const img = document.createElement("img")
img.src = "https://picsum.photos/120/120"

document.body.insertBefore(img, document.querySelector("ul"))