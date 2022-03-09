(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
      var notes = new NotesModel2();
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.button = document.querySelector("#AddNote");
          this.button.addEventListener("click", () => {
            this.addNotes();
          });
        }
        displayNotes() {
          const oldnotes = document.querySelectorAll(".note");
          const notes = this.model.getNotes();
          oldnotes.forEach((note) => {
            note.remove();
          });
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        addNotes() {
          const input = document.querySelector("#Noteinput");
          this.model.addNote(input.value);
          this.displayNotes();
          input.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  console.log(model.getNotes());
  console.log("The notes app is running");
  model.addNote("This is an example note displayed on the page");
  var view = new NotesView(model);
  view.displayNotes();
})();
