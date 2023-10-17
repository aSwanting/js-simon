let newWrapper
let newDiv
let newButton

newWrapper = document.createElement("div")
document.body.append(newWrapper)
newWrapper.className = "flex-wrapper"



newButton = document.createElement("button")
newWrapper.append(newButton)
newButton.className = "button"
newButton.id = "generate-numbers"
newButton.innerHTML = "Generate Numbers"

newButton = document.createElement("button")
newWrapper.append(newButton)
newButton.className = "button"
newButton.id = "start-game"
newButton.innerHTML = "Start Game"

newWrapper = document.createElement("div")
document.body.append(newWrapper)
newWrapper.className = "flex-wrapper"

document.getElementById("generate-numbers").addEventListener("click", () => {

    newWrapper.innerHTML = ""

    randomNumbers = randArray(1, 100, 5)


    for (i = 0; i < randomNumbers.length; i++) {
        newDiv = document.createElement("div")
        newWrapper.append(newDiv)
        newDiv.className = "random-numbers"
        newDiv.innerHTML = randomNumbers[i]
    }

})

document.getElementById("start-game").addEventListener("click", () => {

    newWrapper.innerHTML = ""



})


// setTimeout(() => {

//     newWrapper = document.createElement("div")
//     document.body.append(newWrapper)
//     newWrapper.className = "flex-wrapper"

//     newDiv = document.createElement("div")
//     newWrapper.append(newDiv)
//     newDiv.className = "random-numbers"

// }, 1000);



/* ---------------------------------- FUNCTIONS ---------------------------------- */


// Random Array Function
function randArray(rangeMin, rangeMax, length) {
    const randArrayOutput = []

    while (randArrayOutput.length < length) {
        let n = rand(rangeMin, rangeMax)

        if (!randArrayOutput.includes(n)) {
            randArrayOutput.push(n)
        }
    }

    return randArrayOutput
}


// Random Number Function
function rand(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}