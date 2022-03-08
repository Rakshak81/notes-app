const NotesModel = require('./notesModel');

describe('notes', () => {
  
  let notes;

  beforeEach(() => {
    notes = new NotesModel();
  });

  it('starts with no notes', () => {
    expect(notes.getNotes()).toEqual([]);
  })

  it('can add a note', () => {
  
    notes.addNote('Buy milk');
    expect(notes.getNotes()).toEqual(['Buy milk']);
  })

  it('resets the list of notes', () => {
    notes.addNote('Buy milk');
    notes.reset();

    expect(notes.getNotes()).toEqual([]);
  })

})





