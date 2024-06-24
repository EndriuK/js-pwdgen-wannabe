let first_name = prompt ("Qual è il tuo nome?");
let last_name = prompt ("Qual è il tuo cognome?");
let color = prompt ("Qual è il tuo colore preferito?");

const STRING = first_name;
console.log(STRING);

let full_string = `${first_name} ${last_name} ${color} nomecognomecolorepreferito23 `;
console.log(full_string);


console.log(document.getElementById("info").innerHTML);
document.getElementById("info").innerHTML = document.getElementById("info").innerHTML + full_string;

