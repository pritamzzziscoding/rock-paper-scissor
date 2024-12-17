let userScore = 0;
let compScore = 0;

let mapping = ["rock", "paper", "scissor"];

function getRandomElement(arr){
    const randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex];
}

function result(userSelect, compSelect){
    let userWin = true;
    if(userSelect === compSelect){
        console.log("Round Draw");
        $(".feed").text("Round is Draw");
        $(".feed").css("background-color","blue");
        return;
    }else if(userSelect === "rock"){
        userWin = compSelect === "scissor" ? true : false;
    }else if(userSelect === "paper"){
        userWin = compSelect === "rock" ? true : false;
    }else{
        userWin = compSelect === "paper" ? true : false;
    }

    if(userWin === true){
        $(".feed").text("You Won!!! computer choosed "+compSelect);
        $(".feed").css("background-color","green");
        console.log("won");
    }else{
        $(".feed").text("You Lost!!! computer choosed "+compSelect);
        $(".feed").css("background-color","red");
        console.log("Lost");
    }

    scoreUpdation(userWin, userSelect, compSelect);
}

function scoreUpdation(userWin){
    if(userWin === true) userScore++;
    else compScore++;
    $(".c-score").text(compScore);
    $(".u-score").text(userScore);
}

//This is the main area of The Logic

$("img").click(function(){
    const userSelect = this.classList[0];
    const compSelect = getRandomElement(mapping);
    result(userSelect,compSelect);
});


