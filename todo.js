/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line linebreak-style
let BookList = {};
const DisplayBooks = document.querySelector('.collection');
const NewTitle = document.querySelector('#title');
const NewAuthor = document.querySelector('#author');
const SaveBooks = localStorage.getItem('BookList');
const AddBook = document.querySelector('#btn');
let StoreBooks = [];
const ClearFields = () => {
  NewTitle.value = '';
  NewAuthor.value = '';
};
const DisplayAllBooks = () => {
  ClearFields();
  DisplayBooks.innerHTML = '';
  if (SaveBooks == null) {
    [];
  } else {
    StoreBooks = JSON.parse(localStorage.getItem('BookList'));
    StoreBooks.forEach((Books, index) => {
      DisplayBooks.innerHTML += `
        <div class="BookList">
        <h1 class="titles">${Books.Title}</h1>
        <h2 class="authors">${Books.Author}</h2>  
        <button class="remove" id="${index}" onclick="RemoveBooks(event)">Remove</button>
        <hr class="rule"> 
        </div>`;
    });
  }
};

const SaveAllBooks = () => {
  AddBook.addEventListener('click', () => {
    BookList = {
      Title: NewTitle.value,
      Author: NewAuthor.value,
    };
    StoreBooks.push(BookList);
    localStorage.setItem('BookList', JSON.stringify(StoreBooks));
    DisplayAllBooks();
    ClearFields();
  });
};

// eslint-disable-next-line no-unused-vars
const RemoveBooks = (event) => {
  const Findid = event.target.id;
  const DeleteBook = StoreBooks.filter((Book, index) => {
    if (index != Findid) {
      return Book;
    }
  });
  localStorage.setItem('BookList', JSON.stringify(DeleteBook));
  DisplayAllBooks();
};

DisplayAllBooks();
SaveAllBooks();
