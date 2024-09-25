let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let score = document.getElementById("score");
let pick = document.getElementById("pick");
let dict = ["rock", "paper", "scissors"];

rock.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    pick.innerHTML = "computer chooses: " + dict[randomNumber-1];
    if (randomNumber == 1){
        score.innerHTML = "draw";
    } else if (randomNumber == 2){
        score.innerHTML = "lose";
    } else {
        score.innerHTML = "win";
    }
});

paper.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    pick.innerHTML = "computer chooses: " + dict[randomNumber-1];
    

    if (randomNumber == 1){
        score.innerHTML = "win";
    } else if (randomNumber == 2){
        score.innerHTML = "draw";
    } else {
        score.innerHTML = "lose";
    }
});

scissors.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    pick.innerHTML = "computer chooses: " + dict[randomNumber-1];
    

    if (randomNumber == 1){
        score.innerHTML = "lose";
    } else if (randomNumber == 2){
        score.innerHTML = "win";
    } else {
        score.innerHTML = "draw";
    }
});
