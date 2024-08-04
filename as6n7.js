//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
let user = {
  name: "mehul",
  age: 18,
  gender: "Male"

}
function greetObj(user) {
  console.log("Hello", user.name, "your age is", user.age, "and your gender is ", user.gender);
  if (user.age >= 18) {
    console.log("You are legally eligible to vote.")
  } else {
    console.log("Sorry, you can;t vote now")
  }
}

greetObj(user);