let homeScoreEl = document.getElementById("home-score")
let homeCount = 0

let guestScoreEl= document.getElementById("guest-score")
let guestCount = 0

function hPlusOne() {
    homeCount += 1
    homeScoreEl.innerText = homeCount
}
window.hPlusOne = hPlusOne

function hPlusTwo() {
    homeCount += 2
    homeScoreEl.innerText = homeCount
}
window.hPlusTwo = hPlusTwo

function hPlusThree() {
    homeCount += 3
    homeScoreEl.innerText = homeCount
}
window.hPlusThree = homeOne

function gPlusOne() {
    guestCount += 1
    guestScoreEl.innerText = guestCount
}
window.gPlusOne = gPlusOne

function gPlusTwo() {
    guestCount += 2
    guestScoreEl.innerText = guestCount
}
window.gPlusTwo = gPlusTwo

function gPlusThree() {
    guestCount += 3
    guestScoreEl.innerText = guestCount
}
window.gPlusThree = gPlusThree