function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoices()
    })
}

function description({ descriptionContent }) {
    return {
        description: descriptionContent
    }
}

function booleanQuestion({ descriptionContent }) {
    return {
        printQuestionChoices: () => {
            console.log('1. True')
            console.log('2. False')
        },
        ...description({ descriptionContent })
    }
}

function multipleChoiceQuestion({ descriptionContent, options }) {
    return {
        printQuestionChoices: () => {
            options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`)
            })
        },
        options,
        ...description({ descriptionContent })
    }
}

function textQuestion({ descriptionContent }) {
    return {
        printQuestionChoices: () => {
            console.log('Answer:__________')
        },
        ...description({ descriptionContent })
    }
}

const questions = [
    booleanQuestion({ descriptionContent: 'This video is useful' }),
    multipleChoiceQuestion({ descriptionContent: 'What is your favorite language?', options: ['CSS', 'HTML', 'JS', 'Python'] }),
    textQuestion({ descriptionContent: 'Describe your favorite JS feature' })
]

printQuiz(questions)

// Wrong
// For every new question type, you'll have to modify the function

// function printQuiz(questions) {
//     questions.forEach(question => {
//         console.log(question.description)
//         switch (question.type) {
//             case 'boolean':
//                 console.log('1. True')
//                 console.log('2. False')
//                 break
//             case 'multipleChoice':
//                 question.options.forEach((option, index) => {
//                     console.log(`${index + 1}. $${option}`)
//                 })
//                 break
//             case 'text':
//                 console.log('Answer:__________')
//                 break
//         }
//     })
// }

// const questions = [
//     {
//         type: 'boolean',
//         description: 'This video is useful'
//     },
//     {
//         type: 'multipleChoice',
//         description: 'What is your favorite language?',
//         options: ['CSS', 'HTML', 'JS', 'Python']
//     },
//     {
//         type: 'text',
//         description: 'Describe your favorite JS feature'
//     }
// ]