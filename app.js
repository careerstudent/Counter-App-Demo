let countEl = document.getElementById('count-el')
let wins = 0
let scoreboard = document.getElementById('scoreboard')


function incrementWins () {
   wins += 1;
   countEl.innerText = wins
} 


function saveScore () {
    let newScoreboard = wins + " " + " - "
    scoreboard.textContent += newScoreboard
    countEl.textContent = 0
    wins = 0
}



/*

function resetWins () {
    document.getElementById("count-el").textContent = 0
}
 */
