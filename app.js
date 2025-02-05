const chatlogs = document.getElementById("chatlogs");
const userInput = document.getElementById("user-input");

function sendMessage() {
    let userMessage = userInput.value.trim();
    if (userMessage !== "") {
        addMessage(userMessage, "user");
        userInput.value = "";
        getResponse(userMessage);
    }
}

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender);
    messageDiv.innerHTML = message;
    chatlogs.appendChild(messageDiv);
    chatlogs.scrollTop = chatlogs.scrollHeight; // Auto-scroll to the latest message
}

function getResponse(userMessage) {
    let botResponse = "";

    // Simple rule-based responses
    if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        botResponse = "Hello! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a bot, but I'm doing fine, thank you!";
    } else if (userMessage.toLowerCase().includes("what is your name")) {
        botResponse = "I am your friendly chatbot!";
    } else {
        botResponse = "Sorry, I didn't understand that. Can you ask something else?";
    }

    addMessage(botResponse, "bot");
}
