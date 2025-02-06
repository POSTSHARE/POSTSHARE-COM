// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const conversationList = document.getElementById('conversation-list');

// Toggle Sidebar
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Add Message Function
function addMessage(message, isUser) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.innerHTML = `<p>${message}</p>`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle User Input
function handleInput() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add to conversation history
  const listItem = document.createElement('li');
  listItem.textContent = message;
  conversationList.appendChild(listItem);

  // Add user message
  addMessage(message, true);

  // System response
  setTimeout(() => {
    addMessage("System: Neural processors are still being calibrated. Please wait for future updates.", false);
  }, 500);

  // Clear input
  userInput.value = '';
}

// Event Listeners
sendBtn.addEventListener('click', handleInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleInput();
});
