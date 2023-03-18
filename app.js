const inputBox = document.querySelector('#userInput');
const submitBtn = document.querySelector('#submitBtn');
const greetingDisplay = document.querySelector('#greeting');
console.log(greetingDisplay);

submitBtn.addEventListener('click', ()=> {
    let userName = inputBox.value;
    console.log(userName);
    inputBox.value='';
    
    let greetingMessage = `Hello, ${userName}!`;
    greetingDisplay.innerHTML = greetingMessage;
});