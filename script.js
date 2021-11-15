
// RACCOLTA DATI

// Chiedo il numero di chilometri

const kilometres = prompt ("Inserisci il numero di chilometri");

// Chiedo l'età

const age = prompt ("Inserisci la tua età");

// Converto i valori inseriti da stringa a numeri

let kilometresAsNumber = parseInt (kilometres);

let ageAsNumber = parseInt (age);

// LOGICA 

// Preparazione variabili
let price;
let filterKilometres;
price = filterKilometres;

// Applico il prezzo in base ai chilometri
filterKilometres = kilometresAsNumber * 0.21;

// Applico i filtri per i minorenni e gli over 65

if (age < 18) {
    price = filterKilometres - (filterKilometres * 20) / 100;
} else if (age > 65) {
    price = filterKilometres - (filterKilometres * 40) / 100;
}

price = price.toFixed(2);

// OUTPUT

// Genero il messaggio e lo stampo 
let message = `Il prezzo del tuo biglietto: ${price} euro`;
alert(message);

