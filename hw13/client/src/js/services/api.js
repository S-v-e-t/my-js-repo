const baseURL = 'http://127.0.0.1:3000/notes';

function getNotes() {
  return fetch(baseURL).then(r => r.json())
  // .then(console.log)
    .catch((err) => {
      console.log(err);
    });
}

function getNotesById(id) {
  return fetch(`${baseURL}/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching data:${response.statusText}`);
  })
    .then(console.log)
    .catch((err) => {
      console.log(err);
    });
}

function delNote(id) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${baseURL}/${id}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching data:${response.statusText}`);
  })
    .then(console.log())
    .catch((err) => {
      console.log(err);
    });
}

function saveNote(data) {
  const body = JSON.stringify(data);
  const options = {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(baseURL, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching data:${response.statusText}`);
  })
    .then(console.log())
    .catch((err) => {
      console.log(err);
    });
}


function updateNote(id, data) {
  const body = JSON.stringify(data);
  const options = {
    method: 'PATCH',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${baseURL}/${id}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching data:${response.statusText}`);
  })
    .then(console.log())
    .catch((err) => {
      console.log(err);
    });
}

function updatePriority(id, data) {
  const body = JSON.stringify(data);
  const options = {
    method: 'PATCH',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${baseURL}/${id}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching data:${response.statusText}`);
  })
    .then(console.log())
    .catch((err) => {
      console.log(err);
    });
}

export {
  getNotes, getNotesById, saveNote, delNote, updateNote, updatePriority,
};

// delNote('bCrk2k0UrjZG');
