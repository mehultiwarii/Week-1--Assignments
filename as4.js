//loop to calculate sum till n

let result = 0;
function calSum(n) {
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  console.log(result);

}

//let's find the sum till 15
calSum(15);
