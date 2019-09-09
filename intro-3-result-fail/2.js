// PROBLEM

const getUserLocation = () => {
  let pending;
  // pending - в ожидании
  setTimeout(() => (pending = Math.random() > 0.5), 5000);
  // как вернуть вычисленный pending ?!!
  return pending ? "Ukraine" : null ;
};

const location = getUserLocation();

if (location) {
  console.log(location);
} else {
  console.error("Error: while getting location ");
}
