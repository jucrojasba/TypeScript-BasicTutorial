// const form = document.querySelector(".new-item-form") as HTMLFormElement

// const type = document.querySelector("#type") as HTMLSelectElement
// const toFrom = document.querySelector("#tofrom") as HTMLInputElement
// const details = document.querySelector("#details") as HTMLInputElement
// const amount = document.querySelector("#amount") as HTMLInputElement

// form.addEventListener("submit", (ev:Event)=>{
//     ev.preventDefault();
//     console.log(`${type.value.toUpperCase()} es de: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
// });

// const inputs = document.querySelectorAll("input");
// inputs.forEach(input=>{
//     console.log(input);
// })
let names:string[]=["mario","luigi","yoshi"];
names.push("peach");
console.log(names);

let numbers:(number|string)[]=[1,2,3];
numbers.push(1);
console.log(numbers);

let user={
    firstName:"Steven",
    lastName:"Zuluaga Cortes",
    age: 28
};
user={
    firstName:'Mario',
    lastName:'Bros',
    age: 80
}
console.log(user.firstName.length);
