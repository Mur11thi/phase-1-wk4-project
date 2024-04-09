document.addEventListener("DOMContentLoaded",()=>{
const likeButton = document.getElementById("likebutton")
const themeChanger = document.getElementById("themechanger")
const  newQuote = document.getElementById("new quote")
  
newQuote.addEventListener("click",()=>{
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
.then(res=>res.json)    
})



})