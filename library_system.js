// Task 1:

class Book {
    constructor (title, author, isbn ){
this._title = title
this._author = author
this._isbn = isbn
this._isAvailable = true
    }

    getDetails() { return `Title: ${this._title}, Author: ${this._author}, ISBN: ${this._isbn}`}

    get isAvailable () {return this._isAvailable}

    set changeAvailability (newAvailability) {
    this._isAvailable = newAvailability

    }
}

// Task 2:
class Section {
    constructor(name){
        this._name = name
        this._books = []
    }

    addBook(newBook) {this._books.push(newBook)}
    getAvailableBooks() {return this._books.filter(book => book.isAvailable).length}
    listBooks() {return this._books.map(book => `Title: ${book._title}, Availability: ${book.isAvailable}`)}
}

// Task 3:

class Patron {
    constructor(name) {
        this._name = name
        this._borrowedBooks = []
    }
    borrowBook(title) {
        if (title.isAvailable) {
        this._borrowedBooks.push(title);
        title.changeAvailability = false }
        else {return 'This book is currently unavailable'}
    }
    returnBook(title) {
        const index = this._borrowedBooks.indexOf(title)
        this._borrowedBooks.splice(index, 1)
        title.changeAvailability = true
    }
}

// Task 4: 

// Test data

const drama = new Section ('Drama')
const romance = new Section ('Romance')

const book1 = new Book ("Cinderella", 'Charles Perrault', 53268329 )
const book2 = new Book ('Sleeping Beauty', 'Grim Brothers', 632732832)
const book3 = new Book ('Three Little Pigs', "Joseph Jacobs", 6377382)

drama.addBook(book1)
drama.addBook(book2)
romance.addBook(book3)

book1.changeAvailability = true


const patron1 = new Patron ('Isabela')
const patron2 = new Patron ('Manuela')

patron1.borrowBook(book1)
console.log(patron1._borrowedBooks)
patron1.returnBook(book1)
console.log(patron1._borrowedBooks)