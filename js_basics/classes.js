class Vegetable{
    constructor(name){
        this.name = name;
    }
}

const veg = new Vegetable("asdasd");

console.log(veg.name);


class Book{
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(writer){
        this._author = writer;
    }
}


const Thermostat = makeClass();
const book = new Book();
const book2 = new Book("asd");

book2.writer = "renamed";

console.log(book2.writer);