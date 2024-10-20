// Task 1: Create a Book Class

class Book {
    constructor (title, author, isbn ){
this._title = title
this._author = author
this._isbn = isbn
this._isAvailable = true //constructor
    }

    getDetails() { return `Title: ${this._title}, Author: ${this._author}, ISBN: ${this._isbn}`} // method

    get isAvailable () {return this._isAvailable} // getter

    set changeAvailability (newAvailability) { // setter
    this._isAvailable = newAvailability

    }
}

// Task 2: Create a Section Class
class Section {
    constructor(name){
        this._name = name
        this._books = [] // Empty array for books
    }

    addBook(newBook) {this._books.push(newBook)} // Pushing books to the array
    getAvailableBooks() {return this._books.filter(book => book.isAvailable).length} 
    // Task 5: Filtering available books and then calculating length of array
    listBooks() {return this._books.map(book => `Title: ${book._title}, Availability: ${book.isAvailable}`)}
    // Using .map method to go through all the books in the array
}

// Task 3:Create a Patron Class

class Patron {
    constructor(name) {
        this._name = name
        this._borrowedBooks = []
    }
    borrowBook(title) {
        if (title.isAvailable) {
        this._borrowedBooks.push(title); // pushing books to the borroedBooks array
        title.changeAvailability = false } // changing book's availability
        else {return 'This book is currently unavailable'}
        // Using if/else statement to display error message if book is unavailable
    }
    returnBook(title) {
        const index = this._borrowedBooks.indexOf(title) // Finding what is the index of a specific book in the array
        this._borrowedBooks.splice(index, 1) // Removing the book with index found
        title.changeAvailability = true // Changing book's availability
    }
}

// Task 4:  Create a VIPPatron Class that Inherits from Patron

class VipPatron extends Patron { // using extends for inheritance
    constructor (name) {
        super (name) // using super to get attribute from parent class
        this._priority = true // adding priority
    }
    borrowBook(title) { // Overriding borrow book function
        if (title.isAvailable) {
        this._borrowedBooks.push(title);
        title.changeAvailability = false }
        else {return 'This book is currently unavailable'} }
}

// Task 6: Create and Manage Sections and Patrons

const drama = new Section ('Drama')
const romance = new Section ('Romance') // creating instances of Section class

const book1 = new Book ("Cinderella", 'Charles Perrault', 53268329 )
const book2 = new Book ('Sleeping Beauty', 'Grim Brothers', 632732832)
const book3 = new Book ('Three Little Pigs', "Joseph Jacobs", 6377382) // creating instances of Book class

drama.addBook(book1)
drama.addBook(book2)
romance.addBook(book3) // pushing books to array

const patron1 = new Patron ('Isabela')
const patron2 = new Patron ('Manuela') // creating instances of Patron class

// Testing all the methods
book1.changeAvailability = true
patron1.borrowBook(book1)
console.log(patron1._borrowedBooks)
patron1.returnBook(book1)
console.log(patron1._borrowedBooks)
console.log(drama.getAvailableBooks())
console.log(romance.listBooks())
console.log(book1.getDetails())