let rock = document.querySelector(".rock");
let scissor = document.querySelector(".scissor");
let paper = document.querySelector(".paper");
let result = document.querySelector(".result");

let compchoice = ["rock", "paper", "scissor"];

rock.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 3);
    let comp = compchoice[rand];

    if (comp === "scissor") {
        result.innerText = "You Win.";
    } else if (comp === "paper") {
        result.innerText = "You Loss.";
    } else {
        result.innerText = "Draw.";
    }
});

scissor.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 3);
    let comp = compchoice[rand];

    if (comp === "paper") {
        result.innerText = "You Win.";
    } else if (comp === "rock") {
        result.innerText = "You Loss.";
    } else {
        result.innerText = "Draw.";
    }
});

paper.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 3);
    let comp = compchoice[rand];

    if (comp === "rock") {
        result.innerText = "You Win.";
    } else if (comp === "scissor") {
        result.innerText = "You Loss.";
    } else {
        result.innerText = "Draw.";
    }
});
