const getUserLocation = () => {
  // pending - в ожидании
  const pending = Math.random() > 0.5;
  return pending ? null : "Ukraine";
};

const location = getUserLocation();

if (location) {
  console.log(location);
} else {
  console.error("Error: while getting location ");
}
