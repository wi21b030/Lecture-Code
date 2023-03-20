let openedCards = 0
let clickedCards = 0
let timeElapsed = 0
let attemptedTurns = 0
let foundPairs = 0
let cardsArray = new Array(16)

startGame()

function startGame() {
    document.getElementById("user").innerText = prompt("Geben Sie Ihren Namen ein:")
    createBoard()
    setInterval(displayAttempts)
    setInterval(displayTime, 1000)
}

function displayTime() {
    if(foundPairs < 8) {
        let timer = document.getElementById("time")
        timeElapsed++
        timer.innerText = timeElapsed.toString()
    }
}

function displayAttempts() {
    document.getElementById("attempts").innerText = attemptedTurns.toString()
}

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function createBoard() {
    for(let i = 0; i < cardsArray.length; i++){
        let pic = document.createElement("div")
        let id = i+1
        pic.id = id
        pic.className = "karte"
        pic.addEventListener("click", function (){checkForMatch(id)})
        cardsArray[i] = pic
    }

    shuffleCards(cardsArray)

    let board = document.getElementById("spielbereich")
    for(let i = 0; i < 16; i++){
        if (i % 4 === 0) board.appendChild(document.createElement("br"))
        board.appendChild(cardsArray[i])
    }
}

function checkForMatch(index) {
    if (openedCards === 2) return
    let card = document.getElementById(index)
    card.style.backgroundImage = `url(pics/card${index}.png)`
    if (openedCards === 0) {
        clickedCards = index
        openedCards = 1
    } else if (clickedCards + index === 17) {
        attemptedTurns++
        foundPairs++
        window.setTimeout(function (){disableCards(index)}, 500)
    } else {
        attemptedTurns++
        openedCards = 2
        window.setTimeout(function (){flipCards(index)}, 500)
    }
}

function flipCards(index) {
    document.getElementById(clickedCards).style.backgroundImage = "url(pics/memoryBg.png)"
    document.getElementById(index).style.backgroundImage = "url(pics/memoryBg.png)"
    clickedCards = 0
    openedCards = 0
}

function disableCards(index) {
    document.getElementById(clickedCards).style.backgroundImage = "url(pics/memoryBgI.png)"
    document.getElementById(clickedCards).onclick = null
    document.getElementById(index).style.backgroundImage = "url(pics/memoryBgI.png)"
    document.getElementById(index).onclick = null
    clickedCards = 0
    openedCards = 0
}
