import { notepad } from "../app";
import refreshPriority from "../view/refreshPriority";

function changePriority(event) {
  event.preventDefault();
  const { target } = event;
  // console.log(target);
  const li = target.closest(".note-list__item");
  const { id } = li.dataset;
  const note = notepad.findNoteById(id);

  if (
    target.dataset.action === "decrease-priority" ||
    target.parentNode.dataset.action === "decrease-priority"
  ) {
    //  console.log(`decrease-priority`);
    if (note.priority !== 0) {
      note.priority = note.priority - 1;
      refreshPriority();
    }
  }
  if (
    target.dataset.action === "increase-priority" ||
    target.parentNode.dataset.action === "increase-priority"
  ) {
    //  console.log(`increase-priority`);
    if (note.priority !== 2) {
      note.priority = note.priority + 1;
      refreshPriority();
    }
  }
}
export default changePriority;
