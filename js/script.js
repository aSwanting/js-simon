
// Variables
const buttonWrapper = createDOMobject("div", document.body, "flex-wrapper", "button-wrapper", "")
const numberButton = createDOMobject("button", buttonWrapper, "button", "generate-numbers", "Generate Numbers")
const startButton = createDOMobject("button", buttonWrapper, "button", "start-game", "Start Game")
let randomNumbers


// onClick clears html if needed, prints random numbers
numberButton.addEventListener("click", () => {

    clearHTMLnumbers()
    clearHTMLpostGame()
    displayRandomNumbers()

})


// onClick hides numbers, after delay prompts user input
startButton.addEventListener("click", () => {

    clearHTMLpostGame()

    const numberedCircles = document.querySelectorAll(".random-numbers")

    if (numberedCircles.length) {

        numberedCircles.forEach(circle => {
            circle.innerHTML = ""
        });

        setTimeout(() => {

            const userNumbers = getUserNumbers()
            getUserScore(userNumbers)

        }, 30 * 1000);

    }

})



/* ---------------------------------- FUNCTIONS ---------------------------------- */


// Clear Randomly Generate Numbers
function clearHTMLnumbers() {

    const numberWrapper = document.getElementById("number-wrapper")
    if (numberWrapper) { numberWrapper.remove() }

}


// Remove Score and Info
function clearHTMLpostGame() {

    const finalScore = document.getElementById("final-score")
    const originalNumbers = document.getElementById("original-numbers")
    if (finalScore) { finalScore.remove() }
    if (originalNumbers) { originalNumbers.remove() }

}


// Create divs, generate and print random numbers
function displayRandomNumbers() {

    const numberWrapper = createDOMobject("div", document.body, "flex-wrapper", "number-wrapper", "")

    randomNumbers = randArray(1, 100, 5)
    console.log(randomNumbers)

    for (i = 0; i < randomNumbers.length; i++) {
        createDOMobject("div", numberWrapper, "random-numbers", i, randomNumbers[i])
    }

    return randomNumbers
}


// User inputs numbers, store in array
function getUserNumbers() {

    const userNumbers = []
    let n = 0

    while (userNumbers.length < 5) {
        n++
        userNumbers.push(parseInt(prompt("What numbers where on screen? " + n + "/" + i)))
    }

    return userNumbers
}


// Get and Print user Score
function getUserScore(array) {

    const numberCircles = document.querySelectorAll(".random-numbers")
    const checkedNumbers = []

    array.forEach((number, i) => {

        number ? numberCircles[i].innerHTML = number : numberCircles[i].innerHTML = ""

        if (randomNumbers.includes(number) && !checkedNumbers.includes(number)) {

            numberCircles[i].classList.remove("incorrect")
            numberCircles[i].classList.add("correct")
            checkedNumbers.push(number)
            console.log(number, "yes! score is = " + checkedNumbers.length)

        } else {
            numberCircles[i].classList.remove("correct")
            numberCircles[i].classList.add("incorrect")
            console.log(number, "no! score is = " + checkedNumbers.length)
        }

    });

    createDOMobject("h1", document.body, "final-score", "final-score", "You remembered " + checkedNumbers.length + " number(s)")
    createDOMobject("h3", document.body, "original-numbers", "original-numbers", "(" + randomNumbers + ")")
}


// Function to create DOM element
function createDOMobject(type, location, className, id, inner) {

    const DOMobject = document.createElement(type)
    location.append(DOMobject)
    DOMobject.className = className
    DOMobject.id = id
    DOMobject.innerHTML = inner
    return DOMobject

}


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