import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Hey, I’m here. Want to talk? 💬",
  "How are you feeling today? 💖",
  "You’re not alone in this world 🌍",
  "Just a reminder: you're doing your best ✨",
  "Wanna write something in your diary? 📓",
];

const Insightie = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMsg);
    }, 15000); // every 15s, change message
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-purple-100 text-purple-800 shadow-lg p-3 rounded-xl w-64 text-sm"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setVisible(!visible)}
        className="bg-purple-500 hover:bg-purple-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl"
      >
        💫
      </motion.button>
    </div>
  );
};

export default Insightie;
