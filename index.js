/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log(`Here's your header: ${header.textContent}`)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
// const playerDiv = document.querySelector("#player-container") this is wrong!!

//console.log("PLAYERS array looks like this:", PLAYERS)


let renderPlayer = function(player) {
    const playerCont = document.querySelector(".player-container")
    playerCont.innerHTML += `
    <div class="player" data-number=${player.number}>
    <h3> 
    ${player.name} (<em> ${player.nickname}
        </em>)  
        </h3> 
        <img src="${player.photo}" alt="${player.name}"> 
        </div>
        `
    }
    PLAYERS.forEach(player => renderPlayer(player)) 

/***** Deliverable 4 *****/

let player7 = document.querySelector(".player[data-number='7']");
player7.remove();