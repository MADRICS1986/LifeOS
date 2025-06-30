import React, { useState } from "react";
import { CalendarDays } from "lucide-react";

const dummyData = {
  "2025-06-28": {
    mood: "happy",
    note: "Had a great productive day 💖",
    budget: { earned: 10000, spent: 2000 },
    routine: { tasks: 4, completed: 3 }
  },
  "2025-06-27": {
    mood: "sad",
    note: "Felt low but still showed up 🌧️",
    budget: { earned: 0, spent: 500 },
    routine: { tasks: 2, completed: 1 }
  }
};

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const entry = dummyData[selectedDate];

  return (
    <div className="max-w-3xl mx-auto p-6 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <CalendarDays size={28} /> Calendar View
      </h2>

      <input
        type="date"
        onChange={handleDateChange}
        className="mb-6 p-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
      />

      {entry ? (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 shadow p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">🧠 Mood</h3>
            <p>Mood: <strong>{entry.mood}</strong></p>
            <p className="text-sm italic text-gray-600 dark:text-gray-400">“{entry.note}”</p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">💸 Budget</h3>
            <p>Earned: ₹{entry.budget.earned}</p>
            <p>Spent: ₹{entry.budget.spent}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 shadow p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">⏰ Routine</h3>
            <p>Completed: {entry.routine.completed} / {entry.routine.tasks}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No data for this date. Try selecting another.</p>
      )}
    </div>
  );
};

export default CalendarView;
