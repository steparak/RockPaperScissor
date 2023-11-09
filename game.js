function getComputerChoice(){
    let randomChoice = Math.floor( Math.random()*3 +1);
    let computerChoice;

    switch (randomChoice){
        case 1: computerChoice = "rock";
        break;
        case 2: computerChoice = "paper";
        break;
        case 3: computerChoice = "scissor";
        break;
        default: computerChoice = "Error";
    }
    
    return computerChoice;  
}

function playerSelection(){
    let choice = prompt("rock, paper or scissor?");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection){

    let selection = playerSelection+computerSelection;

    switch (selection){
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            result = "You loose! " + computerSelection + " beat " + playerSelection;
        break;

        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            result = "You won! " + playerSelection + " beat " + computerSelection;
        break;

        default:
            result = "It's a tie! (" + playerSelection + ")";

    }


    return result;
}

function who_win(winner){
    let winner_code;

    if(winner.substr(4,1) == "w"){
        winner_code = 0;
    }else if(winner.substr(4,1) == "l"){
        winner_code = 1;
    }else{
    winner_code = 2;
    }

    return winner_code
}

function game(){
    const MAX_SCORE = 5;

    let score_player_1 = 0;
    let score_plyer_2 = 0;

    for( let i=0; !(score_player_1==MAX_SCORE || score_plyer_2==MAX_SCORE); i++){
        let winner_statement = playRound(getComputerChoice(), getComputerChoice());
        let winner = who_win(winner_statement)
        switch (winner){
            case 0: score_player_1++;
            break;
            case 1: score_plyer_2++;
            break;
            default:
        }
        
        console.log("You: " + score_player_1 + " - PC: " + score_plyer_2 + " -" + winner_statement);
    }

}