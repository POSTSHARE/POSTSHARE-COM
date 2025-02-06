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

        // Call AI function to get response from the backend
        setTimeout(function() {
            getAIResponse(userInput);
        }, 500); // Adding a slight delay to simulate processing
    }
});

// Function to get AI response from the backend
async function getAIResponse(userInput) {
    const chatBox = document.getElementById('chat-box');
    let botResponse = "Sorry, I couldn't understand that.";

    try {
        // Send the user input to the backend (Node.js server)
        const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: userInput })
        });

        const data = await response.json();
        botResponse = data.answer; // Get AI's response

    } catch (error) {
        botResponse = "Something went wrong, please try again!";
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
