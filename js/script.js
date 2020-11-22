// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// FUNZIONI -----------------------------------------------
function randomFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkIfNumberAlreadyExist(number, array) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      result = true;
    }
  }
  return result;
}
// FUNZIONI -----------------------------------------------

// Scelta difficoltà del gioco "BONUS"
var maxAttempts;
var level;
level = parseInt(prompt("Scegli la difficoltà tra 0, 1 o 2"));
switch (level) {
  case 2:
  maxAttempts = 50;
    break;
  case 1:
  maxAttempts = 80;
    break;
  default:
  maxAttempts = 100;
}
// generazione bombe
var randomPCArray = [];
while (randomPCArray.length < 16) {
  var generatedNumberPC = randomFunction(1, maxAttempts);
  // console.log(generatedNumberPC);
  var duplicate = checkIfNumberAlreadyExist(generatedNumberPC, randomPCArray);
  if (duplicate == false) {
    randomPCArray.push(generatedNumberPC);
  }
}
console.log(randomPCArray);
// fine generazione bombe

// creazione gioco
var availableAttempts = maxAttempts - 16;
var attempts = [];
var score = 0;
// gioco
var lost = false;
while ( attempts.length < availableAttempts && lost == false) {
  var userNumber = parseInt(prompt("Inserisci un numero tra 1 e " + maxAttempts));
  console.log(userNumber);
  var duplicateCheck = checkIfNumberAlreadyExist(userNumber, attempts);
  console.log(duplicateCheck);

  var gameCheck = checkIfNumberAlreadyExist(userNumber, randomPCArray);
  console.log(gameCheck);

  if (gameCheck == true) {
    alert("Hai perso");
    lost = true;
  } else if (duplicateCheck == false) {
    attempts.push(userNumber);
    score++;
  }
  console.log("Punteggio" + score);
}
alert("Il tuo punteggio è: " + score);
console.log(attempts);
// fine gioco
