const year = 2025;

function isLeapYear(year) {
  if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else if (year % 100 === 0) {
    return `${year} is a leap year`;
  } else if (year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(isLeapYear(2025));
