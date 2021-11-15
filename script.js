// RACCOLTA DATI

// Chiedo il numero di chilometri
const kilometres = prompt ("Inserisci il numero di chilometri");

// Chiedo l'età
const age = prompt ("Inserisci la tua età");

// Converto i valori inseriti da stringa a numeri
let kilometresAsNumber = parseInt (kilometres);
let ageAsNumber = parseInt (age);

// 

// LOGICA 

// Applico il prezzo in base ai chilometri
let filterKilometres = kilometresAsNumber * 0.21;

// Genero il risultato
let price = filterKilometres;

// Applico uno sconto per i minorenni e per gli over 65
if (age < 18) {
    price = filterKilometres - (filterKilometres * 20) / 100;
} else if (age > 65) {
    price = filterKilometres - (filterKilometres * 40) / 100;
}

// 

// OUTPUT

// Arrotondo il risultato a 2 cifre decimali
price = price.toFixed(2);

// Genero il messaggio e lo stampo 
let message = `Il prezzo del tuo biglietto: ${price} euro`;
alert(message);

