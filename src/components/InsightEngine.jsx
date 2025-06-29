import React, { useEffect, useState } from "react";

export default function InsightEngine({ moodData, routineData, budgetData }) {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const generateInsights = () => {
      const newInsights = [];

      // Mood Insight
      if (moodData.length > 0) {
        const moods = moodData.map((m) => m.mood);
        const moodFrequency = moods.reduce((acc, mood) => {
          acc[mood] = (acc[mood] || 0) + 1;
          return acc;
        }, {});
        const topMood = Object.entries(moodFrequency).sort((a, b) => b[1] - a[1])[0];
        newInsights.push(`You're feeling mostly "${topMood[0]}" lately. Try journaling or meditation if it's a low mood.`);
      }

      // Routine Insight
      if (routineData.length > 0) {
        const completed = routineData.filter((r) => r.completed).length;
        const total = routineData.length;
        const percent = ((completed / total) * 100).toFixed(0);
        newInsights.push(`You've completed ${percent}% of your routines. Great job staying disciplined!`);
      }

      // Budget Insight
      if (budgetData.length > 0) {
        const income = budgetData.filter((tx) => tx.type === "income").reduce((sum, tx) => sum + tx.amount, 0);
        const expense = budgetData.filter((tx) => tx.type === "expense").reduce((sum, tx) => sum + tx.amount, 0);
        if (expense > income) {
          newInsights.push(`You're spending more than you earn. Consider reducing expenses or tracking subscriptions.`);
        } else {
          newInsights.push(`Your finances are stable. Keep saving and building that buffer!`);
        }
      }

      if (newInsights.length === 0) {
        newInsights.push("Start logging your mood, routines, and spending to unlock personalized insights!");
      }

      setInsights(newInsights);
    };

    generateInsights();
  }, [moodData, routineData, budgetData]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
        🔍 AI-Powered Insights
      </h2>
      <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-200">
        {insights.map((insight, index) => (
          <li key={index} className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
            {insight}
          </li>
        ))}
      </ul>
    </div>
  );
}

