// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// FUNZIONI -----------------------------------------------
//creo numero random tre un min e un massimo
function randomFunction(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//controllo se il numero esiste dentro l'array
function checkIfNumberAlreadyExist(number, array) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (number == array[i]) {
      result = true;
    }
  }
  return result;
}
// FUNZIONI -----------------------------------------------

// DICHIARAZIONE VARIABILI
let start = document.getElementById("start_game");
let level = document.getElementById("level");
let levelSentence = document.getElementById("level_sentence");
let play = document.getElementById("play");
let container = document.getElementById("container");
let gridContainer = document.getElementById("grid_container");
let gameGrid;
let mainContainer = document.getElementById("main_container");
let maxAttempts;
let randomPCArray = [];
let availableAttempts = maxAttempts - 16;
let attempts = [];
let score = 0;
let lost = false;

console.log(level.value);

//Al click appare il template della pagina
play.addEventListener("click", function() {
  container.classList.remove("container_before_play");
  container.classList.add("container_after_play");

  mainContainer.classList.remove("main_container_before_play");
  mainContainer.classList.add("main_container_after_play");
});

//Al click parte il gioco 
start.addEventListener("click", function() {
  start.classList.add("hidden");
  level.classList.add("hidden");
  levelSentence.classList.remove("hidden");

  // levelSelected.innerHTML = level.value;

  //Seleziono il livello del gioco con la select
  switch (level.value) {
    case "Facile":
      maxAttempts = 100;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_500');

      levelSentence.innerHTML = "Ti piace vincere facile?";
      levelSentence.classList.add("easy_level");
  
      break;
    case "Normale":
      maxAttempts = 80;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_400');

      levelSentence.innerHTML = "E prendilo qualche rischio ogni tanto!";
      levelSentence.classList.add("medium_level");
      
      break;
    case "Difficile":
      maxAttempts = 50;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_250');

      levelSentence.innerHTML = "Ammetto che hai fegato!";
      levelSentence.classList.add("hard_level");
      
      break;
  }

  gridContainer.appendChild(gameGrid);

  // Generazione bombe
  while (randomPCArray.length < 16) {
    let generatedNumberPC = randomFunction(1, maxAttempts);
    // console.log(generatedNumberPC);
    let duplicate = checkIfNumberAlreadyExist(generatedNumberPC, randomPCArray);
    if (duplicate == false) {
      randomPCArray.push(generatedNumberPC);
    }
  }
  console.log(randomPCArray);
  // Fine generazione bombe

  // Creazione gioco
  while ( attempts.length < availableAttempts && lost == false) {
    let userNumber = parseInt(prompt("Inserisci un numero tra 1 e " + maxAttempts)); //modificare input numero
    console.log(userNumber);
    let duplicateCheck = checkIfNumberAlreadyExist(userNumber, attempts);
    console.log(duplicateCheck);

    let gameCheck = checkIfNumberAlreadyExist(userNumber, randomPCArray);
    console.log(gameCheck);

    if (gameCheck == true) {
      alert("Hai perso"); // modificare alert
      lost = true;
    } else if (duplicateCheck == false) {
      attempts.push(userNumber);
      score++;
    }
    console.log("Punteggio" + score);
  }
  // alert("Il tuo punteggio è: " + score);
  // console.log(attempts);
  // Fine gioco

  console.log(maxAttempts);

  for (let i = 1; i <= maxAttempts; i++) {

    const tableSquare = document.createElement('div'); //creo un nuovo tag nell'html
    // tableSquare.setAttribute('id', 'click');
    tableSquare.classList.add('square_style'); //aggiungo una classe al nuovo tag
    const tableContentImg = document.createElement('img'); //creo il contenuto con dentro i numeri da 1 a maxAttempts
    tableContentImg.src = "https://lh3.googleusercontent.com/proxy/6MoLoR7REe2abidUoCZTFCnZwnZAJU7ho2rcfvWPKEhU94GFmlambB5ceKRGk-Qwq_wyiGa8BwwalZwVDZD5YZ-aaVs";
    tableSquare.appendChild(tableContentImg); //dentro il tag creato inserisco il nuovo contenuto creato
    gameGrid.appendChild(tableSquare); //dentro il blocco che voglio (container della pagina) inserisco tutto il nuovo blocco

    tableSquare.addEventListener("click", function () {

      const tableFlippedContent = document.createTextNode(i);
      tableSquare.replaceChild(tableFlippedContent, tableContentImg);

      for (let j = 0; j < randomPCArray.length; j++) {
      
        if (i == randomPCArray[j]) {
  
          const newImg = document.createElement('img'); //creo nuovo tag img
          newImg.src = "img/bomb.png"; //aggiungo attributo src al tag creato  
          tableSquare.replaceChild(newImg, tableFlippedContent); //inserisco al posto del vecchio contenuto quello nuovo
  
        } 
      }

    });

    tableSquare.classList.add('hidden');
    
  }  
});


 














