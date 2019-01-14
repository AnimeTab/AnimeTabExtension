
// const filesystem = require('level-filesystem')
// const fs = filesystem(db)
// const path = require("path")

// console.log(__dirname)
// const meta = path.join(__dirname,'/data/temp.json')
// console.log(meta)
// console.log(fs)

let question = document.querySelector('.question')
let counter = 0
let value = ''

// POST variables

let anime = ''
let character = ''
let quote = ''

// questions to be displayed

let questions = [
    "Which anime do you want to see?",
    "Enter those inspiring lines!",
    "Who said these?",
]

//initial render

let ques = document.createElement('p')
ques.innerHTML = questions[counter]
question.appendChild(ques)

let input = document.querySelector('.input')
let ins = document.createElement('input')

input.appendChild(ins)

function changequestion() { 
    question.removeChild(ques)
    ins.value = ''
    ques = document.createElement('p')
    ques.innerHTML = questions[counter]
    question.appendChild(ques)
}

const post = async() => {
    const send = await fetch(`http://127.0.0.1:8080/quote/${quote}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            anime: anime,
            author: character
        })
    })

}
function end() {
    

    // POST to temporary db
    post();
    
    // .then((data)=>{
    //     console.log('Request success: ', data)
    // })
    
    let container = document.querySelector('.container')
        container.removeChild(input)
        container.removeChild(question)
        let message = document.createElement('p')
        message.innerHTML = "Thank You! We will review your submission and add it ASAP!"
        container.appendChild(message)
}

let rightIcon = document.querySelector('.right')

let leftIcon = document.querySelector('.left')

let button = document.querySelector('button')

rightIcon.addEventListener('click', ()=>{

    if(counter <= 2) {
        value = ins.value
        switch (counter) {
            case 0: 
            anime = value
            break
            case 1:
            quote = value
            break
            case 2:
            character = value
            break
        }
        console.log({anime, quote, character, counter})
    }

    if(counter < 2 && counter >= 0) {
        counter++
        changequestion()
    }
    
})

leftIcon.addEventListener('click', ()=>{
    
    if(counter <= 2) {
        value = ins.value
        switch (counter+1) {
            case 0: 
            anime = value
            break
            case 1:
            quote = value
            break
            case 2:
            character = value
            break
        }
        console.log({anime, quote, character, counter})
    }

    if(counter <= 2 && counter >0)
        counter--
    changequestion()
})

button.addEventListener('click', (e)=> {
    e.preventDefault()
    end()
})