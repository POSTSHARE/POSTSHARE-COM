// Sample script for interacting with the chatbot
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        // Display user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user-message');
        userMessageDiv.textContent = userInput;
        document.getElementById('chat-box').appendChild(userMessageDiv);
        
        // Clear input field
        document.getElementById('user-input').value = '';

        // Display bot response (for now, it's a simple echo)
        const botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('message', 'bot-message');
        botResponseDiv.textContent = `You said: ${userInput}`;
        document.getElementById('chat-box').appendChild(botResponseDiv);
        
        // Scroll to bottom
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
});
