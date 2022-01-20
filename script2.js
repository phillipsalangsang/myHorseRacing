`use strict`

const numHorses = 3
let horses = [] //Array of horse elements
let horseX = [] // Array containing px position of every horse

let colors = [`red`,`blue`,`yellow`]

function startRace(){

    setInterval(move,50)
}

//Setup all the horses
for (let h=0;h<numHorses;h++){
        horses[h] = document.createElement(`div`) //Creates div element for the horses
        horses[h].classList.add(`horse`) //Creates class="horse" for each horse div
        horses[h].style.top = 50 + h*45 + `px` // Sets the vertical position of each horse
        horses[h].style.backgroundColor = colors[h] // Sets the colours from the array of colours
        horseX[h] = 0 //Sets the initial position of each horses like: var redHorseX=0
        document.body.appendChild(horses[h]) //This will add the div element into HTML
    }


const finishline = 500

function move(){
    
  for (let h=0;h<numHorses;h++){
    horses[h].style.left = horseX[h] +`px` //Sets the horizonal position
    horseX[h] += Math.floor(Math.random()*10) //Sets how far they move by a random amount
    if (horseX[h] >=finishline){alert(`${colors[h]} is the winner!`);resetRace();} //Checks if THIS horse crossed the finishline and resets the race
  }
}

function resetRace(){

    for(let h=0;h<numHorses;h++){
        horseX[h] = 0
    }
}
// for (x of horseX){}
// x = 0