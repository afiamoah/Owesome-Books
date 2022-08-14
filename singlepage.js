/* eslint-disable linebreak-style */
/* eslint-disable no-sequences */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line linebreak-style
const DisplayBooks = document.querySelector('.List-Items');
const AddBooks = document.querySelector('.add-books');
const Contact = document.querySelector('.Contact');
const List = document.querySelector('#List');
const Add = document.querySelector('#Add');
const Link = document.querySelector('#Link');

List.addEventListener('click', () => {
    DisplayBooks.classList.toggle('active');
    List.style.color = 'rgb(255, 0, 0)';
    Link.style.color = 'black';
    Add.style.color = 'black';
    Contact.classList.remove('active');
    AddBooks.classList.remove('active');
    DisplayBooks.style.display = 'block';
});

Add.addEventListener('click', () => {
    AddBooks.classList.toggle('active');
    Add.style.color = 'rgb(255, 0, 0)';
    Link.style.color = 'black';
    List.style.color = 'black';
    Contact.classList.remove('active');
    DisplayBooks.classList.remove('active');
    DisplayBooks.style.display = 'none';
});

Link.addEventListener('click', () => {
    Contact.classList.toggle('active');
    Link.style.color = 'rgb(255, 0, 0)';
    Add.style.color = 'black';
    List.style.color = 'black';
    AddBooks.classList.remove('active');
    DisplayBooks.classList.remove('active');
    DisplayBooks.style.display = 'none';
});