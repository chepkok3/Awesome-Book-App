import Books from './modules/bookstore.js';
import displayTime from './modules/dateTime.js';

const booksContainer = document.querySelector('.books-container');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const listBooks = document.querySelector('.list-books');
const addNewBook = document.querySelector('.add-new-book');
const contactInfo = document.querySelector('.contact-info');

const listBookLinks = document.querySelectorAll('.list-book');
const newBookLink = document.querySelector('.new-book');
const contactLink = document.querySelector('.contact');

const bookList = new Books();

const addBook = document.querySelector('.add-btn');
addBook.addEventListener('click', (e) => {
  if (newTitle.value === '' || newAuthor.value === '') {
    e.preventDefault();
  } else {
    bookList.add();
  }
});

window.addEventListener('load', () => {
  bookList.retrieve();
  bookList.createBookList();
  displayTime();
});

booksContainer.addEventListener('click', (e) => {
  bookList.remove(e.target);
});

listBookLinks.forEach((listBookLink) => {
  listBookLink.addEventListener('click', () => {
    listBooks.classList.remove('hidden');
    addNewBook.classList.add('hidden');
    contactInfo.classList.add('hidden');
  });
});

newBookLink.addEventListener('click', () => {
  addNewBook.classList.remove('hidden');
  listBooks.classList.add('hidden');
  contactInfo.classList.add('hidden');
});

contactLink.addEventListener('click', () => {
  contactInfo.classList.remove('hidden');
  addNewBook.classList.add('hidden');
  listBooks.classList.add('hidden');
});
