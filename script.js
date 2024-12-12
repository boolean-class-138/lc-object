// const person = [
//     'Samuele',
//     'Madrigali',
//     33,
//     true
// ]

// const person = {
//     firstName: "Samuele",
//     lastName: "Madrigali",
//     age: 33,
//     isFunny: true,
//     friends: ['Maurizio', 'Federico', 'Matteo']
// }

// const person2 = {
//     firstName: "Samantha",
//     lastName: "Madrigali",
//     age: 37,
//     isFunny: true,
//     friends: ['Maurizio', 'Sara', 'Fulvia']
// }

// const key = prompt("Quale informazione vuoi sapere del oggetto person?");
// console.log("chiave", key);
// console.log(person[key]);
// console.log(person["isFunny"]);

// person.firstName = "Samuela";
// person["age"] = 35;

// person.friends = ['Maurizio', 'Federico', 'Matteo'];

// console.log(person)

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// for (let key in person) {
//     console.log(person[key]);
// }

// console.log(person.friends)

// const personInfo = document.getElementById("person-info");

// let list = "";
// for (let key in person) {
//     list += `<li>${key}: ${person[key]}</li>`;
// }

// personInfo.innerHTML = list;


const students = [
    {
        firstName: "Samuele",
        lastName: "Madrigali",
        age: 33,
        isFunny: true,
        friends: ['Maurizio', 'Federico', 'Matteo']
    },
    {
        firstName: "Samantha",
        lastName: "Madrigali",
        age: 37,
        isFunny: true,
        friends: ['Maurizio', 'Sara', 'Fulvia']
    }
]

// console.log(students[1].friends[0])
// console.log(students[1].friends[1])
// console.log(students[1].friends[2])

// for(let i = 0; i < students[1].friends.length; i++) {
//     console.log(students[1].friends[i])
// }

for(let i = 0; i < students.length; i++) {
    const student = students[i];
    for(let i = 0; i < student.friends.length; i++) {
        const friend = student.friends[i];
        console.log(friend);
    }
}