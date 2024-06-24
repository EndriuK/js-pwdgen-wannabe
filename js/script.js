let first_name = prompt ("Qual è il tuo nome?");
let last_name = prompt ("Qual è il tuo cognome?");
let color = prompt ("Qual è il tuo colore preferito?");


let full_string = `${first_name}${last_name}${color}23`;
console.log(full_string);



console.log(document.getElementById("info").innerHTML);
document.getElementById("info").innerHTML +=  full_string;

