// Function to handle the sending of user messages
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

        // Call AI function to get response
        setTimeout(function() {
            getAIResponse(userInput);
        }, 500); // Adding a slight delay to simulate processing
    }
});

// Function to simulate AI response
function getAIResponse(userInput) {
    const chatBox = document.getElementById('chat-box');

    let botResponse = "Sorry, I can't understand that.";

    // Simple logic to handle some basic queries
    if (userInput.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        botResponse = "I'm doing great! How about you?";
    }

    // Display bot response
    const botResponseDiv = document.createElement('div');
    botResponseDiv.classList.add('message', 'bot-message');
    botResponseDiv.textContent = botResponse;
    chatBox.appendChild(botResponseDiv);

    // Scroll to bottom to show latest messages
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Optional: Add functionality to press Enter key for sending messages
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});
