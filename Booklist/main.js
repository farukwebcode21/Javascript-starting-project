const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const button = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');


button.addEventListener('click', function(e){
    e.preventDefault();
    if (title.value == '' && author.value =='' && year.value =='') {
        alert('Please input your informatin.')
    }else{
        const newRow = document.createElement('tr');
        // Creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // Creating new author
        const  newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // Creating new Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // Display in Ui
        bookList.appendChild(newRow);
        console.log(bookList);
    }
})