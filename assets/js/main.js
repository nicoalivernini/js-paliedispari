// Palidroma

// Chiediamo e l'utente inserisce la parola
var string = prompt('Inserisci una parola');
console.log(string);

// Creiamo la funzione per capire se la parola è palindroma
function check(string) {
  //.split separa la parola e inserisce ogni lettera in un cassetto dell'array
  splitStringa = string.split("");
  console.log(splitStringa);
  //.reverse inverte l'ordinamento dell'array
  reverseArray = splitStringa.reverse();
  console.log(reverseArray);
  //.join riunisce tutti gli elementi dell'array in una stringa
  unioneArray = reverseArray.join("");
  console.log(unioneArray);
}

//Richiamo funzione
check(string)

//Testo e stampo se la parola è palindroma
 if (string == unioneArray) {
   console.log('Questa parola è palindroma');
 } else {
   console.log('Questa parola non è palindroma');
 }


// Pari o Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("Scegli tra pari o dispari");

var numero = parseInt(prompt("scegli un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min, max) {

  var numeroRandom = Math.floor(Math.random() * (max) + 1);
}

randomNumber(1, 5);
console.log(randomNumber);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
