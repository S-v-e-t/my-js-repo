// const isLocalStorage = () => {
//   // try {
//   //   return "localStorage" in window && window["localStorage"] !== null;
//   // } catch (e) {
//   //   console.log("localStorage is missing");
//   //   return false;
//   // }
//   try {
//     const key = '__some_random_key_you_are_not_going_to_use__';
//     storage.setItem(key, key);
//     storage.removeItem(key);
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

const load = (key) => {
  // if (!hasLocalStorage) return;
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  // if (!hasLocalStorage) return;
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const remove = (key) => {
  // if (!hasLocalStorage) return;
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export default { load, save, remove };
