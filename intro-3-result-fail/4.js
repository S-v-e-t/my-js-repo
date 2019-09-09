// CALLBACK

const getUserLocation = (onSuccess, onError) => {
  setTimeout(() => {
    const pending = Math.random() > 0.5;
    pending ? onSuccess("Ukraine") : onError("while getting location");
  }, 500);
};

const showUserLocationSuccess = location => console.log(
  `Location: ${location}`
);
const showUserLocationError = err => console.error(`Error: ${err}`);

getUserLocation(showUserLocationSuccess, showUserLocationError);
