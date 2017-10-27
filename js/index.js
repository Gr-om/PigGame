var action = document.querySelector(".actions");
var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");
var joueurActuelElement = document.querySelector(".player-name");
var totalElement = document.querySelector(".total-value");
var scoreCourantElement = document.querySelector(".stock");
var score1Element = document.querySelector(".score1");
var score2Element = document.querySelector(".score2");
var joueurActuel = "Joueur 1";

//initialisation de tous les scores et totaux
var scoreCourant = 0;
var total = 0;
var score2 = 0;
var score1 = 0;

function reset() {
  scoreCourant = 0;
  total = 0;
  score2 = 0;
  score1 = 0;
  scoreCourantElement.innerText = scoreCourant;
  score2Element.innerText = score2;
  score1Element.innerText = score1;
  totalElement.innerText = total;
  joueurActuelElement.innerText = joueurActuel;
}

function win() {
  if (score1 >= 100) {
    score1Element.innerText = "Winner Winner Chicken Dinner !";
    reset();
  } else if (score2 >= 100) {
    score2Element.innerText = "Winner Winner Chicken Dinner !";
    reset();
  }
}

function tirageDe() {
  var a = Math.floor(6 * Math.random() + 1);
  return a;
}

action.addEventListener("click", bouton);


function bouton(event) {
  var target = event.target;
  if (target.classList.contains("sock-it")) {
    if (joueurActuel === "Joueur 1") {
      score1 += scoreCourant;
      score1Element.innerText = score1;
      scoreCourant = 0;
      scoreCourantElement.innerText = scoreCourant;
      joueurActuel = "Joueur 2";
      joueurActuelElement.innerText = joueurActuel;
      win();
    } else {
      score2 += scoreCourant;
      score2Element.innerText = score2;
      scoreCourant = 0;
      scoreCourantElement.innerText = "0";
      joueurActuel = "Joueur 1";
      joueurActuelElement.innerText = joueurActuel;
      win();
    }
  } else if (target.classList.contains("launch-it")) {
    var de1 = tirageDe();
    var de2 = tirageDe();
    dice1.innerText = de1;
    dice2.innerText = de2;
    totalElement.innerText = de1 + de2;
    scoreCourant += de1 + de2;
    scoreCourantElement.innerText = scoreCourant;

    if (de1 == 1 || de2 == 1) {
      if (joueurActuel === "Joueur 1") {
        joueurActuel = "Joueur 2";
        scoreCourant = 0;
      } else {
        joueurActuel = "Joueur 1";
        scoreCourant = 0;
      }

      joueurActuelElement.innerText = joueurActuel;
      scoreCourant = 0;
      scoreCourantElement.innerText = scoreCourant;
    }
  }
}