const prevBtn= document.getElementById("prev")
const nextBtn= document.getElementById("next")
const randomBtn= document.getElementById("random")
const foodImg = document.getElementById("food-img")

const titles = document.getElementById("title")
const subtitles = document.getElementById("subtitle")
const titleMinis = document.getElementById("title-mini")
const subtitleMinis = document.getElementById("subtitle-mini")
let input = 0
let cardNumber = 0
function randomPage(){
    let randomNumber = Math.floor(Math.random()*card.length)
    titles.textContent = card[randomNumber].title 
    titleMinis.textContent = card[randomNumber].titleMini
    subtitleMinis.textContent = card[randomNumber].subtitleMini
    foodImg.src = card[randomNumber].img
    currentCard(randomNumber)
    
}
function currentCard(input){
    titles.textContent = card[input].title 
    titleMinis.textContent = card[input].titleMini
    subtitleMinis.textContent = card[input].subtitleMini
    foodImg.src = card[input].img
    cardNumber = input
    return cardNumber
    
}


let card = [
    {id:1,
    title: `Food item1`,
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque perspiciatis culpa odio nemo eligendi!`,
    img: `/img-1.png`,
    titleMini:`Hotel Name1 `,
    subtitleMini:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi fuga numquam saepe, qui nam vel error maiores hic quidem nesciunt corpori.`
    },
    {id:2,
    title: `Food item2`,
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque perspiciatis culpa odio nemo eligendi!`,
    img: `/img-2.png`,
    titleMini:`Hotel Name2`,
    subtitleMini:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi fuga numquam saepe, qui nam vel error maiores hic quidem nesciunt corporis veritatis voluptatem, exercitationem fugiat .`
    },
    {id:3,
    title: `Food item3`,
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque perspiciatis culpa odio nemo eligendi!`,
    img: `/img-3.jpg`,
    titleMini:`Hotel Name 3`,
    subtitleMini:`uam saepe, qui nam vel error maiores hic quidem nesciunt corporis veritatis voluptatem, exercitationem fugiat itaque consectetur assumenda quo.`
    },
    {id:4,
    title: `Food item4`,
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque perspiciatis culpa odio nemo eligendi!`,
    img: `/img-4.jpg`,
    titleMini:`Hotel Name 4`,
    subtitleMini:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi fuga numquam saepe, qui nam vel error maiores hic quidem nesciunt corporis veritatis voluptatem, exercitationem fugiat itaque consectetur assumenda quo.`
    }

]

document.addEventListener("DOMContentLoaded",()=>{
    randomPage()

})

randomBtn.addEventListener("click",()=>{
   randomPage()
})

prevBtn.addEventListener("click",()=>{

    cardNumber--
    console.log(cardNumber)
    if(cardNumber===-1){
        cardNumber = 3
    }
   currentCard(cardNumber)
  
  
   
   
    
})
nextBtn.addEventListener("click",()=>{
    
    cardNumber++
    console.log(cardNumber)
    if(cardNumber===4){
        cardNumber = 0
    }
   currentCard(cardNumber)
  
    
})
