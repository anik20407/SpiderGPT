const data = {
    "তোমার নাম কি": "আমি Spider GPT, তোমার বন্ধু।",
    "বাংলা বোঝো?": "হ্যাঁ, আমি বাংলা বুঝি।",
    "What is your name?": "My name is Spider GPT!",
    "How are you?": "I am fine, thank you!"
};

function ask() {
    const q = document.getElementById('question').value.trim();
    const ans = data[q] || "দুঃখিত, এই প্রশ্নের উত্তর জানা নেই।";
    
    document.getElementById('chatbox').innerHTML += `<p><b>তুমি:</b> ${q}</p>`;
    document.getElementById('chatbox').innerHTML += `<p><b>Spider GPT:</b> ${ans}</p>`;
    document.getElementById('question').value = '';
}
