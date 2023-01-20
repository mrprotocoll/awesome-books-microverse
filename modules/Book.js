export default class Book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) ?? [];
  }

  static toUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  add(title, author) {
    (this.books).push({
      id: (new Date()).getTime(),
      title: Book.toUpper(title),
      author: Book.toUpper(author),
    });
    this.save();
  }

  getBooks() {
    return this.books;
  }

  setBooks(books) {
    this.books = books;
  }

  remove(id) {
    this.setBooks(this.books.filter((book) => book.id !== Number(id)));
    this.save();
  }

  save() {
    return localStorage.setItem('books', JSON.stringify(this.books));
  }
}