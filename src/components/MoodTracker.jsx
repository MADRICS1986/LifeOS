import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const moods = [
  { emoji: "😢", label: "Sad", message: "Proud of you for expressing how you feel 💫" },
  { emoji: "😐", label: "Fine", message: "I hear you. Let’s take it one step at a time 💙" },
  { emoji: "😊", label: "Good", message: "You’re doing amazing, even when it’s tough." },
  { emoji: "😍", label: "Loved", message: "You are cherished. Never forget that 💖" },
  { emoji: "🤩", label: "Happy", message: "Your joy is contagious 🌞" },
];

const MoodTracker = () => {
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    const today = new Date().toISOString().split("T")[0];
    const data = { mood: selected.label, note, time: Date.now() };
    localStorage.setItem(`mood-${today}`, JSON.stringify(data));
    setSaved(true);
  };

  return (
    <div className="min-h-screen p-6 font-[Poppins] bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4">🧠 How are you feeling today?</h2>

      <div className="flex gap-4 flex-wrap mb-6">
        {moods.map((mood, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setSelected(mood);
              setSaved(false);
            }}
            whileTap={{ scale: 0.9 }}
            className={`px-5 py-3 text-xl rounded-full transition ${
              selected?.label === mood.label
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-white/10"
            }`}
          >
            {mood.emoji} {mood.label}
          </motion.button>
        ))}
      </div>

      {selected && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <p className="text-lg italic text-purple-500">{selected.message}</p>
            <textarea
              rows={3}
              placeholder="Want to add a note for today?"
              className="mt-3 w-full p-3 rounded-xl bg-gray-100 dark:bg-white/10 border-none resize-none outline-none"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </motion.div>

          {!saved ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="px-6 py-3 mt-2 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700"
            >
              Save Diary
            </motion.button>
          ) : (
            <p className="mt-4 text-green-500 font-semibold">Saved! 💾</p>
          )}
        </>
      )}
    </div>
  );
};

export default MoodTracker;

