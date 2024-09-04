

///Variables
let homeCounter = 0
let guestCounter = 0
let homeScore = document.getElementById("home-points")
let guestScore =  document.getElementById("guest-points")
///////// Functions Home Team
function homeScoreOne(){
    homeCounter += 1
    homeScore.innerHTML = homeCounter
}
function homeScoreTwo(){
    homeCounter += 2
    homeScore.innerHTML = homeCounter
}

function homeScoreThree(){
    homeCounter += 3
    homeScore.innerHTML = homeCounter
}
//////Reset Function
function resetHome(){
    homeCounter = 0 
    guestCounter = 0
    homeScore.innerHTML = homeCounter
    guestScore.innerHTML = guestCounter
}

////// Functions Guest Team
function guestScoreOne(){
    guestCounter += 1
    guestScore.innerHTML = guestCounter
}

function guestScoreTwo(){
    guestCounter +=2
    guestScore.innerHTML = guestCounter
}

function guestScoreThree(){
    guestCounter += 3
    guestScore.innerHTML = guestCounter
}
