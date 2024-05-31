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

        // Respuesta simple del chatbot
        let botMessage = document.createElement("div");
        botMessage.className = "botMessage";
        botMessage.textContent = "Echo: " + userInput;
        chatbox.appendChild(botMessage);

        // Mantén el scroll en el fondo
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
