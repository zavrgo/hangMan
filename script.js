import { ruswords } from "./words.js"
import { engwords } from "./words.js"
import { srbwords } from "./words.js"


let curLang = "rus"
let translated = {
    eng:{
        mainTitle:"Hangman",
        checkButton:"Check Letter",
        newGameButton:"New Game",
        settingsButton:"Settings",
        rules:"Type Your Letter And Press Check Letter",
        rulesInGame:"Used Letters: ",
        settingsTitle:"Settings",
        player1Button:"For 1 Player",
        player2Button:"For 2 Player",
        langTitle:"Language",
        multiplayerTitle:"2 Players",
        multiplayerSubTitle:"the first player comes up with a word, and the second player must guess it",
        wordInput:"Word",
        readyButton:"Ready!",
        winPhrase:"You Wiiin!!!",
        losePhrase:"You lose, and secret word was a ",

    },
    crn:{
        mainTitle:"vjesala",
        checkButton:"pogledati slovo",
        newGameButton:"nova igra",
        settingsButton:"podesavanja",
        rules:"pisi tvoje slovo i pritisni pogledati slovo",
        rulesInGame:"koriscena slova: ",
        settingsTitle:"podesavanja",
        player1Button:"za 1 covjeka",
        player2Button:"za 2 covjeka",
        langTitle:"jezik",
        multiplayerTitle:"2 covjeka",
        multiplayerSubTitle:"prvi covjek pise rijec, a drugi treba da to uzna",
        wordInput:"rijec",
        readyButton:"gotov!",
        winPhrase:"ti si pobjedio!!!",
        losePhrase:"ti si proigrao, sekretno rijec je bilo ",

    },
    rus:{
        mainTitle:"виселица",
        checkButton:"проверить букву",
        newGameButton:"новая игра",
        settingsButton:"настройки",
        rules:"вводи букву и нажимай проверить",
        rulesInGame:"использованные буквы: ",
        settingsTitle:"настройки",
        player1Button:"на 1 игрока",
        player2Button:"на 2 игрока",
        langTitle:"язык",
        multiplayerTitle:"2 игрока",
        multiplayerSubTitle:"первый игрок загадывает слово, а второй должен его угадать",
        wordInput:"слово",
        readyButton:"готово!",
        winPhrase:"ты победииил!!!",
        losePhrase:"ты проиграл, а загаданое слово было ",
    }


}


 

function translateGame(lang) {
    curLang = lang
h1.innerHTML = translated[lang].mainTitle
checkButton.innerHTML = translated[lang].checkButton
newGame.innerHTML = translated[lang].newGameButton
nastroyki.innerHTML = translated[lang].settingsButton
podskazka.innerHTML = translated[lang].rules
setTitle.innerHTML = translated[lang].settingsTitle
onep.innerHTML = translated[lang].player1Button
player2.innerHTML = translated[lang].player2Button
langTitle.innerHTML = translated[lang].langTitle
multiplayerTitle.innerHTML = translated[lang].multiplayerTitle
subT.innerHTML = translated[lang].multiplayerSubTitle
playerInput2.placeholder = translated[lang].wordInput
wordButton.innerHTML = translated[lang].readyButton

}


let checkButton = document.getElementById("checkButton")
let playerInput = document.getElementById("playerInput")
let curWords = ruswords
// выдает рандомное слово
let secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
// secretWord = ()
let text1 = document.getElementsByClassName("text1")[1]
let setTitle = document.getElementsByClassName("text1")[0]
let langTitle = document.getElementById("langTitle")
let wordButton = document.getElementById("wordButton")
let multiplayerTitle = document.getElementsByClassName("neZanyat")[0]
let multiplayerSubTitle = document.getElementById("subT")
let podskazka = document.getElementById("podskazka")
let player2 = document.getElementById("player2")
let playerInput2 = document.getElementById("playerInput2")
let newShifr = ""
let img = document.getElementById("img")
let wordModal = document.getElementById("wordModal")
let langButtons = document.getElementsByClassName("lang")
let onep = document.getElementById("onep")
let nastroyki = document.getElementById("nastroyka")
let newGame = document.getElementById("newGame")
let imgnumber = 0
let singleMode = true
let modal = document.getElementById("modal")
let h1 = document.getElementById("h1")
let letters = []
letters.push(10)
letters.unshift(8)
letters.pop()
letters.shift()
console.log(ruswords);

for (let b of langButtons){
    b.onclick = function (event){
        event.preventDefault()
        let activeButton = document.getElementsByClassName("activeLang")[0]
        activeButton.classList.remove("activeLang")
        b.classList.add("activeLang")
        translateGame(b.id)
        curWords = b.id == "eng"? engwords: b.id == "crn"? srbwords: ruswords
        secretWord =  curWords[Math.floor(Math.random() * curWords.length)]
        start()
    }
}


// меняет количество черточек в начале
text1.innerHTML = "_".repeat(secretWord.length)

checkButton.onclick = function (event) {
    let letter = playerInput.value.toLowerCase()

    playerInput.select()
    event.preventDefault()
    if (!letters.includes(letter)) {
        letters.push(letter)
    }
    podskazka.innerHTML = translated[curLang]["rulesInGame"]+letters
    if (secretWord.includes(letter)) {
        console.log("yes");
        newShifr = ""
        let lettersAmount = 0
        for (let i = 0; i < secretWord.length; i = i + 1) {
            if (letters.includes(secretWord[i])) {
                lettersAmount ++
                if (lettersAmount == secretWord.length) {
                    h1.innerHTML = translated[curLang]["winPhrase"]
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
            h1.innerHTML = translated [curLang]["losePhrase"]+secretWord

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
    singleMode = false
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
    singleMode = true
}


modal.onclick = function(event) {
    event.preventDefault()
    modal.style.opacity = 0
    modal.style.pointerEvents = "none"
}

modal.children[0].onclick = function(event) {
    event.stopPropagation()
}



function start(){
    podskazka.innerHTML = translated[curLang]["rules"]
    letters = []
    h1.innerHTML = curLang =="rus"? "виселица": curLang == "eng"? "hangman": "vjesala"
    playerInput.value = ""
    text1.innerHTML = "_".repeat(secretWord.length)
    img.src = "hangman"+0+".png"
    imgnumber = 0
    checkButton.disabled = false
    checkButton.style.pointerEvents = "auto"
    checkButton.style.opacity = 1
}


newGame.onclick = function (event) {
    event.preventDefault()
    if (singleMode) {
        secretWord =  curWords[Math.floor(Math.random() * curWords.length)]
        start()
    } 
    else {
    wordModal.style.opacity = 1
    wordModal.style.pointerEvents = "auto"
    wordInput.value = ""
    }
}







