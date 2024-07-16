const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];

const inAlphabetOrder = students.sort((a, b) => a.localeCompare(b));

console.log(inAlphabetOrder);
