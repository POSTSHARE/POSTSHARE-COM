const OPENAI_API_KEY = "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";

async function askAI() {
    let userInput = document.getElementById("userInput").value;
    if (!userInput.trim()) return; // Don't submit empty inputs

    let chatLog = document.getElementById("chatLog");
    chatLog.innerHTML += `<div><b>You:</b> ${userInput}</div>`;

    // Call OpenAI GPT-4 for AI response
    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userInput }]
        })
    });

    let data = await response.json();
    let aiResponse = data.choices[0].message.content;
    chatLog.innerHTML += `<div><b>AI:</b> ${aiResponse}</div>`;
    document.getElementById("userInput").value = '';  // Clear input field
    chatLog.scrollTop = chatLog.scrollHeight;  // Auto scroll to the latest response
}

async function searchWithAI() {
    let query = document.getElementById("searchQuery").value;
    if (!query.trim()) return;

    // Send the search query to OpenAI GPT-4
    let aiResponse = await fetchOpenAIWebSearch(query);

    // Display the response as search results
    let resultList = document.getElementById("searchResults");
    resultList.innerHTML = "";  // Clear previous results
    let li = document.createElement("li");
    li.innerHTML = aiResponse;
    resultList.appendChild(li);

    let chatLog = document.getElementById("chatLog");
    chatLog.innerHTML += `<div><b>AI (Search Result):</b> ${aiResponse}</div>`;
}

async function fetchOpenAIWebSearch(query) {
    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant that provides search results based on the web search query." },
                { role: "user", content: `Search query: ${query}` }
            ]
        })
    });

    let data = await response.json();
    return data.choices[0].message.content;
}
