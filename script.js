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
        return "¡Hola! ¿Cómo puedo ayudarte hoy con tu pedido de comida?";
    } else if (input.includes("quiero hacer un pedido")) {
        return "¡Genial! ¿Qué te gustaría pedir?";
    } else if (input.includes("menu") || input.includes("opciones")) {
        return "Tenemos pizza, hamburguesas, sushi y ensaladas. ¿Qué te gustaría pedir?";
    } else if (input.includes("pizza")) {
        return "Perfecto, ¿qué tipo de pizza te gustaría? Tenemos margarita, pepperoni y vegetariana.";
    } else if (input.includes("hamburguesa")) {
        return "¡Excelente elección! ¿Te gustaría una hamburguesa clásica, con queso, o doble?";
    } else if (input.includes("sushi")) {
        return "Tenemos varios tipos de sushi: maki, nigiri y sashimi. ¿Cuál te gustaría?";
    } else if (input.includes("ensalada")) {
        return "Ofrecemos ensaladas César, griega y de atún. ¿Cuál te gustaría?";
    } else if (input.includes("gracias")) {
        return "¡De nada! Estoy aquí para ayudarte con cualquier cosa que necesites.";
    } else if (input.includes("adiós")) {
        return "¡Adiós! Que tengas un buen día.";
    } else {
        return "Lo siento, no entiendo tu mensaje. ¿Podrías repetirlo?";
    }
}


