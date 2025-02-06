const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const thinkingIndicator = document.getElementById('thinking-indicator');

async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        showThinkingIndicator();
        
        try {
            const botMessage = await getBotResponse(message);
            addMessage(botMessage, 'bot');
        } catch (error) {
            addMessage("Sorry, I couldn't process your request. Please try again.", 'bot');
        } finally {
            hideThinkingIndicator();
        }
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

async function getBotResponse(message) {
    // Replace with your OpenAI API key
    const apiKey = 'your-openai-api-key';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
