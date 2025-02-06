const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const thinkingIndicator = document.getElementById('thinking');

// Replace with your OpenAI API key
const OPENAI_API_KEY = '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';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    userInput.value = '';
    showThinking();

    try {
        const response = await getAIResponse(message);
        addMessage(response, 'bot');
    } catch (error) {
        console.error('Error:', error);
        addMessage("Sorry, I couldn't process your request. Please try again.", 'bot');
    } finally {
        hideThinking();
    }
}

async function getAIResponse(query) {
    const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-4', // or 'gpt-3.5-turbo'
            messages: [{ role: 'user', content: query }],
            max_tokens: 500
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showThinking() {
    thinkingIndicator.style.display = 'flex';
}

function hideThinking() {
    thinkingIndicator.style.display = 'none';
}

// Enter key support
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
