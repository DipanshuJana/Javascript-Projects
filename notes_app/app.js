showNotes();
const addBtn = document.getElementById('add-btn');
const delBtn = document.getElementById('del-btn');
const search = document.getElementById('search-txt');

addBtn.addEventListener('click', ()=> {
    let Title = document.getElementById('note-title');
    let Textarea = document.getElementById('add-txt');
    let notes = localStorage.getItem("notes");
    let notestitle = localStorage.getItem("notes-title");
    if (notes == null){
        notesContentObj = [];
    }
    else{
        notesContentObj = JSON.parse(notes);
    }

    if (notestitle == null){
        notesTitleObj = [];
    }
    else{
        notesTitleObj = JSON.parse(notestitle);
    }

    notesContentObj.push(Textarea.value);
    notesTitleObj.push(Title.value);
    localStorage.setItem("notes", JSON.stringify(notesContentObj));
    localStorage.setItem("notes-title", JSON.stringify(notesTitleObj));
    Textarea.value = "";
    Title.value = "";
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    let notestitle = localStorage.getItem("notes-title");
    if (notes == null){
        notesContentObj = [];
    }
    else{
        notesContentObj = JSON.parse(notes);
    }

    if (notestitle == null){
        notesTitleObj = [];
    }
    else{
        notesTitleObj = JSON.parse(notestitle);
    }

    let html = "";
    for (let index = 0; index < notesContentObj.length; index++){
        html += `
        <div class="card note-card m-2" style="width: auto">
                <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <h5 class="card-title">${notesTitleObj[index]}</h5>
                <p class="card-text">${notesContentObj[index]}</p>
                <button id=${index} onclick=deleteNote(this.id) class="btn btn-primary" id="del-btn">Delete Note</button>
            </div>
        </div>`;
    };

    let notesElm = document.getElementById('notes');
    if (notesContentObj.length != 0 && notesTitleObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = 'Nothing to show here. Add a new note to get started!';
    }
};

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    let notestitle = localStorage.getItem("notes-title");
    if (notes == null){
        notesContentObj = [];
    }
    else{
        notesContentObj = JSON.parse(notes);
    }

    if (notestitle == null){
        notesTitleObj = [];
    }
    else{
        notesTitleObj = JSON.parse(notestitle);
    }

    notesContentObj.splice(index, 1);
    notesTitleObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesContentObj));
    localStorage.setItem("notes-title", JSON.stringify(notesTitleObj));
    showNotes();
}

search.addEventListener('input', ()=> {
    let noteCard = document.getElementsByClassName('note-card');
    let inputVal = search.value.toLowerCase();

    Array.from(noteCard).forEach(function(element){
        let cardTxtPara = element.getElementsByTagName('p')[0];
        let cardTxtHeading = element.getElementsByTagName('h5')[1];
        if (cardTxtHeading.innerText.toLowerCase().includes(inputVal)){
            element.style.display = "block";
        }
        else if (cardTxtPara.innerText.toLowerCase().includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});