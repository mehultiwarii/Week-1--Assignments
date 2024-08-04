//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


function evenFunction(arr) {
  return arr.filter(function (arr) {
    return arr % 2 == 0;

  })
}
const arr = [10, 11, 12, 13, 14, 15, 16, 17];
console.log(evenFunction(arr));