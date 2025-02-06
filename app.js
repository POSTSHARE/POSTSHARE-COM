const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the chat box
function addMessage(message, isUser) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, true);
    userInput.value = ''; // Clear input field

    // Simulate bot response (you can replace this with an API call)
    setTimeout(() => {
      const botMessage = getBotResponse(userMessage);
      addMessage(botMessage, false);
    }, 500);
  }
}

// Function to generate bot responses
function getBotResponse(userMessage) {
  const responses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bunch of code, but I'm functioning perfectly! How about you?",
    "what is your name": "I'm NeuraFlow AI, your intelligent assistant.",
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
