const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const typingIndicator = document.createElement('div');
typingIndicator.classList.add('typing-indicator');
typingIndicator.innerText = "AI is typing...";
chatBox.appendChild(typingIndicator);

const botResponses = {
    "hello": "Hey there! How can I help you today?",
    "hi": "Hello! How can I assist you?",
    "how are you?": "I'm an AI, so I don't feel emotions, but I'm ready to assist!",
    "what is your name?": "I am your friendly AI chatbot.",
    "bye": "Goodbye! Come back soon!"
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        showTypingIndicator();
        setTimeout(() => {
            const botMessage = getBotResponse(message);
            addMessage(botMessage, 'bot');
            hideTypingIndicator();
        }, 1500);
    }
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    typingIndicator.classList.add('show');
}

function hideTypingIndicator() {
    typingIndicator.classList.remove('show');
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    return botResponses[lowerMessage] || "Sorry, I don't understand that.";
}
