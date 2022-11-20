const contentEl = document.querySelector(".content");

console.log(contentEl)

let markup = "";
let player = "X";
const playerX = [];
const playerO = [];
const STORAGE_KEY_X = "Player X"
const STORAGE_KEY_O = "Player O"

for (let i = 1; i <= 9; i++) {
    markup += `<div class="item" data-id = "${i}"></div>`
}

console.log(markup);

contentEl.insertAdjacentHTML('beforeend', markup);
contentEl.addEventListener('click', onDivClick);

function onDivClick (e) {
    if (e.target.textContent) {
        return;
    }
        e.target.textContent = player;
        const { id } = e.target.dataset;
        if (player === "X") {
            playerX.push(id);
            localStorage.setItem(STORAGE_KEY_X, JSON.stringify(playerX));
        } else {playerO.push(id);
            localStorage.setItem(STORAGE_KEY_O, JSON.stringify(playerO));};
        player = player === "X" ? "O" : "X"
}