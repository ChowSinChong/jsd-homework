let img = document.querySelector('img')

function onClick(){
    console.log(this)
}

img.addEventListener("click",onClick)

let person = {
    name: 'Groucho',
    speak: function(name){
        console.log(this, this.name , name)
    }
}

person.speak("Ean")

class MyClass {}
class Person {
    constructor() {
        console.log("A person was born!");
    }
}
class Post {
    constructor() {
        console.log("A post was written!");
    }
    edit() {}
    save() {}
}

