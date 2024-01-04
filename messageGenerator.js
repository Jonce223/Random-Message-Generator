//Creating different Strings for each individual message
let message1 = "Hello world!";
let message2 = "How are you?";
let message3 = "Message Generator!";
let message4 = "Do You want to play the game?";
let message5 = "What's your name?";

//Creating array for all the messages
const messages = [message1, message2, message3, message4, message5];

for(let i = 0; i < messages.length; i++){
    console.log("The Message is: "+messages[Math.floor(Math.random()*5)] +' '+  messages[Math.floor(Math.random()*5)]);
    break;
}