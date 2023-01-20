import Contents from './modules/Content.js';
import UI from './modules/UI.js';
import { DateTime } from './modules/Luxon.js';

window.addEventListener('load', () => {
  const dom = new UI();

  // set date
  setInterval(() => {
    document.querySelector('.date').textContent = DateTime.now().toFormat('MMMM dd yyyy, tt');
  }, 1000);

  // load books
  dom.loadBooks();

  // control list navigations
  document.querySelector('#nav-lists').addEventListener('click', () => {
    dom.loadBooks();
  });

  // control add new navigation
  document.querySelector('#nav-add').addEventListener('click', () => {
    UI.loadContent(Contents.addBook).then(() => {
      document.getElementById('book-form').addEventListener('submit', (e) => {
        e.preventDefault();
        dom.addNewBook();
      });
    });
  });

  // control contact navigation
  document.querySelector('#nav-contact').addEventListener('click', () => {
    UI.loadContent(Contents.contact);
  });
});