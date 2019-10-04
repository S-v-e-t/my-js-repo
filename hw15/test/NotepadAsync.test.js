/* eslint-disable one-var */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */
const NotepadAsync = require('../src/NotepadAsync');
const PRIORITY_TYPES = require('./constants');
const initialNotes = require('./db');

const { getNotes, addNotes, delNotes } = require('../src/api');

// getNotes().then(console.log);

//  =================== get=========================  //
test(' get notes', async () => {
  const init = await getNotes();
  const notepad = new NotepadAsync(init);
  expect(notepad._notes).toEqual(initialNotes);
});

//  =================== save =========================  //
describe('save note', () => {
  beforeAll(() => {
    console.log('test save note start ');
  });

  test(' save note', () => {
    let target,
      title,
      body,
      priority;

    const notepad = new NotepadAsync();
    ({ title, body, priority } = initialNotes[4]);
    target = {
      title,
      body,
      priority,
    };
    //  чтобы исключить сравнение по id
    expect(
      notepad.saveNote(target).then((note) => {
        ({ title, body, priority } = note);
        const sourse = {
          title,
          body,
          priority,
        };
        return sourse;
      }),
    ).resolves.toEqual(target);
  });

  afterAll(() => {
    getNotes().then((data) => {
      if (data.length > 0) {
        const { id } = data[data.length - 1];
        delNotes(id);
      }
    });
  });
});
//  =================== delete =========================  //
describe('delete note', () => {
  beforeAll(() => {
    const note = {
      title: 'wait',
      body: 'asdfjkl',
      priority: 0,
    };
  });

  test(' delete note', () => {
    const notepad = new NotepadAsync(initialNotes);
    ({ id } = notepad._notes[notepad._notes.length - 1]);
    target = {
      id,
    };
  });
});
