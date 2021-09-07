const game = () => {
    let scoreP=0;
    let scoreC=0;

    const startGame = () => {
        const playBtn = document.querySelector('.play-btn');
       playBtn.addEventListener('click',()=> {
           const introScreen = document.querySelector('.intro');
           const matchScreen = document.querySelector('.match');
           const scoresScreen = document.querySelector('.scores');
           introScreen.classList.add('fadeOut');
           matchScreen.classList.add('fadeIn');
           scoresScreen.classList.add('fadeIn');
       })
    }

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOption = ["stone","paper","scissors"];
       
        
        

    options.forEach(option => {
        option.addEventListener('click', function () {
           
            const playerSelection = this.innerText;
            playerHand.src=`./img/${playerSelection}.png`;
            console.log(playerSelection);
            const computerHandNumber = Math.floor(Math.random()*3);
            const computerSelection = computerOption[computerHandNumber];
            console.log(computerSelection);
            computerHand.src=`./img/${computerSelection}.png`;
            compareHands(playerSelection, computerSelection);
            
        })
    })

    }
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent =scoreP;
        computerScore.textContent =scoreC;

    };
    const compareHands = (playerSelection, computerSelection) => {
        const winner = document.querySelector('.winner');
        if (playerSelection==="stone"){
            if(computerSelection==="paper"){
                winner.innerText= 'Computer Win';
                console.log('Computer Win')
                scoreC++;
                updateScore();
                return;
            }
            else if(computerSelection==="stone") {
                console.log('Tied Game')
                winner.innerText= 'Tied Game';
                return;
            }
            else {
                winner.innerText= 'Player Win';
                scoreP++;
                updateScore();
                return;
            }
        }
        else if(playerSelection==="paper"){
            if(computerSelection==="scissors"){
                winner.innerText= 'Computer Win';
                scoreC++;
                updateScore();
                console.log('Computer Win')
                return;
            }
            else if(computerSelection==="paper"){
                winner.innerText= 'Tied Game';
                console.log('Tied Game')
                return;
            }
            else {
                console.log('Player Win');
                winner.innerText= 'Player Win';
                scoreP++;
                updateScore();
                return;
            }
        }
        else {
            if(computerSelection==="stone"){
                winner.innerText= 'Computer Win';
                scoreC++;
                updateScore();
                console.log('Computer Win');
                return;
            }
           else if(computerSelection==="scissors"){
                winner.innerText= 'Tied Game';
                console.log('Tied Game');
                return;
            }
            else {
                winner.innerText= 'Player Win';
                scoreP++;
                updateScore();
                console.log('Player Win');
                return;
            }
        }
    

    }

    

    startGame();
   playMatch();
}
game()