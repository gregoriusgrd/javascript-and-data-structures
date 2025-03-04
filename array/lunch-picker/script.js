const lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}

addLunchToEnd(lunches, "Tacos");
console.log(lunches);

addLunchToEnd(["Pizza", "Tacos"], "Burger");
console.log(lunches);

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

addLunchToStart(lunches, "Milk");
console.log(lunches);

addLunchToStart(["Burger", "Sushi"], "Pizza");
console.log(lunches);

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

removeLastLunch(lunches);
console.log(lunches);

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
  let randomLunch;
  if (array.length === 0) {
    console.log(`No lunches available.`);
  } else {
    randomLunch = array[Math.floor(Math.random() * array.length)];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
  return randomLunch;
}

getRandomLunch(lunches);
