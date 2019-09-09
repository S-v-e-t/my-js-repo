// CALLBACK

const getUserLocation = onSuccess => {
  setTimeout(() => {
    onSuccess("Ukraine");
  }, 500);
};

const showUserLocation = location => console.log(`Location: ${location}`);

getUserLocation(showUserLocation);


// ref.addEventListener('click', show)

// function show(e) {
//   // todo
// }