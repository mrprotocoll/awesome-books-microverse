import Book from './Book.js';
import Content from './Content.js';

export default class UI {
  constructor() {
    this.book = new Book();
  }

  addNewBook() {
    const title = document.querySelector('#book-title');
    const author = document.querySelector('#book-author');
    this.book.add(title.value, author.value);
    this.loadBooks();
  }

  loadBooks() {
    UI.loadContent(Content.books(this.book.getBooks())).then(() => {
      // const book = this.book;
      const removeElement = document.querySelectorAll('.remove-book');
      Array.from(removeElement).forEach((remove) => {
        remove.addEventListener('click', () => {
          this.book.remove(remove.getAttribute('data-id'));
          this.loadBooks();
        });
      });
    });
  }

  static loadContent(content) {
    const pageContent = document.querySelector('#page-content');
    pageContent.innerHTML = content;
    return Promise.resolve();
  }
}