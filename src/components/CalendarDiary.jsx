import React, { useState } from 'react';

const CalendarDiary = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [entry, setEntry] = useState(null);

  const handleFetch = () => {
    const data = localStorage.getItem(`mood-${selectedDate}`);
    setEntry(data ? JSON.parse(data) : null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">📅 Mood Calendar Diary</h2>

      <div className="space-y-4">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 rounded-xl text-black"
        />
        <button onClick={handleFetch} className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-700">
          Load Entry
        </button>
      </div>

      {entry ? (
        <div className="mt-6 bg-white/10 p-4 rounded-xl">
          <p className="text-lg">🗣️ {entry.mood}</p>
          <p className="text-purple-300">💬 {entry.reply}</p>
        </div>
      ) : selectedDate ? (
        <p className="mt-6 italic text-white/60">No mood entry found for this day 💭</p>
      ) : null}
    </div>
  );
};

export default CalendarDiary;
