class Book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    validate(book){
        let nameStorage = localStorage.getItem('book-name');
        let authorStorage = localStorage.getItem('book-author');
        let typeStorage = localStorage.getItem('book-type');

        if(nameStorage == null){
            bookNameObj = [];
        }
        else{
            bookNameObj = JSON.parse(nameStorage);
        }
        
        if(authorStorage == null){
            bookAuthorObj = [];
        }
        else{
            bookAuthorObj = JSON.parse(authorStorage);
        }
        if(typeStorage == null){
            bookTypeObj = [];
        }
        else{
            bookTypeObj = JSON.parse(typeStorage);
        }

        let goodToGo = false;
        if (book.name.length >= 3 && book.author.length >= 3){
            goodToGo = true;
            return goodToGo;
        }
        else{
            goodToGo = false;
            return goodToGo;
        }
    }

    addToUi(book){
        let nameStorage = localStorage.getItem('book-name');
        let authorStorage = localStorage.getItem('book-author');
        let typeStorage = localStorage.getItem('book-type');

        if(nameStorage == null){
            bookNameObj = [];
        }
        else{
            bookNameObj = JSON.parse(nameStorage);
        }
        
        if(authorStorage == null){
            bookAuthorObj = [];
        }
        else{
            bookAuthorObj = JSON.parse(authorStorage);
        }
        if(typeStorage == null){
            bookTypeObj = [];
        }
        else{
            bookTypeObj = JSON.parse(typeStorage);
        }

        bookNameObj.push(book.name);
        bookAuthorObj.push(book.author);
        bookTypeObj.push(book.type);
        localStorage.setItem('book-name', JSON.stringify(bookNameObj));
        localStorage.setItem('book-author', JSON.stringify(bookAuthorObj));
        localStorage.setItem('book-type', JSON.stringify(bookTypeObj));
        this.show();
    }

    show(){
        let nameStorage = localStorage.getItem('book-name');
        let authorStorage = localStorage.getItem('book-author');
        let typeStorage = localStorage.getItem('book-type');

        if(nameStorage == null){
            bookNameObj = [];
        }
        else{
            bookNameObj = JSON.parse(nameStorage);
        }
        
        if(authorStorage == null){
            bookAuthorObj = [];
        }
        else{
            bookAuthorObj = JSON.parse(authorStorage);
        }
        if(typeStorage == null){
            bookTypeObj = [];
        }
        else{
            bookTypeObj = JSON.parse(typeStorage);
        }

        let htmlCode = "";
        for (let index = 0; index < bookNameObj.length; index++) {
            htmlCode += `
            <tr>
                <td>${index+1}</td>
                <td>${bookNameObj[index]}</td>
                <td>${bookAuthorObj[index]}</td>
                <td>${bookTypeObj[index]}</td>
                <td><button id="${index}" class="btn btn-primary" onclick=Display.delete(this.id)>Delete Book</button></td>
            </tr>
            `;
        }
            
        let tableBody = document.getElementById('books-list');

        if(htmlCode.length == 0){
            htmlCode = `<td colspan="10" class="my-3" style="text-align: center; font-weight: bold; font-size: 25px;">No Books Available! Add Books To Get Started</td>`;
            tableBody.innerHTML = htmlCode;
        }
        else{
            tableBody.innerHTML = htmlCode;
        }
    }
    
    static delete(index){
        console.log('deleting', index);
        let nameStorage = localStorage.getItem('book-name');
        let authorStorage = localStorage.getItem('book-author');
        let typeStorage = localStorage.getItem('book-type');

        if(nameStorage == null){
            console.log("Hellow");
            bookNameObj = [];
        }
        else{
            bookNameObj = JSON.parse(nameStorage);
        }
        
        if(authorStorage == null){
            bookAuthorObj = [];
        }
        else{
            bookAuthorObj = JSON.parse(authorStorage);
        }
        if(typeStorage == null){
            bookTypeObj = [];
        }
        else{
            bookTypeObj = JSON.parse(typeStorage);
        }
        
        bookNameObj.splice(index, 1);
        bookAuthorObj.splice(index, 1);
        bookTypeObj.splice(index, 1);
        
        localStorage.setItem('book-name', JSON.stringify(bookNameObj));
        localStorage.setItem('book-author', JSON.stringify(bookAuthorObj));
        localStorage.setItem('book-type', JSON.stringify(bookTypeObj));
        display.show();
        // this.show();
    }
    
    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
}

let nameStorage = localStorage.getItem('book-name');
let authorStorage = localStorage.getItem('book-author');
let typeStorage = localStorage.getItem('book-type');

if(nameStorage == null){
    bookNameObj = [];
}

else{
    bookNameObj = JSON.parse(nameStorage);
}

if(authorStorage == null){
    bookAuthorObj = [];
}

else{
    bookAuthorObj = JSON.parse(authorStorage);
}

if(typeStorage == null){
    bookTypeObj = [];
}
else{
    bookTypeObj = JSON.parse(typeStorage);
}

let display = new Display();
display.show();
let addBook = document.getElementById('add-book');
addBook.addEventListener('click', libraryFormSubmit);

function libraryFormSubmit(e){
    let nameStorage = localStorage.getItem('book-name');
    let authorStorage = localStorage.getItem('book-author');
    let typeStorage = localStorage.getItem('book-type');

    if(nameStorage == null){
        bookNameObj = [];
    }
    else{
        bookNameObj = JSON.parse(nameStorage);
    }
    
    if(authorStorage == null){
        bookAuthorObj = [];
    }
    else{
        bookAuthorObj = JSON.parse(authorStorage);
    }
    if(typeStorage == null){
        bookTypeObj = [];
    }
    else{
        bookTypeObj = JSON.parse(typeStorage);
    }

    // console.log('You have submmited the library form succesfully');
    let Alert = document.getElementById('charAlert');
    let name = document.getElementById('book-name').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('science-fiction');
    let programming = document.getElementById('programming');
    let buisness = document.getElementById('buisness');
    let literature = document.getElementById('literature');
    let type;

    if (fiction.checked){
        type = fiction.value;
    }
    else if (programming.checked){
        type = programming.value;
    }
    else if (buisness.checked){
        type = buisness.value;
    }
    else if (literature.checked){
        type = literature .value;
    }

    let book = new Book(name, author, type);
    if(display.validate(book)){
        display.addToUi(book);
        display.clear();
    }
    else{
        Alert.style.cssText += "display: block !important";
        
        setTimeout(() => {
            Alert.style.cssText += "display: none !important";
        }, 2000);
    }
    // console.log(book);
    e.preventDefault();
}