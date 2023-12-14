const incompltedNotes = [];
const compltedNotes = [];

document.querySelector("#add-btn").addEventListener("click", (event) => {
  let noteTitle = document.querySelector(".note-input").value;
  document.querySelector(".note-input").value = "";
  let noteDescription = document.querySelector(".note-description-input").value;
  document.querySelector(".note-description-input").value = "";
  if(!noteTitle || !noteDescription) return;
  let note = new Note(noteDescription, noteTitle);
  incompltedNotes.push(note);
  note.renderIn(incompletedElement);
});
const incompletedElement = document.querySelector(".incompleted");
const completedElement = document.querySelector(".completed");
let deletedElmentsState = true; // false stands for hidden and true for visible
document.querySelector("#show-deleted-btn").addEventListener("click", (e) => {
  if (deletedElmentsState) {
    completedElement.innerHTML = "";
    deletedElmentsState = false;
    e.target.innerText = 'show deleted notes';
  }
  else{
    completedElement.innerHTML = "<h1 style = 'border-top:1px solid var(---foreground);padding-top:24px'>deleted notes</h1>";
    for (let note of compltedNotes) {
      note.renderIn(completedElement);
    }
    deletedElmentsState = true;
    
    e.target.innerText = 'hide deleted notes';
  }
});