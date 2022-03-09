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
 it("Adds New note", () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);

  const input = document.querySelector('#Noteinput');
  input.value = "Test Add Note";

  const button = document.querySelector('#AddNote');

  button.click();

  expect(document.querySelectorAll('div.note').length).toEqual(1);
  expect(document.querySelectorAll('div.note')[0].innerText).toEqual("Test Add Note");

 });

 describe('NotesView',() => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new NotesModel();
     const view = new NotesView(model);
     model.addNote('Feed cat');
     model.addNote('Feed bunny');
     view.displayNotes();
     view.displayNotes();
 
     expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
});