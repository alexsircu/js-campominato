// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// function randomFunction(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// var randomPCArray = [];
// for (var i = 1; i <= 16; i++) {
//   var generatedNumbersPC = randomFunction(1, 100);
//   randomPCArray.push(generatedNumbersPC);
//   if (randomPCArray[i] === randomPCArray.includes()) {
//     alert("errore");
//   }
// }
//
// console.log(randomPCArray);

function checkIfNumberAlreadyExist(number, array) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      result = true;
    }
  }
  return result;
}

var prova = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(prova);

checkIfNumberAlreadyExist(1, [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(checkIfNumberAlreadyExist(1, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
if (false) {
  alert("errore");
} else if (true) {
  alert("Va bene");
}
