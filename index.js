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
 const form = document.createElement("form")//=>Variable that creates a form element
 const firstInput =document.createElement("input")//Variable that creates input element inside the newly created 
                                                  // form element.
  firstInput.id = "comments"//=>Sets the firstInput id to "comments".
  firstInput.type = "text"  //=>Sets the firstInput type to "text" .
  firstInput.placeholder = "Add a comment" //=>Sets the firstInput placeholder to "Add a comment".
  const secondInput=document.createElement("input")//=>secondInput variable that creates the input element for the
                                            //for the submit button that comes along with the comments search bar  
  secondInput.id = "send"//=> Assigns the secondInput's Id to "send"                         
  secondInput.type ="submit"//=>Sets the secondInput's type to "submit" . 
    form.append(firstInput) //=>Appends firstInput to the form element
    form.append(secondInput) //Appends secondInput to the form element
    body.insertBefore(form,likeButton.nextSibling)//=>Inserts the form element before the likeButtons' next sibling
                                                  // and just after the likeButton. 
    
    form.addEventListener("submit",(e)=>{ /* is an event listener that listens to the submit event , and prevents reloading of the  webpage by preventing its default behaviour .A variable  is assigned to the value typed in to the comment box.For every submit event, a "p"  element is created where the comment will be stored in.*/
        e.preventDefault()
        const commentMessage = firstInput.value
      const commentDisplay =document.createElement("p")
      commentDisplay.textContent = commentMessage
      body.append(commentMessage)
      

    }) 
     
  likeButton.addEventListener("click",()=>{ /* Is an event listener that listens for the click event and then performs a function that sets the likeButton's textcontent to "Liked!" and the likeButton's color to red.
  A variable that creates a "p" element where the likeMessage will be stored.The likeMessage's  textContent is set to "You liked this quote!" and its style and color is white.The likeMessage is then appended before the likeButtons' next sibling and just after the likeButton. */
  likeButton.textContent = "Liked!" 
  likeButton.style.color = "red" 
  const likeMessage = document.createElement("p")
  likeMessage.textContent= "You liked this quote!"
  likeMessage.style.color = "white"
  body.insertBefore(likeMessage, likeButton.nextSibling)
  
 })

} ) })
.catch( error => {                                   /* catches the error if the promise is rejected and sends
                                                       a message to the console.*/
    console.log ( `Error fetching quote , ${error}`)   
})    
})
})
