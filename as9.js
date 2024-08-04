//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function adult(arr) {
  return arr.filter(function (arr) {
    return arr > 18;
  })
}

const age = [10, 41, 54, 32, 12, 30, 1, 12, 40];
console.log(adult);