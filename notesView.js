class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.button = document.querySelector('#AddNote');
    this.button.addEventListener("click", () => {
      this.addNotes();
    })
  }

  displayNotes() {
    const oldnotes = document.querySelectorAll(".note")
    const notes = this.model.getNotes()

    oldnotes.forEach(note => {
      note.remove();
    })
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNotes(){
  const input = document.querySelector('#Noteinput');
  this.model.addNote(input.value);
  this.displayNotes();
  input.value = ""
   
  }
}

module.exports = NotesView; 