import axios from 'axios';
import 'regenerator-runtime/runtime';

axios.defaults.baseURL = 'http://127.0.0.1:3000/notes';

export const getNotes = async () => {
  try {
    const response = await axios.get();
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error while requesting ${response.statusText}`);
  }
};

export const saveNote = async (note) => {
  try {
    const response = await axios.post('', note);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error while requesting ${response.statusText}`);
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error while requesting ${response.statusText}`);
  }
};

export const updateNote = async (id, updatedNote) => {
  try {
    const response = await axios.patch(`/${id}`, updatedNote);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error while requesting ${response.statusText}`);
  }
};
