// resposta corretas
const answerResult = ['A', 'C', 'A', 'C']

const form =  document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

form.addEventListener('submit', event => {
    event.preventDefault()
    
    // resposta usuario
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    
    let score = 0

    let counter = 0
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === answerResult[index]){
            score += 25
        }
    })


    finalResult.querySelector('span').textContent = `${score}%`
    finalResult.classList.remove('d-none')
    
    const timer = setInterval(() => {
        if(counter === score){
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter}%`
        counter ++
    }, 10)
   

    scrollTo(0, 0)
})