console.log('Hello!');
const button = document.getElementById('Welcome Button')
const messageParagraph = document.getElementById('message');

function displayMessage() 
{
  {
  messageParagraph.textContent = "Welcome to my website! I'm so happy you're here!";
  }
  
  button.addEventListener('click', displayMessage);

  function toggleDarkMode() 
  {
    document.body.classList.toggle("dark-mode");po[]
  }
 
}




