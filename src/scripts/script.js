
// colors to be used 

let naruto = "#F6B93B"
let fma = "#E55039"
let opm = "#F5F5F5"
let mha = "#4A69BD"

// logos to be loaded
 
let naruto_logo = "../logos/Naruto.png"
let fma_logo = "../logos/FMA.png"
let opm_logo = "../logos/OPM.png"
let mha_logo = "../logos/MHA.png"

// main code

let quotes = []
let quote



// onload 

window.onload = () => {
    console.log("wohoo")
    let button = document.querySelector('button')

    // post to db

    // button.addEventListener("click", () => {
    //     document.querySelector('.quote').style.display = "none"
    //     document.querySelector('.add').style.display = "block"
    //     button.innerHTML = "Post!"
    // })

}
 
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

        // background

        let body = document.querySelector('body')

        switch(quote.anime) {

            case "Naruto" :
            body.style.backgroundColor = naruto
            body.style.color = "white"
            break;

            case "MHA" :
            body.style.backgroundColor = mha
            body.style.color = "white"
            break;

            case "OPM" :
            body.style.backgroundColor = opm
            body.style.color = "#5D5A5A"
            break;

            case "FMA" :
            body.style.backgroundColor = fma
            body.style.color = "white"
            break;
        }

        // display logo

        let logo = document.querySelector('.header')
        let image = new Image()

        switch(quote.anime) {
            
            case "Naruto" :
            image.src = naruto_logo
            image.height = image.height/2.5
            image.width = image.width/2.5
            image.style.top = "30px"
            break;

            case "MHA" :
            image.src = mha_logo
            image.height = image.height/3
            image.width = image.width/3
            image.style.top = "37px"
            break;

            case "OPM" :
            image.src = opm_logo
            image.height = image.height/8
            image.width = image.width/8
            image.style.top = "60px"
            break;

            case "FMA" :
            image.src = fma_logo
            image.height = image.height/3
            image.width = image.width/3
            image.style.top = "44px"
            break;
        }
            
        logo.appendChild(image)    
        
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
        switch(quote.anime) {
            case "Naruto" :
            head.style.backgroundColor = "#E6B03F"
            break;

            case "FMA" :
            head.style.backgroundColor = "#CB4733"
            break;

            case "OPM" :
            head.style.backgroundColor = "#E1E1E1"
            break;

            case "MHA" :
            head.style.backgroundColor = "#385195"
            break;
        }
        button.appendChild(head)
    })

}

// cache images 

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        list.push(img);
        img.src = array[i];
    }
    console.log(list)
}
(preloadImages([naruto_logo, mha_logo, opm_logo, fma_logo]))

run()

