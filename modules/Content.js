// list
const bookList = (data) => `<li class="book">
    <p>"${data.title}" by ${data.author}</p>
    <button data-id="${data.id}" class="btn remove-book">Remove</button>
    </li>`

//book
const books = (data) => {
    let allBooks = ""
    data.forEach(element => {
        allBooks += bookList(element)
    });

    return `<h1>All Awesome Books</h1>
    <div class="">
        <ul class="book-lists border">
            ${allBooks}
        </ul>
    </div>`
}

// add new
const addBook = `<h1>Add New Books</h1>
    <div class="inner-content">
        <form id="book-form" class="book-form">
            <input type="text" id="book-title" placeholder="Title">
            <input type="text" id="book-author" placeholder="Author">
            <button class="btn add-book">Add</button>
            <div class="clear"></div>
        </form>
    </div>`

// contact
const contact = `<h1>Contact Information</h1>
<div class="inner-content">
    <div class="add-new">
        <p>Do you have any questions or you just want to say "Hello"? You can reach out to us! </p>

        <ul>
            <li>Our e-mail : contact@tactes.com</li>
            <li>Our phone number: 0098373635353</li>
            <li>Our address: Streetname 22, 76655 city, Nigeria</li>
        </ul>
    </div>
</div>`

export default {
    books,addBook,contact
}