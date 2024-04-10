document.addEventListener("DOMContentLoaded",()=>{
const likeButton = document.getElementById("likebutton")
const themeChanger = document.getElementById("themechanger")
const  newQuote = document.getElementById("newquote")
const body = document.querySelector("body") 
  
newQuote.addEventListener("click",()=>{
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
.then(res=>res.json())
.then(quoteData =>{
const quoteText = quoteData[0].quote
const authorText = quoteData[0].author
 const quotes = document.createElement("p")
  body.appendChild(quotes)
  quotes.textContent = `${quoteText} - ${authorText} ` 
//   forEach(quoteData{
    
//   })
} )
.catch( error => {
    console.log ( `Error fetching quote , ${error}`)
})    
})
})