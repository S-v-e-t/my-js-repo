import { refreshList } from './mvc/view';
import './mvc/controller';
import { notepad } from './mvc/model';


notepad.getNotes()
  .then((notes) => {
    refreshList(notes);
  })
  .catch(err => console.log(err));

console.log(notepad.getNotes());
