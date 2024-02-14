import { ruswords } from "./words.js"

let checkButton = document.getElementById("checkButton")
let playerInput = document.getElementById("playerInput")
// выдает рандомное слово
let secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
// secretWord = ()
let text1 = document.getElementsByClassName("text1")[1]
let wordButton = document.getElementById("wordButton")
let podskazka = document.getElementById("podskazka")
let player2 = document.getElementById("player2")
let playerInput2 = document.getElementById("playerInput2")
let newShifr = ""
let img = document.getElementById("img")
let wordModal = document.getElementById("wordModal")
let onep = document.getElementById("onep")
let nastroyki = document.getElementById("nastroyka")
let newGame = document.getElementById("newGame")
let imgnumber = 0
let modal = document.getElementById("modal")
let h1 = document.getElementById("h1")
let letters = []
letters.push(10)
letters.unshift(8)
letters.pop()
letters.shift()
console.log(ruswords);

// меняет количество черточек в начале
text1.innerHTML = "_".repeat(secretWord.length)

checkButton.onclick = function (event) {
    playerInput.select()
    event.preventDefault()
    if (!letters.includes(playerInput.value)) {
        letters.push(playerInput.value)
    }
    podskazka.innerHTML = letters
    console.log(playerInput.value);
    if (secretWord.includes(playerInput.value)) {
        console.log("yes");
        newShifr = ""
        let lettersAmount = 0
        for (let i = 0; i < secretWord.length; i = i + 1) {
            if (letters.includes(secretWord[i])) {
                lettersAmount ++
                if (lettersAmount == secretWord.length) {
                    h1.innerHTML = ("ты победил")
                }
                console.log(secretWord[i],lettersAmount);
                newShifr = newShifr + secretWord[i]
            }
            else {
                console.log("_");
                newShifr = newShifr + "_"
            }
        }
        text1.innerHTML = newShifr
    }
    else{
        console.log("noooooooo");
        imgnumber = imgnumber + 1
        if (imgnumber == 6) {
            checkButton.disabled = true
            checkButton.style.pointerEvents = "none"
            checkButton.style.opacity = 0.5
            h1.innerHTML = ("ты проиграл, а секретное слово было "+secretWord)

        }
        img.src = "hangman"+imgnumber+".png"
    }
}


nastroyki.onclick = function(event) {
    event.preventDefault()
    console.log("nastroyki");
    modal.style.opacity = 1
    modal.style.pointerEvents = "auto"
    
}

player2.onclick = function(event) {
    event.preventDefault()
    wordModal.style.opacity = 1
    wordModal.style.pointerEvents = "auto"
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
}

wordButton.onclick = function(event) {
    event.preventDefault()
    secretWord = playerInput2.value
    text1.innerHTML = "_".repeat(secretWord.length)
    console.log(secretWord);
    wordModal.style.opacity = 0
    wordModal.style.pointerEvents = "none"

}


onep.onclick = function(event) {
    event.preventDefault()
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
}


modal.onclick = function(event) {
    event.preventDefault()
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
}

modal.children[0].onclick = function(event) {
    event.stopPropagation()
}






newGame.onclick = function (event) {
    event.preventDefault()
    podskazka.innerHTML = "вводи букву и нажимай проверить"
    letters = []
    h1.innerHTML = ("висилица")
    playerInput.value = ""
    secretWord =  ruswords[Math.floor(Math.random() * ruswords.length)]
    text1.innerHTML = "_".repeat(secretWord.length)
    img.src = "hangman"+0+".png"
    imgnumber = 0
    checkButton.disabled = false
    checkButton.style.pointerEvents = "auto"
    checkButton.style.opacity = 1
}







