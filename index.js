const contentEl = document.querySelector(".content");

console.log(contentEl);
let markup = "";
const STORAGE_PLAYER = "Player";
let player = localStorage.getItem(STORAGE_PLAYER) || "X";

const STORAGE_KEY_X = "Player X";
const STORAGE_KEY_O = "Player O";

let playerX = JSON.parse(localStorage.getItem(STORAGE_KEY_X)) || [];
let playerO = JSON.parse(localStorage.getItem(STORAGE_KEY_O)) || [];

const winnerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// const playerStep = JSON.parse(localStorage.getItem(STORAGE_PLAYER)) || [];
for (let i = 1; i <= 9; i++) {
  markup += `<div class="item" data-id = "${i}"></div>`;
}

console.log(markup);

contentEl.insertAdjacentHTML("beforeend", markup);
contentEl.addEventListener("click", onDivClick);

function onDivClick(e) {
  if (e.target.textContent) {
    return;
  }
  e.target.textContent = player;
  const { id } = e.target.dataset;
  if (player === "X") {
    playerX.push(id);
    localStorage.setItem(STORAGE_KEY_X, JSON.stringify(playerX));
    if (winnerArray.some(item => item.every(number => playerX.includes(number.toString())))) { 
        setTimeout(() => (alert('X')));
       return 
      };
  } else {
    playerO.push(id);
    localStorage.setItem(STORAGE_KEY_O, JSON.stringify(playerO));
    if (winnerArray.some(item => item.every(number => playerO.includes(number.toString())))) {
     setTimeout(() => (alert('O')));
       return 
      };
  }
  player = player === "X" ? "O" : "X";
  localStorage.setItem(STORAGE_PLAYER, JSON.stringify(player));

//   if (winnerArray.some(item => item.every(number => playerX.includes(number.toString)))) {
//     console.log(1);
//   };

}

(function () {
  [...contentEl.children].forEach((item) => {
    if (playerX.includes(item.dataset.id)) {
      item.textContent = "X";
    } else if (playerO.includes(item.dataset.id)) {
      item.textContent = "O";
    }
  });
})();


function onResetBtnClick () {
playerO = [];
playerX = [];

}