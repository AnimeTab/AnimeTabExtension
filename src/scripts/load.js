
let question = document.querySelector('.question')
let counter = 0
let value = ''

// POST variables

let anime = ''
let character = ''
let quote = ''
let email = ''

// questions to be displayed

let questions = [
    "Which anime do you want to see?",
    "Enter those inspiring lines!",
    "Who said these?",
    "Enter your email"
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

async function post(color, logo, email){
    const send = await fetch(`http://127.0.0.1:5000/quote/${quote}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            anime: anime,
            author: character,
            color: color,
            logo: logo,
            email: email
        })
    })
    console.log("bye")
}


function get(){
    quotes = []
    fetch('https://animetab.herokuapp.com/quotes')
    .then((resp) => resp.json())
    .then((data) => {
        for(let i in data.animes) {
            if(data.animes[i].anime.toLowerCase() == anime.toLowerCase().trim()) {
                let color = data.animes[i].color
                let logo = data.animes[i].logo
                quotes.push(color)
                quotes.push(logo)
                console.log(quotes)
                break;
             }
             else {
                 quotes.push("color")
                 quotes.push("logo")
             }
        }
        fetch(`https://animetab.herokuapp.com/quote/${quote}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            anime: anime,
            author: character,
            color: quotes[0],
            logo: quotes[1],
            email: email
        })
    })
    })
}

function end() {
    // let stuff = []
    get();
    // POST to temporary db

    // setTimeout(post(stuff[0],stuff[1],email), 3000)

    let container = document.querySelector('.container')
        container.removeChild(input)
        container.removeChild(question)
        let message = document.createElement('p')
        message.className = "submission"
        message.innerHTML = "Thank You! We will review your submission and add it ASAP!"
        container.appendChild(message)
}

let rightIcon = document.querySelector('.right')

let leftIcon = document.querySelector('.left')

let button = document.querySelector('button')

rightIcon.addEventListener('click', ()=>{

    if(counter <= 3) {
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
            case 3:
            email = value
            button.style.visibility  = "visible"
            rightIcon.style.visibility = "hidden"
            leftIcon.style.visibility = "hidden"
            break
        }
        console.log({anime, quote, character, counter})
    }

    if(counter < 3 && counter >= 0) {
        counter++
        changequestion()
    }
    
})

leftIcon.addEventListener('click', ()=>{
    
    if(counter <= 3) {
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
            case 3:
            email = value
            button.style.visibility  = "visible"
            break
        }
        console.log({anime, quote, character, counter})
    }

    if(counter <= 3 && counter >0)
        counter--
    changequestion()
})

button.addEventListener('click', (e)=> {
    e.preventDefault()
    end()
})