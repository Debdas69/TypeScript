//Array

// const person : {
//   firstname: string;
//   age: number;
//   skills: string[];
// } = {
//   firstname: "Debdas",
//   age:21,
//   skills: ["javascript", "react", "node"]
// }
// console.log(person)

// Tupple

// const person :{
//          firstname: string;
//          age: number;
//          skills: string[];
//          product: [number, string];
// } = {
//   firstname: "Debdas",
//   age:21,
//   skills: ["javascript", "react", "node"],
//   product: [100, "product1"]
// }

// enum

enum Role {ADMIN, AUTHOR, READ_USER_ONLY}
const person ={
  firstname: "Debdas",
  age:21,
  skills: ["javascript", "react", "node"],
  product: [100, "product1"],
  role:Role.ADMIN
}
if(person.role === Role.AUTHOR){
  console.log("Author")
}
else if(person.role === Role.ADMIN){
  console.log("Admin")
}