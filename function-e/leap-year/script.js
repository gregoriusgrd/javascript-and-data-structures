const year = 2025;

function isLeapYear(year) {
  let result = 0;

  if (year % 400 === 0) {
    result = `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    result = `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    result = `${year} is a leap year.`;
  } else {
    result = `${year} is not a leap year.`;
  }
  return result;
}

const result = isLeapYear(year);
console.log(result);
