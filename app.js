/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #1a1a1a;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.chat-container {
  width: 400px;
  background-color: #2a2a2a;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.chat-header {
  background-color: #333;
  padding: 15px;
  text-align: center;
}

.chat-header h1 {
  font-size: 24px;
  margin-bottom: 5px;
}

.chat-header p {
  font-size: 14px;
  color: #ccc;
}

.chat-box {
  height: 300px;
  padding: 15px;
  overflow-y: auto;
  border-bottom: 1px solid #444;
}

.chat-input {
  display: flex;
  padding: 10px;
  background-color: #333;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
  margin-right: 10px;
}

.chat-input button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #0056b3;
}

/* Chat Message Styling */
.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  max-width: 80%;
}

.user-message {
  background-color: #007bff;
  color: #fff;
  align-self: flex-end;
}

.bot-message {
  background-color: #444;
  color: #fff;
  align-self: flex-start;
}
