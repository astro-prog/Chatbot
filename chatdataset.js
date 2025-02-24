
….
/* js/chatDataset.js */


/*
 FriendBot Chat Dataset Library
 ------------------------------
 Each object in the array represents a conversational entry:
   - keywords: an array of trigger words or phrases.
   - response: the chatbot’s reply when one of the keywords is found.
  Expand this dataset by adding more engaging, friendly, and productive responses.
*/


const responseDataset = [
   {
     keywords: ["hello", "hi", "hey"],
     response: "Hello there! I'm your friendly productivity companion. How can I help you today?"
   },
   {
     keywords: ["how are you", "how's it going"],
     response: "I'm doing great and always ready to assist you. How are you feeling?"
   },
   {
     keywords: ["productive", "productivity", "work efficiency"],
     response: "Staying productive is essential! Try breaking your tasks into small steps and taking regular breaks. What task are you working on?"
   },
   {
     keywords: ["idea", "inspiration", "suggestion"],
     response: "Sometimes a fresh perspective can spark creativity. Have you tried brainstorming or taking a short break to clear your mind?"
   },
   {
     keywords: ["motivate", "motivation"],
     response: "Remember: every small step counts. Keep your goals in sight and celebrate even the little wins. What's your next goal?"
   },
   {
     keywords: ["joke"],
     response: "Here's a fun one: Why did the developer go broke? Because he used up all his cache!"
   },
   {
     keywords: ["weather"],
     response: "I can't check real-time weather, but I hope it's a bright and inspiring day for you!"
   },
   {
     keywords: ["time"],
     response: "Time is valuable—make sure to manage it wisely. Do you have a schedule for today?"
   },
   {
     keywords: ["stress", "stressed"],
     response: "It seems like you're feeling stressed. Maybe a few deep breaths or a short walk can help. How do you usually unwind?"
   },
   {
     keywords: ["break", "rest"],
     response: "Taking regular breaks is key to staying productive. Have you taken a break recently?"
   },
   {
     keywords: ["deadline", "due"],
     response: "Deadlines can be challenging. Consider breaking your work into smaller, manageable parts. What's your current deadline?"
   },
   {
     keywords: ["project", "task"],
     response: "Tell me about your project—what's one thing you're excited or challenged by right now?"
   },
   {
     keywords: ["focus", "concentrate"],
     response: "Staying focused can be tough sometimes. Maybe try the Pomodoro Technique: 25 minutes of work followed by a 5-minute break."
   },
   {
     keywords: ["energy", "tired"],
     response: "Feeling low on energy? A short walk or some stretching might help. What usually boosts your energy?"
   },
   {
     keywords: ["learn", "study"],
     response: "Continuous learning is important. What new skill or topic are you interested in exploring?"
   },
   {
     keywords: ["brainstorm", "idea"],
     response: "Let's brainstorm together! Sometimes talking it out can spark new ideas. What's on your mind?"
   },
   {
     keywords: ["help", "assist"],
     response: "I'm here to help! Whether you need advice or just a friendly chat, feel free to ask."
   },
   {
     keywords: ["chat", "talk"],
     response: "I'm always here for a chat. Sometimes a conversation is all you need to clear your thoughts. What's up?"
   },
   {
     keywords: ["goal", "aim", "objective"],
     response: "Setting clear goals can greatly boost your productivity. What's one goal you'd like to achieve today?"
   },
   {
     keywords: ["plan", "schedule"],
     response: "Having a well-structured plan is essential. Do you use any tools or methods to organize your day?"
   },
   {
     keywords: ["challenge", "tough", "hard"],
     response: "Challenges can be opportunities in disguise. What's one challenge you're facing right now, and how can we break it down?"
   },
   {
     keywords: ["motivate", "inspire", "motivation"],
     response: "Remember, every step forward counts. What's one goal you're excited about today?"
   },
   {
     keywords: ["bored", "stuck"],
     response: "It sounds like you're in a lull. Sometimes a change of scenery or a short break can spark new ideas. Have you tried switching tasks for a bit?"
   },
   {
     keywords: ["new idea", "brainstorm", "creative"],
     response: "Let's brainstorm together! What project or idea are you currently excited about?"
   },
   {
     keywords: ["start", "initiate"],
     response: "Let's kick things off—what's one thing you're looking forward to today?"
   },
   {
     keywords: ["struggle", "difficult"],
     response: "I know tough days happen. Sometimes reflecting on what you've accomplished can help. What’s one small win you had recently?"
   }
   // Continue adding entries to reach 200+ for a rich and engaging conversation.
 ];
