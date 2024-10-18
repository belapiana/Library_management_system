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
    this._isAvailable = ! this._isAvailable

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
    listAvailableBooks() {return this._books.map(book => `Title: ${book._title}, Availability: ${book.isAvailable}`)}
}
