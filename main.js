/* js/main.js */


/*
 FriendBot Main JavaScript Logic
 -------------------------------
 This script handles:
   - Sending and receiving messages
   - Evaluating simple math expressions
   - Searching the responseDataset for matching keywords
   - Handling user interactions (e.g., sending messages)
   - Chatbot customization (avatar and gender selection)
*/


// Define our dataset of responses
const responseDataset = [
   {
     keywords: ["hello", "hi", "hey"],
     response: "Hello there! How can I assist you today?"
   },
   {
     keywords: ["struggle", "difficult"],
     response:
       "I know tough days happen. Sometimes reflecting on what you've accomplished can help. What’s one small win you had recently?"
   }
 ];
  /**
  * Checks if the input is a simple math expression (numbers, basic operators, etc.)
  * @param {string} input - The user input string
  * @returns {boolean} True if the input appears to be a math expression
  */
 function isMathExpression(input) {
   return /^[0-9+\-*/().\s]+$/.test(input);
 }
  /**
  * Retrieves a bot response based on user input.
  * - Evaluates math expressions if detected.
  * - Searches the responseDataset for matching keywords.
  * - Offers a web search link if no match is found.
  * @param {string} input - The user input string
  * @returns {string} The chatbot's response
  */
 function getBotResponse(input) {
   const trimmedInput = input.trim();
   const lowerInput = trimmedInput.toLowerCase();
    // Check for math expression
   if (isMathExpression(trimmedInput)) {
     try {
       const result = eval(trimmedInput);
       return "The result is: " + result;
     } catch (e) {
       return "I couldn't compute that expression. Please check your math.";
     }
   }
    // Search for a matching response in our dataset
   for (let entry of responseDataset) {
     if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
       return entry.response;
     }
   }
    // Default fallback: offer a Google search link
   return `I don't have a pre-fed answer for that. <br>Would you like to search the web? <a href="https://www.google.com/search?q=${encodeURIComponent(
     trimmedInput
   )}" target="_blank">Search Google</a>`;
 }
  /**
  * Appends a message to the chat body.
  * @param {string} sender - "User" or "FriendBot"
  * @param {string} text - The message content
  */
 function appendMessage(sender, text) {
   const messageClass = sender === "User" ? "user-message" : "bot-message";
   const messageHTML = `<div class="message ${messageClass} animate__animated animate__fadeInUp"><strong>${sender}:</strong> ${text}</div>`;
   const chatBody = document.getElementById("chat-body");
   chatBody.innerHTML += messageHTML;
   chatBody.scrollTop = chatBody.scrollHeight;
 }
  /**
  * Handles sending a message when the user clicks the button or presses Enter.
  */
 function sendMessage() {
   const userInputField = document.getElementById("user-input");
   const userInput = userInputField.value.trim();
   if (userInput === "") return;
    // Append user's message
   appendMessage("User", userInput);
   userInputField.value = "";
    // Delay the bot's response slightly for a more natural conversation
   setTimeout(() => {
     const botResponse = getBotResponse(userInput);
     appendMessage("FriendBot", botResponse);
   }, 500);
 }
  // Event listeners for sending messages
 document.getElementById("send-btn").addEventListener("click", sendMessage);
 document.getElementById("user-input").addEventListener("keypress", function (e) {
   if (e.which === 13 || e.keyCode === 13) {
     sendMessage();
   }
 });
  // Chatbot Customization: Avatar and Gender Selection
 $(document).ready(function () {
   // Show the customization modal on page load
   $("#customizationModal").modal("show");
    // Avatar selection logic: highlight selected avatar and store its source
   $(".avatar-option").click(function () {
     $(".avatar-option").removeClass("selected");
     $(this).addClass("selected");
     window.chatbotAvatar = $(this).attr("src");
   });
    // When the user clicks "Start Chat" in the modal
   $("#startChat").click(function () {
     // Use a default avatar if none is selected
     if (!window.chatbotAvatar) {
       window.chatbotAvatar = "https://randomuser.me/api/portraits/men/32.jpg";
     }
     // Get the selected gender from the radio buttons
     const chatbotGender = $('input[name="genderOptions"]:checked').val();
     // Update the chat header with the selected avatar and gender-based name
     $("#chatbot-avatar").attr("src", window.chatbotAvatar).show();
     $("#chatbot-name").text("FriendBot (" + chatbotGender + ")");
     // Hide the customization modal
     $("#customizationModal").modal("hide");
      // Send an initial welcome message from the bot
     appendMessage(
       "FriendBot",
       "Hello! I'm your friendly productivity companion. Ask me anything—from simple math to project ideas, or even a web search!"
     );
   });
 });
  // Function to trigger an automatic message if the user is inactive
 let inactivityTimer;
 function resetInactivityTimer() {
   clearTimeout(inactivityTimer);
   inactivityTimer = setTimeout(() => {
     appendMessage("FriendBot", "Hey, just checking in—what's keeping you busy today?");
   }, 60000); // 60 seconds of inactivity
 }
  // Bind event listeners to reset the inactivity timer
 document.getElementById("user-input").addEventListener("keypress", resetInactivityTimer);
 document.getElementById("send-btn").addEventListener("click", resetInactivityTimer);
