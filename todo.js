/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line linebreak-style
let BookList = {};
const DisplayBooks = document.querySelector('.collection');
const NewTitle = document.querySelector('#title');
const NewAuthor = document.querySelector('#author');
const SaveBooks = localStorage.getItem('BookList');
const AddBook = document.querySelector('#btn');
const ErrorChecker = document.querySelector('.checker');
let StoreBooks = [];
// clears all fields after data is saved
const ClearFields = () => {
  NewTitle.value = '';
  NewAuthor.value = '';
};
// checker to see if form contains data and not empty
const Validate = () => {
  if (NewTitle.value !== '' && NewAuthor.value !== '') {
    ErrorChecker.textContent = '';
    return true;
  }
};

// displays data from the localstorage if data exist
const DisplayAllBooks = () => {
  DisplayBooks.innerHTML = '';
  const HoldBooks = JSON.parse(localStorage.getItem('BookList'));
  if (HoldBooks != null) {
    StoreBooks = HoldBooks;
    HoldBooks.forEach((Books, index) => {
      DisplayBooks.innerHTML += `
       <div class="BookList">
       <h1 class="titles">${Books.Title}</h1>
       <h2 class="authors">${Books.Author}</h2>  
       <button class="remove" id="${index}" onclick="RemoveBooks(event)">Remove</button>
       </div>`;
    });
  }
};
// check and display data before  page refreshes
const DecideOnDisplay = () => {
  if (DisplayBooks.innerHTML === '') {
    const HoldBooks = JSON.parse(localStorage.getItem('BookList'));
    StoreBooks = HoldBooks;
    HoldBooks.forEach((Books, index) => {
      DisplayBooks.innerHTML += `
    <div class="BookList">
    <h1 class="titles">${Books.Title}</h1>
    <h2 class="authors">${Books.Author}</h2>  
    <button class="remove" id="${index}" onclick="RemoveBooks(event)">Remove</button>
    <hr class="rule"> 
    </div>`;
    });
  } else {
    DisplayAllBooks();
  }
};
// save data to localstorage
const SaveAllBooks = () => {
  AddBook.addEventListener('click', () => {
    if (SaveBooks != null) {
      [];
    }
    if (Validate()) {
      BookList = {
        Title: NewTitle.value,
        Author: NewAuthor.value,
      };
      StoreBooks.push(BookList);
      localStorage.setItem('BookList', JSON.stringify(StoreBooks));
      DecideOnDisplay();
      ClearFields();
    } else {
      ErrorChecker.textContent = 'Please Provide valid data before adding books';
      ErrorChecker.style.color = 'red';
    }
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
  DecideOnDisplay();
};
SaveAllBooks();

window.addEventListener('onload', DecideOnDisplay());
