
// main code

let quotes = []
let quote

// onload 
 
const run = () => {

    
    // load data

    fetch('https://animetab.herokuapp.com/quotes')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.animes)
         for(let i in data.animes) {
            quotes.push(data.animes[i])
        }
        num = Math.floor(Math.random() * data.animes.length)
        quote = quotes[num]

        var list = [];
        for (var i = 0; i < quotes.length; i++) {
            var img = new Image();
            list.push(img);
            img.src = quotes[i].logo;
            console.log("loaded")
        }
        console.log(list)

        // background

        let body = document.querySelector('body')

        body.style.backgroundColor = quote.color
        body.style.color = "white"
        let r = parseInt(quote.color.slice(1,3),16),
            g = parseInt(quote.color.slice(3,5),16),
            b = parseInt(quote.color.slice(5,7),16)
        
        let rgb = "rgb(" + (r-16) + ", " + (g-9) + ", " + (b+4) + ")"

        // display logo

        let logo = document.querySelector('.header')
        let image = document.createElement('img')
        let dif
        image.src = quote.logo
        image.onload = function() {
        if(image.width <= 400) {
            dif = 2.5
            image.style.top = '30px'
        }
        else if(image.width > 400 && image.width <= 700) {
            dif = 3.25
            image.style.top = `37px`
        }
        else if(image.width >700 && image.width <= 1000) {
            dif = 4
            image.style.top = `44px`
        }
        else if(image.width > 1000 && image.width < 1200) {
            dif = 6
            image.style.top = `50px`
        }
        else {
            dif = 8
            image.style.top = `60px`
        }
        image.height = image.height/(dif)
        image.width = image.width/(dif)
        
            
        logo.appendChild(image)    
    }
        // display quote

        let title = document.querySelector('.title')
        head = document.createElement('p')
        head.innerHTML =  quote.quote
        title.appendChild(head)

        // display author

        let author = document.querySelector('.author')
        head = document.createElement('p')
        head.innerHTML = "- " + quote.author
        author.appendChild(head)

        // display button
        let button = document.querySelector('.button')
        head = document.createElement('button')
        head.innerHTML = "Post your own!"
        button.addEventListener('click', () => {
            window.open("../layout/add.html",'_blank')
        })
        
        head.style.backgroundColor = rgb
        
        button.appendChild(head)
    })

}


run()

