import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [aiMessage, setAiMessage] = useState("Hey, how are you feeling today? I’m here for you 💙");
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleUserSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    // Simple AI response logic
    let reply = "I’m here with you.";
    if (userInput.toLowerCase().includes("sad")) reply = "I hear you. Let’s take it slow 💙";
    else if (userInput.toLowerCase().includes("happy")) reply = "Yay! That makes me smile too 💫";
    else if (userInput.toLowerCase().includes("lonely")) reply = "You’re never alone — I’m here 💖";
    else if (userInput.toLowerCase().includes("love")) reply = "You’re deeply loved 💌";
    else if (userInput.length < 6) reply = "Wanna tell me more, honey? 🌸";

    setResponse(reply);
    localStorage.setItem('lastInsightieChat', JSON.stringify({ user: userInput, reply }));
    setUserInput("");
  };

  useEffect(() => {
    const saved = localStorage.getItem('lastInsightieChat');
    if (saved) {
      const { reply } = JSON.parse(saved);
      setResponse(reply);
    }
  }, []);

  const sections = [
    { label: "🧠 Mood Tracker", link: "/mood" },
    { label: "⏰ Routine Manager", link: "/routine" },
    { label: "💸 Budget Manager", link: "/budget" },
    { label: "🔍 Insight Engine", link: "/insights" },
    { label: "🧚 Insight AI", link: "/insightie" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Title */}
      <motion.h1 
        className="text-5xl font-extrabold mb-12 tracking-widest text-purple-200"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        LifeOS
      </motion.h1>

      {/* Main Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.a
            key={index}
            href={section.link}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-md text-center hover:bg-white/20 transition transform hover:scale-105 cursor-pointer text-lg font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {section.label}
          </motion.a>
        ))}
      </div>

      {/* Insightie AI Floating Chat */}
      <motion.div
        className="absolute bottom-6 right-6 bg-purple-800/80 rounded-2xl p-4 max-w-sm shadow-lg backdrop-blur-lg text-sm space-y-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-start space-x-2">
          <div className="text-2xl animate-bounce">🧚</div>
          <div className="text-purple-100 italic">{aiMessage}</div>
        </div>

        {response && (
          <div className="text-purple-200 text-xs ml-8">
            <strong>Insightie:</strong> {response}
          </div>
        )}

        <form onSubmit={handleUserSubmit} className="flex items-center space-x-2 mt-1">
          <input
            type="text"
            className="w-full px-3 py-1 rounded-xl text-black text-sm"
            placeholder="Type your reply..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white text-sm px-3 py-1 rounded-xl hover:bg-purple-700"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Dashboard;

