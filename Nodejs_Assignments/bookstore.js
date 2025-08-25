//Simple Bookstore API (MongoDB+ Node.js)

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((er) => console.error(er));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)

async function run() {
    //create book
    const newBook = new Book({ title: "Book1", author: "Author 1", price: 400 })
    await newBook.save()
    console.log("Book inserted successfully: ", newBook)

    //get all books
    const books = await Book.find();
    console.log('Books List: ', books)

    //get book by title
    const book = await Book.findOne({ title: 'Book1' })
    if (!book) {
        return console.error("No book found with the title.")
    }
    console.log('Book by title: ', book)

    //update
    const updatedBook = await Book.findOneAndUpdate(
        { title: 'Book1' }, { title: "Node.js Book" }, { new: true }
    );
    if (!updatedBook) {
        console.error("Book not found with the provided title");
    } else {
        console.log("Updated Book:", updatedBook);
    }
}

run();