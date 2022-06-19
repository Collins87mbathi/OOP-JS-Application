class Book {
    constructor(title,author,isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
}


class UI {

    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='' class='delete'>X</a></td>        
        `
        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);

    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
      }

      deleteBook (target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
 
      }
    

}

//Events listening
document.getElementById('book-form').addEventListener('submit', (e)=>{
   //Get form Value
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const isbn = document.getElementById('isbn').value;

//initiate book 
const book = new Book(title,author,isbn);

const ui = new UI();

if(title === ''|| author === ''|| isbn === '') {


    ui.showAlert('please fill in all fields','error');
} else {

    ui.addBookToList(book);


    //show success
    ui.showAlert('Book Added', 'success');

    //clear Fields

    ui.clearFields();
}


    e.preventDefault();
})

//event listening for delete 

document.getElementById('book-list').addEventListener('click', (e)=>{
  const ui = new UI();

  ui.deleteBook(e.target);

  ui.showAlert('Book Removed', 'success');

e.preventDefault();
})