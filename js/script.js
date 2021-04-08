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

// Dichiarazione variabili
let start = document.getElementById("start_game");
let level = document.getElementById("level");
let levelTitle = document.getElementById("level_title");
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

//Al click parte il gioco 
start.addEventListener("click", function() {

  level.classList.add("pointer_event_none");
  start.classList.add("pointer_event_none");

  //Seleziono il livello del gioco con la select
  switch (level.value) {
    case "Facile":
      maxAttempts = 100;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_500');
      break;

    case "Normale":
      maxAttempts = 80;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_400');      
      break;

    case "Difficile":
      maxAttempts = 50;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_250');
      break;

    default:
      maxAttempts = 100;

      // creo il container della griglia di gioco
      gameGrid = document.createElement('div');
      gameGrid.classList.add('game_grid');
      gameGrid.classList.add('game_grid_500');
      break;

  }

  gridContainer.appendChild(gameGrid);

  // Generazione bombe
  while (randomPCArray.length < 16) {

    let generatedNumberPC = randomFunction(1, maxAttempts);
    let duplicate = checkIfNumberAlreadyExist(generatedNumberPC, randomPCArray);
    if (duplicate == false) {
      randomPCArray.push(generatedNumberPC);
    }

  }
  console.log(randomPCArray);

  // Gioco
  for (let i = 1; i <= maxAttempts && lost == false; i++) {

    const tableSquare = document.createElement('div'); //creo un nuovo tag nell'html
    tableSquare.classList.add('square_style'); //aggiungo una classe al nuovo tag
    const tableContentImg = document.createElement('img'); //creo il contenuto con dentro i numeri da 1 a maxAttempts
    tableContentImg.src = "img/question.png";
    tableSquare.appendChild(tableContentImg); //dentro il tag creato inserisco il nuovo contenuto creato
    gameGrid.appendChild(tableSquare); //dentro il blocco che voglio (container della pagina) inserisco tutto il nuovo blocco

    // Al click su un quadrato della griglia si attiva la funzione
    tableSquare.addEventListener("click", function () {

      tableSquare.classList.add('clicked');
      
      const tableFlippedContent = document.createTextNode(i);
      tableSquare.replaceChild(tableFlippedContent, tableContentImg);

      // Rileva se il quadrato è una bomba
      for (let j = 0; j < randomPCArray.length; j++) {
      
        if (i == randomPCArray[j]) {
  
          const newImg = document.createElement('img'); //creo nuovo tag img
          newImg.classList.add('clicked');
          newImg.src = "img/bomb.png"; //aggiungo attributo src al tag creato  
          tableSquare.replaceChild(newImg, tableFlippedContent); //inserisco al posto del vecchio contenuto quello nuovo
          
        }

      }

      let duplicateCheck = checkIfNumberAlreadyExist(i, attempts);
      let gameCheck = checkIfNumberAlreadyExist(i, randomPCArray);

      // Verifica se il quadrato selezionato è un numero valido o una bomba, o aumenta il punteggio o finisce la partita
      if (gameCheck == true) {

        lost = true;
        gameGrid.classList.add("fade_out");

        setTimeout( function() {
          const win = document.createElement('p');
          win.classList.add("score_text");
          const winContent = document.createTextNode("Punteggio: " + score);
          win.appendChild(winContent);
          mainContainer.replaceChild(win, gridContainer);

          // Creo il tasto gioca di nuovo
          const retryButtonContainer = document.createElement('div');
          retryButtonContainer.classList.add("retry_game_button");
          const retryButton = document.createElement('a');
          // retryButton.id = "retry_game";
          retryButton.classList.add("start_game");

          const retryContent = document.createTextNode("Gioca di nuovo");

          mainContainer.appendChild(retryButtonContainer);
          retryButtonContainer.appendChild(retryButton);
          retryButton.appendChild(retryContent);

          retryButton.addEventListener("click", function() {

            window.location.reload(true);

          });

        }, 950);

      } else if (duplicateCheck == false) {
        attempts.push(i);
        console.log(attempts);
        score++;
      }

    }, {once: true});
    
  }  
  // Fine gioco

}, {once: true});


 














