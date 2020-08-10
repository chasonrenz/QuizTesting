const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContatinerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContatinerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Do you love Chason?',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false }
        ]
    },
    {
        question: 'Who does Tito like most?',
        answers: [
            { text: 'Timmy', correct: true },
            { text: 'Chason', correct: true },
            { text: 'Landon', correct: true },
            { text: 'Rebecca', correct: true }
        ]
    },

    {
        question: 'What is Chasons favorite ice cream?',
        answers: [
            { text: 'Cum', correct: false },
            { text: 'Mango', correct: false },
            { text: 'Mint Chocolate Chip', correct: true },
            { text: 'Chocolate chip cookie dough', correct: false }
        ]
    },
    {
        question: 'If you were trapped on an abandoned island, who would it be with?',
        answers: [
            { text: 'Lindsay Lohan', correct: false },
            { text: 'Bethenny Frankel', correct: true },
            { text: 'Landon again (should pick him)', correct: false },
            { text: 'Tom Cruise in ~Cocktail~', correct: false }
        ]
    },
    {
        question: 'If you could patent any smell in the world, what would it be?',
        answers: [
            { text: 'Stephen Hawkings used jockstrap', correct: false },
            { text: 'Ear de Tito', correct: true },
            { text: 'A musty twink hole', correct: false },
            { text: 'Invictus by Paco Rabanne', correct: false }
        ]
    },
    {
        question: 'You dont get upgraded on the flight, what is your next move?',
        answers: [
            { text: 'Nothing, youre on a Spirit flight to Miami, mid breakdown', correct: false },
            { text: 'Yell for Irene, she will beat up the pilot', correct: false },
            { text: 'Talk shit about flying United to Martha', correct: true },
            { text: 'Tito the service dog will handle this', correct: false }
        ]
    },
]