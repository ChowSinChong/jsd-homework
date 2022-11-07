// let rainbowColors = [];
// rainbowColors.push("orange");
// rainbowColors.unshift("red");
// rainbowColors.push("yellow");
// rainbowColors.push("green","blue","indigo","violet");
// console.log(rainbowColors);
// console.log(`Length: ${rainbowColors.length}`);
// console.log(`Second Item: ${rainbowColors[1]}`);
// console.log(`Last Item: ${rainbowColors[rainbowColors.length -1]}`);
// console.log(`Blue index: ${rainbowColors.indexOf("blue")}`);

// //Bonus
// let twoColors = rainbowColors.slice(1,3);
// console.log(twoColors);

// const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

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

// // The Reading List
// class book {
//     constructor(title, author, isRead){
//         this.title = title,
//         this.author = author,
//         this.isRead = isRead
//     }
// }

// let books = [
//     new book("Swann's Way","Marcel Proust",false),
//     new book("The Guermantes Way","Marcel Proust",true),
//     new book("A Life on Our Planet","David Attenborough",false), 
//     new book("Sapiens","Yuval Noah Harari",true) 
// ]

// books.forEach(book => { 
//     if(book.isRead)
//         console.log(`You have already read "${book.title}", by ${book.author}.`)
//     else
//         console.log(`You still need to read "${book.title}", by ${book.author}.`)
// })

// // The Recipe Card
// let recipe = {
//     title: "Ginger, Apple and Banana Smoothie",
//     numberOfServes: 2,
//     ingredients: [
//         "- 500ml Milk",
//         "- 2/3 cups of vanilla protein powder",
//         "- 2 tbs rolled oats",
//         "- Pinch of cinnamon",
//         "- 2 cups of baby spinach leaves",
//         "- 2 frozen bananas",
//         "- 2 roughly chopped apples",
//         "- 1/2 avocado",
//         "- 2 tsp fresh ginger",
//         "- 6 ice cubes"
//     ]
// }


// console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)
// // console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.forEach(e => {e += `- ${e}`})}`)

// //The Movie Database
// class movie{
//     constructor(title,duration,director,stars){
//         this.title = title,
//         this.duration = duration,
//         this.director = director,
//         this.stars = stars
//     }
// }

// let m = new movie("The Life Aquatic",118,"Wes Anderson",["Bill Murray", "Cate Blanchett", "Anjelica Huston", "Jeff Goldblum", "Willem Dafoe"])
// console.log(`'${m.title}' lasts for ${m.duration} minutes, and was directed by ${m.director}. Stars: ${m.stars.join(",")}.`);

//Working With Users
class User {
    constructor(email,password,isAdmin){
        this.email = email,
        this.password = password,
        this.isAdmin = isAdmin
    }
}

const users = [
    new User("groucho@ga.co","chicken",true),
    new User("harpo@ga.co","elephant",false),
    new User("gummo@ga.co","pinkFairyArmadillo", true),
    new User("zeppo@ga.co","dumboOctopus",false)
]

function findUser(email, pwd){
    return users.findIndex(user => user.email == email && user.password == pwd);
}

function login(email, pwd){
    let index = findUser(email,pwd);
    if(index > -1)
        console.log(`You are logged in as ${email}`);
    else
        console.log(`Sorry, something went wrong.`);
}

function createAccount(email, pwd, isAdmin){
    if(!email || !pwd || !isAdmin){
        console.log(`Sorry, something went wrong`);
        return;
    }
    users.push(new User(email,pwd,isAdmin));
}

function deleteAccount(email, pwd){
    let index = findUser(email,pwd);
    if(index < -1){
        console.log(`${email} not exist`);
        return;
    }
    users.splice(index,1);
}

function updateAccount(email,oldpwd, newprop){
    let index = findUser(email,oldpwd);
    for(let prop in newprop)
        users[index][prop] = newprop[prop];
}

function search(prop,value){
    let index = users.findIndex(user => user[prop] == value);
    console.log(users[index]);
}

//Transit Application
/* 
- Provide station name; begin, end
- concat arrays into 1 array */

// const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
const stations = [["Museum", "St. James", "Circular Quay"],
        ["Circular Quay", "Wynyard", "Townhall", "Central"],
        ["Central", "Redfern", "Macdonaldtown", "Newtown"]];

function findStationIndex(stationsArr,value){
    let index = stationsArr.findIndex(x => x == value)
    if(index == -1)
        alert(`Station not found`)
    return index    
}

function travelFrom(start,end){
    //https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o#:~:text=3%20ways%20to%20remove%20duplicates%20in%20an%20Array,Using%20the%20includes%20%28%29%20and%20forEach%20%28%29%20methods   
    let sLine = [...new Set(stations.join().split(','))];
    
    let a = findStationIndex(sLine, start);
    let b = findStationIndex(sLine, end);

    let num = b-a;
    let numSign = Math.sign(num);
    let stops = numSign === -1? sLine.slice(b,a+1).reverse() : sLine.slice(a,b+1);
    //To make it positive
    numStop = num * numSign;
    console.log(`To go from '${start}' to '${end}' - you'll need to go through ${numStop} stops`)
    console.log(stops.join(' - '));
}

/* Week2 (Week1-class2) */
const x = (str) => {
    console.log(`${str}!`)
}

function multiply(x,y){
    console.log(`${x*y}`)
}


// const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
// const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// const pizzas = [...featured, 'veg pizza', ...specialty];

// console.log(pizzas);


var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 }; // = obj1
console.log(clonedObj)

var mergedObj = { ...obj1, ...obj2 }; // merged & add new keys
console.log(mergedObj)

let blog = [
    { title: "Blog Heading One", content: "Lorem ipsum", author: "Tilak" },
    { title: "Blog Heading Two", content: "Lorem ipsum", author: "Shafiq" },
    { title: "Blog Heading Three", content: "Lorem ipsum", author: "Nurain" },
    { title: "Blog Heading Four", content: "Lorem ipsum", author: "Veemelia" },
  ];

blog.forEach(e => {console.log(`Tile: ${e.title}, Content: ${e.content}, Written By: ${e.author}`)})
