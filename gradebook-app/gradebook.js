// get the average of the scores

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++){
      total += scores[i];
    }
    let average = total / scores.length;
    return average;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

// converting the student score to a letter grade.
function getGrade(score) {
    if (score === 100) {
      return "A++"
    } else if (score >= 90 && score <= 99) {
      return "A"
    } else if (score >= 80 && score <= 89) {
      return "B"
    } else if (score >= 70 && score <= 79) {
      return "C"
    } else if (score >= 60 && score <= 69) {
      return "D"
    } else {
      return "F"
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

/* 
The teacher is really happy with the program you have created so far. But now they want to have an 
easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".
*/

function hasPassingGrade(score) {
    if (getGrade(score) === "F") {
      return false;
    } else {
      return true
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

  /*
Complete the studentMsg function with totalScores and studentScore for parameters. 
The function should return a string representing a message to the student.
*/

function studentMsg(totalScores, studentScore) {
    if (getGrade(studentScore) === "F") {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) +". You failed the course."
    } else {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) +". You passed the course."
    }
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));