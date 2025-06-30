import React from "react";

const TodaySummary = () => {
  // Dummy today's data - to be replaced with actual data later
  const todayMood = "happy";
  const todayNote = "Feeling grateful today. Loved my progress! 💫";
  const todayBudget = {
    earned: 20000,
    spent: 3000,
  };
  const todayRoutine = {
    tasks: 3,
    completed: 2,
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4">📅 Today’s Summary</h2>

      <div className="bg-white dark:bg-gray-900 shadow-md p-5 rounded-2xl mb-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-2">🧠 Mood</h3>
        <p className="text-md">Mood: <span className="font-medium">{todayMood}</span></p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">“{todayNote}”</p>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-md p-5 rounded-2xl mb-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-2">💸 Budget</h3>
        <p className="text-md">Earned: ₹{todayBudget.earned}</p>
        <p className="text-md">Spent: ₹{todayBudget.spent}</p>
        <p className="text-sm text-green-500 mt-1">You're managing your money well today 💰</p>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-md p-5 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-2">⏰ Routine</h3>
        <p className="text-md">Tasks Completed: {todayRoutine.completed} / {todayRoutine.tasks}</p>
        <p className="text-sm text-blue-400 mt-1">Great effort on your routine today! 🚀</p>
      </div>

      <div className="mt-8 text-center text-lg font-medium text-pink-500">
        🌟 “You did your best today. I’m proud of you.”
      </div>
    </div>
  );
};

export default TodaySummary;
