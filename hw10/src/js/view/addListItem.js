function addListItem(ref, note) {
  ref.append(createListItem(note));
}
import createListItem from './createListItem';
export default addListItem;