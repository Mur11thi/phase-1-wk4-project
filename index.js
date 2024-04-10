document.addEventListener("DOMContentLoaded",()=>{

const themeChanger = document.getElementById("themechanger")
const  newQuote = document.getElementById("newquote")
const body = document.querySelector("body") 
  
newQuote.addEventListener("click",()=>{
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
.then(res=>res.json())
.then(quoteData =>{
 quoteData.forEach(quote=>{   
const quoteText = quoteData[0].quote
const authorText = quoteData[0].author
 const quotes = document.createElement("p")
  body.appendChild(quotes)
  quotes.textContent = `${quoteText} - ${authorText} `
 const  likeButton = document.createElement("button")
 likeButton.textContent = "Like"
 
 body.appendChild(likeButton)  

} ) })
.catch( error => {
    console.log ( `Error fetching quote , ${error}`)
})    
})
})