// Palidroma

// Chiediamo e l'utente inserisce la parola
var string = prompt('Inserisci una parola');
console.log(string);

// Dichiaro la funzione per capire se la parola è palindroma
function check(string) {
  //.split separa la parola e inserisce ogni lettera in un cassetto dell'array
  var splitStringa = string.split("");
  //.reverse inverte l'ordinamento dell'array
  var reverseArray = splitStringa.reverse();
  //.join riunisce tutti gli elementi dell'array in una stringa
  var unioneArray = reverseArray.join("");

  return unioneArray;
}

//Richiamo funzione
console.log(check(string));

var checkPalindroma = check(string);

//Testo e stampo se la parola è palindroma
 if (string == checkPalindroma) {
   console.log('Questa parola è palindroma');
 } else {
   console.log('Questa parola non è palindroma');
 }



// Pari o Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("Scegli tra pari o dispari");
console.log(pariDispari);

var numero = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numero);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber(min, max) {
  var numero = Math.floor(Math.random() * (max) + min);
  return numero;
}

//Richiamo la funzione, salvo il valore in una variabile e stampo il numero casuale dato
var numeroRandom = randomNumber(1, 5)
console.log(numeroRandom);

// Sommiamo i due numeri
var somma = numero + numeroRandom;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function checkNumber(num1) {
  if (somma%2==0) {
    console.log('Questo numero è pari');
  } else {
    console.log('Questo numero è dispari');
  }
}

checkNumber(somma);

// Dichiariamo chi ha vinto.
if (pariDispari == "pari") {
  if (somma%2==0) {
    console.log("Ha vinto l'umano");
  } else {
    console.log("Ha vinto il computer");
  }
} else if (pariDispari == "dispari") {
  if (somma%2==1) {
    console.log("Ha vinto l'umano");
  } else {
    console.log("Ha vinto il computer");
  }
}
