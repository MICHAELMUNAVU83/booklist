const add = document.getElementById('add');
const awesomeBooks = [];
add.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  const book = {
    Title: title.value,
    Author: author.value,
  };

  awesomeBooks.push(book);

  localStorage.setItem('books', JSON.stringify(awesomeBooks));

  if (title === '' || author === '') {
    alert('tcuvybu');
  } else {
    const list = document.getElementById('book-list');

    const newDiv = document.createElement('div');

    newDiv.innerHTML += `
      <p>${book.Title}</p>
      <p>${book.Author}</p>
      <button class="delete">Delete</button>

      
      `;

    list.appendChild(newDiv);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});