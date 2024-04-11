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
 likeButton.id = "likebutton"
 likeButton.classList.add("likebutton")
 body.appendChild(likeButton)
 const form = document.createElement("form")
 const firstInput =document.createElement("input")
  firstInput.id = "comments"
  firstInput.type = "text"
  firstInput.placeholder = "Add a comment"
  const secondInput=document.createElement("input")
  secondInput.id = "send"
  secondInput.type ="submit" 
    form.append(firstInput)
    form.append(secondInput)
    body.insertBefore(form,likeButton.nextSibling)  
  likeButton.addEventListener("click",()=>{
  likeButton.textContent = "Liked!" 
  likeButton.style.color = "red" 
  const likeMessage = document.createElement("p")
  likeMessage.textContent= "You liked this quote!"
  likeMessage.style.color = "white"
  body.insertBefore(likeMessage, likeButton.nextSibling)
  
 })

} ) })
.catch( error => {
    console.log ( `Error fetching quote , ${error}`)
})    
})
})