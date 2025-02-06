const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const conversationList = document.getElementById('conversation-list');

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

    // Add user message to old conversations
    const conversationItem = document.createElement('li');
    conversationItem.textContent = userMessage;
    conversationList.appendChild(conversationItem);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = "Sorry, I can’t generate messages right now. I’m still under development. Stay with me for future updates!";
      addMessage(botMessage, false);
    }, 500);
  }
}

// Event listeners
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserInput();
});
