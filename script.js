function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() !== "") {
        // Añade el mensaje del usuario al chatbox
        let userMessage = document.createElement("div");
        userMessage.className = "userMessage";
        userMessage.textContent = userInput;
        chatbox.appendChild(userMessage);

        // Limpia el campo de entrada
        document.getElementById("userInput").value = "";

        // Genera una respuesta del chatbot
        let botMessage = document.createElement("div");
        botMessage.className = "botMessage";
        botMessage.textContent = getBotResponse(userInput);
        chatbox.appendChild(botMessage);

        // Mantén el scroll en el fondo
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hola")) {
        return "¡Hola! ¿Cómo estás?";
    } else if (input.includes("cómo estás")) {
        return "Estoy bien, gracias por preguntar. ¿Y tú?";
    } else if (input.includes("adiós")) {
        return "¡Adiós! Que tengas un buen día.";
    } else {
        return "Lo siento, no entiendo tu mensaje.";
    }
}
