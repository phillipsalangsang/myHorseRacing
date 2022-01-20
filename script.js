// var myName=prompt("What is your name?")
// alert (`Hi there ${myName} how are you today`)


// let firstName=prompt("what is your first name?","")
// let lastName=prompt("what is your surname?","")
// let yoB=prompt("what is your Year of birth?","")
// console.log(firstName.slice(0,2)+lastName+yoB.slice(2,4))

// let sentence=prompt("string to search","The quick brown fox.")
// let searchFor=prompt("search for","fox")
// alert(sentence.indexOf(searchFor)) 

// let story="The quick brown fox."
// story = story.replaceALL("a","*")
// story = story.replaceALL("e","*")
// story = story.replaceALL("i","*")
// story = story.replaceALL("o","*")
// story = story.replaceALL("u","*")

// alert (story)

"use strict"

class Horse{

    element 
    x 

    constructor(element,y,color){

        element.style.top = y + "px"
        element.style.backgroundColor=color
        element.classList.add("horse")
        document.body.appendChild(element)

        this.element=element
        this.x=0

}

    move(){
        this.element.style.left=this.x +"px"
        this.x += Math.floor(Math.random()*10)
}

    checkForWin(h){
        if(this.x >=finish){
            alert(`${colors[h]} horse wins`)
            resetRace();
    }
}

    rest(){
        this.x=0
    }    
}

const numHorses = 5
let horses=[]
let horseX=[]

let colors=["red", "blue", "orange", "cyan", "magenta", "yellow", "black", "turquoise", "grey", "lilac", "white"]

function startRace(){
    setInterval(move,50)
}

//setup all the horses
for(let h=0;h<numHorses;h++){
    horses[h] = document.createElement("div")
    horses[h].classList.add("horse")
    horses[h].style.top = 50 + h*18 + "px"
    horses[h].style.backgroundColor=colors[h]
    horseX[h]=0
    document.body.appendChild(horses[h])
}

const finish=500

function move(){
    for(let h=0;h<numHorses;h++){
        horses[h].style.left=horseX[h] +"px"
    }
}

var redHorse=document.getElementById("redHorse")
var blueHorse=document.getElementById("blueHorse")
var yellowHorse=document.getElementById("yellowHorse")
var blackHorse=document.getElementById("blackHorse")

var redHorseX=0
var blueHorseX=0
var yellowHorseX=0
var blackHorseX=0

const finish=800

function move(){
    
    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    
    blueHorse.style.left = blueHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)

    yellowHorse.style.left = yellowHorseX +"px"
    yellowHorseX += Math.floor(Math.random()*10)
    
    blackHorse.style.left = blackHorseX +"px"
    blackHorseX += Math.floor(Math.random()*10)
    
    if (redHorseX>=800){alert("Red horse wins");resetRace()}
    if (blueHorseX>=800){alert("Blue horse wins");resetRace()}
    if (yellowHorseX>=800){alert("Yellow horse wins");resetRace()}
    if (blackHorseX>=800){alert("Black horse wins");resetRace()}
}

function startRace(){

    setInterval(move,50)  
    alert("On Your Marks. Get Set. GO!")
    clearInterval()
}

function resetRace(){
    redHorseX=0
    blueHorseX=0
    yellowHorseX=0
    blackHorseX=0
}

setupHorses()


// class Horse{

//     element 
//     x 

//     constructor(element,y,color){

//         element.style.top = y + "px"
//         element.style.backgroundColor=color
//         element.classList.add("horse")
//         document.body.appendChild(element)

//         this.element=element
//         this.x=0

// }

//     move(){
//         this.element.style.left=this.x +"px"
//         this.x += Math.floor(Math.random()*10)
// }

//     checkForWin(h){
//         if(this.x >=finish){
//             alert(`${colors[h]} horse wins`)
//             resetRace();
//     }
// }

//     rest(){
//         this.x=0
//     }    
// }

// const numHorses = 5
// let horses=[]


// let colors=["red","blue","orange","cyan","magenta","yellow","black","turqoise","grey","lilac","white"]

// function startRace(){
//     setInterval(moveHorses,50)
// }

// function setupHorses(){
//     for(let h=0;h<numHorses;h++){
//         horses.push (new Horse(document.createElement("div"), 50 + h*45,colors[h]))
//     }
// }

// const finish=500

// function moveHorses(){
//     for(let h=0;h<numHorses;h++){

//         let horse=horses[h]
//         horse.move()
//         horse.checkForWin(h)
//     }
// }


// function resetRace(){
//     for(let h=0;h<numHorses;h++){
//         horse[h.reset()]
//     }
// }

// setupHorses()









