const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const thinkingIndicator = document.getElementById('thinking-indicator');

const knowledgeBase = {
    "hello": "Hey there! I'm Felix, your AI assistant. How can I help?",
    "hi": "Hello! What can I do for you today?",
    "how are you?": "I'm a machine, but thanks for asking! Ready to assist you.",
    "what is your name?": "I'm Felix! Your friendly AI companion.",
    "bye": "Goodbye! Feel free to reach out whenever you need help!"
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        showThinkingIndicator();
        
        setTimeout(() => {
            const botMessage = getBotResponse(message);
            addMessage(botMessage, 'bot');
            hideThinkingIndicator();
        }, 1500); // Simulate "thinking" time
    }
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showThinkingIndicator() {
    thinkingIndicator.style.display = 'block';
}

function hideThinkingIndicator() {
    thinkingIndicator.style.display = 'none';
}

function getBotResponse(message) {
    // Check if the message is in the knowledge base, if not, give a generic response.
    const lowerMessage = message.toLowerCase();
    if (knowledgeBase[lowerMessage]) {
        return knowledgeBase[lowerMessage];
    } else {
        // Simulating a search-like behavior (not actual search).
        return "Hmm, let me think... I don't know that. Can you ask something else?";
    }
}
