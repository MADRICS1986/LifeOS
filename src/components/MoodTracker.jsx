import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [log, setLog] = useState([]);
  const [sparkle, setSparkle] = useState(false);

  const messages = {
    sad: "Proud of you for expressing how you feel 💫",
    happy: "Yay! I’m happy with you 💖",
    loved: "You’re doing amazing, even when it’s tough.",
    fine: "Let’s take it one step at a time 💙",
    default: "Breathe in... you’ve got this.",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood.trim()) return;

    const msg =
      messages[mood.toLowerCase()] || messages.default;

    setLog([...log, { text: mood, reply: msg }]);
    setMood('');

    setSparkle(true);
    setTimeout(() => setSparkle(false), 1500);

    localStorage.setItem('moodLog', JSON.stringify([...log, { text: mood, reply: msg }]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white p-6 relative">
      <h2 className="text-3xl font-bold mb-6">🧠 Mood Tracker</h2>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
          className="text-black p-2 rounded-xl w-full"
        />
        <button type="submit" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-700">
          Submit
        </button>
      </form>

      {sparkle && (
        <motion.div
          className="absolute top-1/2 left-1/2 text-4xl text-pink-400 pointer-events-none"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{ duration: 1.5 }}
        >
          ✨
        </motion.div>
      )}

      <div className="space-y-4">
        {log.map((entry, i) => (
          <div key={i}>
            <p className="text-lg">🗣️ {entry.text}</p>
            <p className="text-purple-300">💬 {entry.reply}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;

