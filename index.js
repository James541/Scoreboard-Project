let homeScoreEl = document.getElementById("home-score")
let homeCount = 0

let guestScoreEl= document.getElementById("guest-score")
let guestCount = 0

function hPlusOne() {
    homeCount += 1
    homeScoreEl.innerText = homeCount
}

function hPlusTwo() {
    homeCount += 2
    homeScoreEl.innerText = homeCount
}

function hPlusThree() {
    homeCount += 3
    homeScoreEl.innerText = homeCount
}

function gPlusOne() {
    guestCount += 1
    guestScoreEl.innerText = guestCount
}

function gPlusTwo() {
    guestCount += 2
    guestScoreEl.innerText = guestCount
}

function gPlusThree() {
    guestCount += 3
    guestScoreEl.innerText = guestCount
}