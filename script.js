// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");

//Change Intropic
function turnMe() {
  orange.classList.add("turnOrange");
  waterPour();
  setTimeout(orangeOff, 4000);
}

function orangeOff() {
  orange.classList.remove("turnOrange");
}

//Make sound of juice pouring
function waterPour() {
  const waterPouring = new Audio("sounds/water.mp3");
  waterPouring.play();
}

// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//GAME FUNCTIONALITY
// There are three different sets of words/images used in the game
const firstSet = document.getElementById("set1");
const secondSet = document.getElementById("set2");
const thirdSet = document.getElementById("set3");

// These are the other DOM elements
const instructions = document.getElementById("instructions");
const gameContainer = document.getElementById("game-tiles");
const sideBar = document.getElementById("sidebar");

// Each image and word in a set array has the same data-framework number, in order to check for pairs.
// The data-name is a string, which can be used in the second case as innerHTML.
const set1 = [
  { number: "1", name: "apple" },
  {
    number: "1",
    name: "<img src = 'img/apple.png' alt='apple' class='image'>",
  },
  { number: "2", name: "banana" },
  {
    number: "2",
    name: "<img src = 'img/banana.png' alt='banana' class='image'>",
  },
  { number: "3", name: "bread" },
  {
    number: "3",
    name: "<img src = 'img/bread.png' alt='bread' class='image'>",
  },
  { number: "4", name: "burger" },
  {
    number: "4",
    name: "<img src = 'img/burger.png' alt='burger' class='image'>",
  },
  { number: "5", name: "cake" },
  {
    number: "5",
    name: "<img src = 'img/cake.png' alt='cake' class='image'>",
  },
  { number: "6", name: "carrot" },
  {
    number: "6",
    name: "<img src = 'img/carrot.png' alt='carrot' class='image'>",
  },
  { number: "7", name: "chicken" },
  {
    number: "7",
    name: "<img src = 'img/chicken.png' alt='chicken' class='image'>",
  },
  { number: "8", name: "chips" },
  {
    number: "8",
    name: "<img src = 'img/chips.png' alt='chips' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "donut" },
  {
    number: "9",
    name: "<img src = 'img/donut.png' alt='donut' class='image'>",
  },
  { number: "10", name: "egg" },
  {
    number: "10",
    name: "<img src = 'img/egg.png' alt='egg' class='image'>",
  },
  { number: "11", name: "fish" },
  {
    number: "11",
    name: "<img src = 'img/fish.png' alt='fish' class='image'>",
  },
  { number: "12", name: "grapes" },
  {
    number: "12",
    name: "<img src = 'img/grapes.png' alt='grapes' class='image'>",
  },
  { number: "13", name: "honey" },
  {
    number: "13",
    name: "<img src = 'img/honey.png' alt='honey' class='image'>",
  },
  { number: "14", name: "ice-cream" },
  {
    number: "14",
    name: "<img src = 'img/ice-cream.png' alt='ice-cream' class='image'>",
  },
  { number: "15", name: "jam" },
  {
    number: "15",
    name: "<img src = 'img/jam.png' alt='jam' class='image'>",
  },
  { number: "16", name: "kiwi" },
  {
    number: "16",
    name: "<img src = 'img/kiwi.png' alt='kiwi' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "lettuce" },
  {
    number: "17",
    name: "<img src = 'img/lettuce.png' alt='lettuce' class='image'>",
  },
  { number: "18", name: "mushrooms" },
  {
    number: "18",
    name: "<img src = 'img/mushrooms.png' alt='mushrooms' class='image'>",
  },
  { number: "19", name: "nuts" },
  {
    number: "19",
    name: "<img src = 'img/nuts.png' alt='nuts' class='image'>",
  },
  { number: "20", name: "onion" },
  {
    number: "20",
    name: "<img src = 'img/onion.png' alt='onion' class='image'>",
  },
  { number: "21", name: "pizza" },
  {
    number: "21",
    name: "<img src = 'img/pizza.png' alt='pizza' class='image'>",
  },
  { number: "22", name: "potatoes" },
  {
    number: "22",
    name: "<img src = 'img/potatoes.png' alt='potatoes' class='image'>",
  },
  { number: "23", name: "spaghetti" },
  {
    number: "23",
    name: "<img src = 'img/spaghetti.png' alt='spaghetti' class='image'>",
  },
  { number: "24", name: "tomato" },
  {
    number: "24",
    name: "<img src = 'img/tomato.png' alt='tomato' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "FOOD MATCH: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "FOOD MATCH: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "FOOD MATCH: SET 3";

  playGame(set3);
});

// PLAY THE GAME
// SHUFFLE THE GAME ARRAY for the chosen SET 1, 2 or 3.
function playGame(array) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // call the shuffle function & assign the array to "contents"
  shuffle(array);
  let contents = array;

  // Create 16 Playing cards by using forEach on the array contents.
  contents.forEach((data, index) => createCard(data, index));

  // Call the createCard function turn the cards into DIV elements.
  function createCard(data, index) {
    let card = document.createElement("div");
    // Add a classname so the cards can be styled with CSS
    card.classList.add("card");
    //  Include the data-famework (data.number) of the cards so they can be checked plus the necessary HTML.

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/basket.svg" alt="picture of a basket of food" class="imgBg smaller" id="imgBg"></div></div>`;

    // Append the card divs to the game container so they appear on the page.
    gameContainer.appendChild(card);
  }

  // Select all instances of the class 'memory-card' and assign it to a constant
  const cards = document.querySelectorAll(".memory-card");

  // Set the initial boolean conditions to make the game work
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // Prevent card flipping, add the 'flip' CSS class to flip the card if it's alright to do so.
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    // Allowing two cards to be flipped and calling the check function
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  // The check function
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  // Make pairs vanish by killing their innerHTML
  function disableCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetBoard();
    }, 1000);
  }

  // Unflip cards if they don't match by removing the flip class.
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  // Set the board to continue the game, setting the constants to their original state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // Event listener added to the cards
  cards.forEach((card) => card.addEventListener("click", flipCard));
}
