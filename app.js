// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menu-button');
const closeSidebar = document.getElementById('close-sidebar');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const conversationList = document.getElementById('conversation-list');

// Toggle Sidebar
menuButton.addEventListener('click', () => {
  sidebar.classList.add('active');
  document.querySelector('.container').classList.add('sidebar-active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
  document.querySelector('.container').classList.remove('sidebar-active');
});

// Add Message Function
function addMessage(message, isUser) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      ${isUser ? '👤' : '🤖'} 
      <span>${message}</span>
    </div>
  `;
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
    addMessage("🧠 Neural Processors Calibrating... ⚙️ System Upgrade in Progress... 🚀 Stay Tuned!", false);
  }, 800);

  // Clear input
  userInput.value = '';
}

// Event Listeners
sendBtn.addEventListener('click', handleInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleInput();
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
    sidebar.classList.remove('active');
    document.querySelector('.container').classList.remove('sidebar-active');
  }
});
