/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('NotesView',() => {
 it('displays two notes', () => {
   document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Feed cat');
    model.addNote('Feed bunny');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
 });
});


 








// describe(‘Notes’, () => {
//   it(‘displays 3 paragraphs’, () => {
//     document.body.innerHTML = fs.readFileSync(‘./index.html’);
//     const view = new View();
//     view.addParagraph()
//     expect(document.querySelectorAll(‘p’).length).toBe(3);
//   });
// });