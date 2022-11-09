const books = [
    {
        title: "Gödel, Escher, Bach",
        author: "Douglas Hofstadter",
        alreadyRead: false,
        cover: "https://picsum.photos/40/40"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        alreadyRead: true,
        cover: "https://picsum.photos/40/40"
    },
    {
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        alreadyRead: true,
        cover: "https://picsum.photos/40/40"
    },
    {
        title: "A Life on our Planet",
        author: "David Attenborough",
        alreadyRead: true,
        cover: "https://picsum.photos/40/40"
    },
    {
        title: "Cosmos",
        author: "Carl Sagan",
        alreadyRead: false,
        cover: "https://picsum.photos/40/40"
    }
];

function findUlTag(){
    let ul = document.querySelector("ul")
    if(ul)
        return ul
        
    ul = document.createElement("ul")
    document.body.appendChild(ul)
    return ul
}

function AddBook(book){
    let ul = findUlTag()
    const tag = document.createElement("li")
    tag.innerText = `Book Title: ${book.title}, Author: ${book.author}`
    tag.className = book.alreadyRead ? "isRead" : ""
    const img = document.createElement("img")
    img.src = book.cover
    tag.appendChild(img)
    ul.appendChild(tag)
}

books.forEach(b => {
    AddBook(b)
})