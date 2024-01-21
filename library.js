const { title } = require("process");

console.log('hi')


// Define the library array to store books.
// Each book should be an object with the following properties:
//   title: string
//   author: string
//   rating: number
//   read: boolean

const library = [];


// Function to add a new book to the library.
// function addBook(title, author, rating, read) {
// 	// TODO(1) - Implement adding a book to the library.
//     library.push(const bk = {title, author, rating, read});
// }

function addBook(title, author, rating, read){
    const book = {title, author, rating, read}
    library.push(book)

}

// addBook("The Hobbit", "J.R.R. Tolkien", 5, true)
// addBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 4, true)
// addBook("The Catcher in the Rye", "J.D. Salinger", 3, false);
// addBook("To Kill a Mockingbird", "Harper Lee", 4, true);
// addBook("The Great Gatsby", "F. Scott Fitzgerald", 5, false);
// addBook("The Hunger Games", "Suzanne Collins", 4, true);


// console.log(library[2])

// Function to print a book to console.
function printBook(book) {
	// TODO(2) - Print a book to console in the format:
	// "The Hobbit by J.R.R. Tolkien | Rating: 5 | Read: ✅"
	// "The Hobbit by J.R.R. Tolkien | Rating: 5 | Read: ❌"
	// Use a ternary operator and string interpolation to create the above string.
    let readStatus = book.read === true ? "✅" : "❌";
    console.log(`"${book.title} by ${book.author} | Rating: ${book.rating} | Read: ${readStatus}"`);
}

// printBook(library[2])


// Function to mark a book as read.
function markAsRead(title) {
	// TODO(3) - Implement marking a book as read.
	const book = library.find((book) => book.title== title);
	stat = book.read;
	const readStat = stat === false ? book.read = true : {};
	
}

// markAsRead('The Catcher in the Rye');


// Function to delete a book from the library.
function deleteBook(title) {
	// TODO(4) - Implement deleting a book.
	let bookD = library.findIndex((bookD) => bookD.title== title);
	delete library[bookD]
}

// deleteBook('The Hobbit')    *	UNCOMMENT THIS TO ACTUALLY DELETE A BOOK*
// console.log(library)

// Function to list all books in the library.
function listBooks() {
	// TODO(5) - Implement listing all books in the library.
	console.log(library)
}

// listBooks()

// Function to list all books that have been read.
function listReadBooks() {
	// TODO(6) - Implement listing all books that have been read.
	// Use the filter() method to create a new array of read books.
	readB = library.filter(book => book.read == true)
	console.log(readB)

}

// listReadBooks()

// Function to list all books that have not been read.
function listUnreadBooks() {
	// TODO(7) - Implement listing all books that have not been read.
	// Use the filter() method to create a new array of unread books.
	unreadB = library.filter(book => book.read == false)
	console.log(unreadB)
}

// listUnreadBooks()

// Function to list all books above a specified rating.
function listBooksAboveRating(rating) {
	// TODO(8) - Implement listing all books above a specified rating.
	// Use the filter() method to create a new array of books above a specified rating.
	filt = library.filter(book => book.rating > rating)
	// filt.forEach(book => console.log(book.title))  *JUST THE TITLES*
	console.log(filt)
}

// listBooksAboveRating(4)

function getRatings() {
	// TODO(9) - use .map() to return an array containing just the ratings
	const jrates = library.map(books => books.rating)
	return jrates
}

// getRatings()

function getAverageRatings() {
	// TODO(10) - call getRatings() and use it's output to calculate the average rating
	let ttl = getRatings().reduce((total, current) => total + current, 0);
	let avg = ttl / library.length
	return avg
}

// getAverageRatings()

// test code
// uncomment the lines below to test your code

addBook("The Hobbit", "J.R.R. Tolkien", 5, true);
addBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 4, true);
addBook("The Catcher in the Rye", "J.D. Salinger", 3, false);
addBook("To Kill a Mockingbird", "Harper Lee", 4, true);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 5, false);
addBook("The Hunger Games", "Suzanne Collins", 4, true);

// console.log("All books:");
// listBooks();

// console.log("All books above rating 4:");
// listBooksAboveRating(4);

// console.log("All books that have been read:");
// listReadBooks();

// console.log("All books that have not been read:");
// listUnreadBooks();

// console.log("Average rating:");
// console.log(getAverageRatings());

// console.log("Marking The Catcher in the Rye as read...");
// markAsRead("The Catcher in the Rye");

// console.log("All books:");
// listBooks();

// console.log("Deleting The Great Gatsby...");
// deleteBook("The Great Gatsby");

// console.log("All books:");
// listBooks();

// console.log("Average rating:");
// console.log(getAverageRatings());
