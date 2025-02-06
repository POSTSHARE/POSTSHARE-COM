const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the chat box
function addMessage(message, isUser) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

  const messageText = document.createElement('p');
  messageText.textContent = message;
  messageElement.appendChild(messageText);

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, true);
    userInput.value = ''; // Clear input field

    // Simulate bot response (replace this with an API call)
    setTimeout(() => {
      const botMessage = getBotResponse(userMessage);
      addMessage(botMessage, false);
    }, 500);
  }
}

// Function to generate bot responses
function getBotResponse(userMessage) {
  const responses = {
    "hello": "Greetings, human! I'm NeuraFlow AI from 2050. How can I assist you?",
    "how are you": "I'm functioning at optimal levels. How about you?",
    "what is your name": "I'm NeuraFlow AI, your futuristic assistant.",
    "default": "I'm sorry, I didn't understand that. Can you rephrase?"
  };

  const lowerCaseMessage = userMessage.toLowerCase();
  return responses[lowerCaseMessage] || responses["default"];
}

// Event listeners
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput();
});
