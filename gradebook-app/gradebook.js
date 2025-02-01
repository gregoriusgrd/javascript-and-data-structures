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