"use strict";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log(`${type.value.toUpperCase()} es de: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
});
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    console.log(input);
});
// let names:string[]=["mario","luigi","yoshi"];
// names.push("peach");
// console.log(names);
// let numbers:(number|string)[]=[1,2,3];
// numbers.push(1);
// console.log(numbers);
// let user={
//     firstName:"Steven",
//     lastName:"Zuluaga Cortes",
//     age: 28
// };
// user={
//     firstName:'Mario',
//     lastName:'Bros',
//     age: 80
// }
// console.log(user.firstName.length);
// const add =(num1:number, num2:number):number=>{
//     const sum:number = num1 + num2;
//     return sum;
// };
// console.log(add(10,20));
