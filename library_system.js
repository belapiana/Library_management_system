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

const livro = new Book ('Hello', 'Me', 543763)
console.log(livro)
livro.changeAvailability = true
console.log(livro)