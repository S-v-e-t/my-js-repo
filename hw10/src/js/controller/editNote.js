import { notepad } from "../app";
import refreshPriority from "../view/refreshPriority";

function editNote(event) {
  event.preventDefault();
  const { target } = event;
  if (
    target.dataset.action === "edit-note" ||
    target.parentNode.dataset.action === "edit-note"
  ) {
    const li = target.closest(".note-list__item");
    const { id } = li.dataset;
    const note = notepad.findNoteById(id);
    const title = li.querySelector(".note__title");
    const body = li.querySelector(".note__body");

    li.classList.toggle("active");

    if (li.classList.contains("active")) {
      title.setAttribute("contenteditable", true);
      body.setAttribute("contenteditable", true);
      title.style.backgroundColor = "#2E8B57";
      body.style.backgroundColor = "#2E8B57";
      title.style.color = "#fff";
      body.style.color = "#fff";
      target.style.backgroundColor = "#2E8B57";
      target.style.borderRadius = "50%";
      note.title = title.textContent;
      note.body = body.textContent;
          } else {
      title.setAttribute("contenteditable", false);
      body.setAttribute("contenteditable", false);
      title.style.backgroundColor = "#fff";
      body.style.backgroundColor = "#fff";
      title.style.color = "#7c7879";
      body.style.color = "#7c7879";
      target.style.backgroundColor = "#7c7879";
      target.style.borderRadius = "50%";
      note.title = title.textContent;
      note.body = body.textContent;
          }
  }
}
export default editNote;
