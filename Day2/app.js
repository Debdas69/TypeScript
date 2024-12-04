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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person = {
    firstname: "Debdas",
    age: 21,
    skills: ["javascript", "react", "node"],
    product: [100, "product1"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
