// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// Chiediamo e l'utente inserisce la parola
var string = prompt('Inserisci una parola');
console.log(string);
// Creiamo la funzione per capire se la parola è palindroma


function check(string) {
  //.split separa la parola e inserisce ogni lettera in un cassetto dell'array
  var splitStringa = string.split("");
  //.reverse inverte l'ordinamento dell'array
  var reverseArray = splitStringa.reverse();
  //.join riunisce tutti gli elementi dell'array in una stringa
  var unioneArray = reverseArray.join("");

  console.log(splitStringa);
  console.log(reverseArray);
  console.log(unioneArray);


}

var varCheck = check();

console.log(varCheck);




// function checkPalindroma () {
//
//   var checkString = string.split('').reverse().join('');
//   console.log(checkString);
//
// }
//   return (checkString) == string.split('').reverse().join('');
