const lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  let removedLastLunch;
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    removedLastLunch = array.pop(lunches);
    console.log(`${removedLastLunch} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array) {
  let removedFirstLunch;
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    removedFirstLunch = array.shift(lunches);
    console.log(
      `${removedFirstLunch} removed from the start of the lunch menu.`
    );
  }
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log(`No lunches available.`);
  } else {
    let randomLunch = array[Math.floor(Math.random() * array.length)];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
  return randomLunch;
}

getRandomLunch(lunches);

function showLunchMenu(array) {
  let joinedArray = array.join(", ");
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${joinedArray}`);
  }
  return array;
}

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
