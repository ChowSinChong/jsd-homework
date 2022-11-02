// // let rainbowColors = [];
// // rainbowColors.push("orange");
// // rainbowColors.unshift("red");
// // rainbowColors.push("yellow");
// // rainbowColors.push("green","blue","indigo","violet");
// // console.log(rainbowColors);
// // console.log(`Length: ${rainbowColors.length}`);
// // console.log(`Second Item: ${rainbowColors[1]}`);
// // console.log(`Last Item: ${rainbowColors[rainbowColors.length -1]}`);
// // console.log(`Blue index: ${rainbowColors.indexOf("blue")}`);

// // //Bonus
// // let twoColors = rainbowColors.slice(1,3);
// // console.log(twoColors);

// // const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
// ];

// marxFamily.forEach(e => {console.log(e.name)})


// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
// };

// The Reading List
class book {
    constructor(title, author, isRead){
        this.title = title,
        this.author = author,
        this.isRead = isRead
    }
}

let books = [
    new book("Swann's Way","Marcel Proust",false),
    new book("The Guermantes Way","Marcel Proust",true),
    new book("A Life on Our Planet","David Attenborough",false), 
    new book("Sapiens","Yuval Noah Harari",true) 
]

books.forEach(book => { 
    if(book.isRead)
        console.log(`You have already read "${book.title}", by ${book.author}.`)
    else
        console.log(`You still need to read "${book.title}", by ${book.author}.`)
})

// The Recipe Card
let recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    numberOfServes: 2,
    ingredients: [
        "- 500ml Milk",
        "- 2/3 cups of vanilla protein powder",
        "- 2 tbs rolled oats",
        "- Pinch of cinnamon",
        "- 2 cups of baby spinach leaves",
        "- 2 frozen bananas",
        "- 2 roughly chopped apples",
        "- 1/2 avocado",
        "- 2 tsp fresh ginger",
        "- 6 ice cubes"
    ]
}


console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)
// console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.forEach(e => {e += `- ${e}`})}`)

//The Movie Database
class movie{
    constructor(title,duration,director,stars){
        this.title = title,
        this.duration = duration,
        this.director = director,
        this.stars = stars
    }
}

let m = new movie("The Life Aquatic",118,"Wes Anderson",["Bill Murray", "Cate Blanchett", "Anjelica Huston", "Jeff Goldblum", "Willem Dafoe"])
console.log(`'${m.title}' lasts for ${m.duration} minutes, and was directed by ${m.director}. Stars: ${m.stars.join(",")}.`);