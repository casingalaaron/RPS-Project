function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let stringChoice = convertStringChoice(choice)

    function convertStringChoice(Numchoice){
    if(Numchoice === 0){
            return StringPlaceholder = "rock"
        }
        else if(Numchoice === 1){
            return StringPlaceholder = "paper"
        }
        else if(Numchoice === 2){
            return StringPlaceholder = "scissor"
        }
        else{
            return StringPlaceholder = "Invalid Input"
        }
    }
    console.log(`Computer Choice: ${stringChoice}`)
    return stringChoice
}

function getHumanChoice(){
    let choice = ""
    const buttons = document.querySelectorAll('button')

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const buttonClicked = event.target.id;
            console.log(buttonClicked)
            if(buttonClicked === "rockBTN"){
                choice = "rock"
            }
            else if(buttonClicked === "paperBTN"){
                choice = "paper"
            }
            else{
                choice = "scissor"
            }
        })
    })
    return choice
}





function playRound(HumanChoice, ComputerChoice){

    const Attacks = [HumanChoice, ComputerChoice]
    let humanScore = 0
    let computerScore = 0
    let roundWinner = 2
    let grandWinner = 0
    
    if(Attacks.includes("rock") && Attacks.includes("scissor")){
        grandWinner = Attacks.indexOf("rock")
        console.log(`${grandWinner}`)
        if(grandWinner == 0){
            humanScore++
            alert(`Human Won - ${HumanChoice} over ${ComputerChoice}`)
        }
        else {
            computerScore++
            alert(`Computer Won - ${ComputerChoice} over ${HumanChoice}`)
        }
    }
    else if(Attacks.includes("paper") && Attacks.includes("rock")){
        grandWinner = Attacks.indexOf("paper")
        console.log(`${grandWinner}`)
        if(grandWinner == 0){
            humanScore++
            alert(`Human Won - ${HumanChoice} over ${ComputerChoice}`)
        }
        else {
            computerScore++
            alert(`Computer Won - ${ComputerChoice} over ${HumanChoice}`)
        }
    }
    else if(Attacks.includes("scissor") && Attacks.includes("paper")){
        grandWinner = Attacks.indexOf("scissor")
        console.log(`${grandWinner}`)
        if(grandWinner == 0){
            humanScore++
            alert(`Human Won - ${HumanChoice} over ${ComputerChoice}`)
        }
        else {
            computerScore++
            alert(`Computer Won - ${ComputerChoice} over ${HumanChoice}`)
        }
    }
    else if(Attacks[0] === Attacks[1]){
        alert(`Draw - Both attacks are same [${Attacks[0]}]`)
    }
    else{
        alert("Invalid Attack")
    }
    grandWinner = humanScore > computerScore ? "Human Won" : "Computer Won"
    const result = document.querySelector('#result')
    result.textContent = `Human score: ${humanScore}\nComputer score: ${computerScore}`
}
let human = getHumanChoice()
let computer = getComputerChoice()
playRound(human, computer)


alert(`Human score: ${humanScore}\nComputer score: ${computerScore}`)