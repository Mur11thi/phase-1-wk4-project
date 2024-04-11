//Allows the comment to load fully.
document.addEventListener("DOMContentLoaded",()=>{
//Variables that select the various elements 
const themeChanger = document.getElementById("themechanger")
const  newQuote = document.getElementById("newquote")
const body = document.querySelector("body") 

  
newQuote.addEventListener("click",()=>{ //=>Event listener that listens for a click and then does a fetch request.
fetch("https://api.breakingbadquotes.xyz/v1/quotes") //=>fetches Data from the API
.then(res=>res.json()) //=>Checks for the first promise from the fetch request after converting fom json.
.then(quoteData =>{ //=>Checks for the json promise 
 quoteData.forEach(quote=>{  //=>forEach iterates the data from the API and tells it to create a new variable for 
                            // the datas text and quotes and for each one of them it generates a like button 
                            // a comment bar and a send button.

const quoteText = quoteData[0].quote //=>Assigns the quotes specifically to the quoteText variable
const authorText = quoteData[0].author //=>Assigns the actual author specifically to the authorText variable. 
 const quotes = document.createElement("p") //=>A variable that creates  element p
  body.appendChild(quotes)                //=>Appends the p element in the body where the quotes and their author are
                                         // appended as well
  quotes.textContent = `${quoteText} - ${authorText} ` //=>Sets the text content of the newly appended element
                                                      // to the quote and their respective authors.            
 const  likeButton = document.createElement("button") //=>Variable that creates the button element for each quote
                                                     // that is created.
 likeButton.textContent = "Like" //=>Sets the likeButton's textcontent to "Like" 
 likeButton.id = "likebutton"    //=>Sets the likeButton'S id to "likebutton" 
 likeButton.classList.add("likebutton")//=>Adds the likeButton to the classList of "likeButton" where it can 
                                       //receive styling from the external css file.  
 body.appendChild(likeButton)          //=>Appends the likeButton to the body just below the quotes generated. 

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
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const commentMessage = firstInput.value
      const commentDisplay =document.createElement("p")
      commentDisplay.textContent = commentMessages
      body.append(commentMessage)
      

    }) 
     
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