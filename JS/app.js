
const scoreBoard = document.querySelector("#scoreBoard");
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const playingTo = document.querySelector("#playingTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 8;
let isGameOver = false;

p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score == winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner")
            p1Display.classList.add("looser")
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score == winningScore) {
            isGameOver = true;
            p2Display.classList.add("winner")
            p1Display.classList.add("looser")
        }
        p2Display.textContent = p2Score;
    }
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    scoreBoard.innerText = `${p1Score} to ${p2Score}`;
}

resetButton.addEventListener("click", reset)

playingTo.addEventListener("change", function () {
    winningScore = this.value;
    reset();
})


const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === "lalalala") return 'WELCOME'
    throw 'Invalid Password'
}
