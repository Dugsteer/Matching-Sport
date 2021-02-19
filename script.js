// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");

// race car action
const car = document.getElementById("car");
const racing = new Audio("sounds/racing.mp3");
var isPlaying = false;

function addSpeed() {
  car.classList.toggle("runner");
  isPlaying ? racing.pause() : racing.play();
}

racing.onplaying = function () {
  isPlaying = true;
};
racing.onpause = function () {
  isPlaying = false;
};

racing.addEventListener(
  "ended",
  function () {
    racing.currentTime = 0;
    racing.play();
  },
  false
);

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
  { number: "1", name: "archery" },
  {
    number: "1",
    name: "<img src = 'img/archery.svg' alt='archery' class='image'>",
  },
  { number: "2", name: "badminton" },
  {
    number: "2",
    name: "<img src = 'img/badminton.svg' alt='badminton' class='image'>",
  },
  { number: "3", name: "basketball" },
  {
    number: "3",
    name: "<img src = 'img/basketball.svg' alt='basketball' class='image'>",
  },
  { number: "4", name: "boxing" },
  {
    number: "4",
    name: "<img src = 'img/boxing.svg' alt='boxing' class='image'>",
  },
  { number: "5", name: "climbing" },
  {
    number: "5",
    name: "<img src = 'img/climbing.svg' alt='climbing' class='image'>",
  },
  { number: "6", name: "cycling" },
  {
    number: "6",
    name: "<img src = 'img/cycling.svg' alt='cycling' class='image'>",
  },
  { number: "7", name: "diving" },
  {
    number: "7",
    name: "<img src = 'img/diving.svg' alt='diving' class='image'>",
  },
  { number: "8", name: "driving" },
  {
    number: "8",
    name: "<img src = 'img/driving.svg' alt='driving' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "football" },
  {
    number: "9",
    name: "<img src = 'img/football.svg' alt='football' class='image'>",
  },
  { number: "10", name: "golf" },
  {
    number: "10",
    name: "<img src = 'img/golf.svg' alt='golf' class='image'>",
  },
  { number: "11", name: "gymnastics" },
  {
    number: "11",
    name: "<img src = 'img/gymnastics.svg' alt='gymnastics' class='image'>",
  },
  { number: "12", name: "hang-gliding" },
  {
    number: "12",
    name: "<img src = 'img/hang-gliding.svg' alt='hang-gliding' class='image'>",
  },
  { number: "13", name: "yoga" },
  {
    number: "13",
    name: "<img src = 'img/yoga.svg' alt='yoga' class='image'>",
  },
  { number: "14", name: "hockey" },
  {
    number: "14",
    name: "<img src = 'img/hockey.svg' alt='hockey' class='image'>",
  },
  { number: "15", name: "horse-riding" },
  {
    number: "15",
    name: "<img src = 'img/horse-riding.svg' alt='horse-riding' class='image'>",
  },
  { number: "16", name: "ice-skating" },
  {
    number: "16",
    name: "<img src = 'img/ice-skating.svg' alt='ice-skating' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "karate" },
  {
    number: "17",
    name: "<img src = 'img/karate.svg' alt='karate' class='image'>",
  },
  { number: "18", name: "swimming" },
  {
    number: "18",
    name: "<img src = 'img/swimming.svg' alt='swimming' class='image'>",
  },
  { number: "19", name: "tennis" },
  {
    number: "19",
    name: "<img src = 'img/tennis.svg' alt='tennis' class='image'>",
  },
  { number: "20", name: "rugby" },
  {
    number: "20",
    name: "<img src = 'img/rugby.svg' alt='rugby' class='image'>",
  },
  { number: "21", name: "running" },
  {
    number: "21",
    name: "<img src = 'img/running.svg' alt='running' class='image'>",
  },
  { number: "22", name: "sailing" },
  {
    number: "22",
    name: "<img src = 'img/sailing.svg' alt='sailing' class='image'>",
  },
  { number: "23", name: "skiing" },
  {
    number: "23",
    name: "<img src = 'img/skiing.svg' alt='skiing' class='image'>",
  },
  { number: "24", name: "surfing" },
  {
    number: "24",
    name: "<img src = 'img/surfing.svg' alt='surfing' class='image'>",
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

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/trophy.svg" alt="picture of a sport trophy" class="imgBg smaller" id="imgBg"></div></div>`;

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
mainpic.addEventListener("click", addSpeed);
