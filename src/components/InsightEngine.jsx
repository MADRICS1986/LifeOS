import React, { useEffect, useState } from "react";

const InsightEngine = () => {
  const [insight, setInsight] = useState("");
  const [budgetData, setBudgetData] = useState([]);
  const [routineData, setRoutineData] = useState([]);
  const [mood, setMood] = useState(null);

  useEffect(() => {
    const storedBudget = JSON.parse(localStorage.getItem("budget-entries")) || [];
    const storedRoutine = JSON.parse(localStorage.getItem("routine-tasks")) || [];
    const storedMood = JSON.parse(localStorage.getItem("mood-log")) || [];

    const today = new Date().toLocaleDateString();

    const todayMood = storedMood.find((m) => m.date === today);
    const todayTasks = storedRoutine.filter((t) => t.date === today);
    const completedTasks = todayTasks.filter((t) => t.done);

    setMood(todayMood);
    setRoutineData({ total: todayTasks.length, done: completedTasks.length });
    setBudgetData(storedBudget);

    const totalIncome = storedBudget
      .filter((b) => b.type === "income")
      .reduce((sum, b) => sum + Number(b.amount), 0);

    const totalExpense = storedBudget
      .filter((b) => b.type === "expense")
      .reduce((sum, b) => sum + Number(b.amount), 0);

    let summary = "Here's your personal insight for today: \n\n";
    summary += `💰 Budget: You've earned ₹${totalIncome} and spent ₹${totalExpense}. `;
    summary += totalExpense < totalIncome ? "You’re managing well. Keep saving! 💸" : "Watch your spending 💡";
    summary += `\n⏰ Routine: ${completedTasks.length} of ${todayTasks.length} tasks done today. Small steps still count 💪`;

    if (todayMood?.mood) {
      summary += `\n🧠 Mood: You felt ${todayMood.mood}. Proud of you for tracking it 💙`;
    }

    setInsight(summary);
  }, []);

  return (
    <div className="min-h-screen px-6 py-8 font-[Poppins] bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4">🔍 Insight Engine</h2>
      <div className="bg-gradient-to-br from-purple-100 to-purple-300 dark:from-white/5 dark:to-white/10 p-6 rounded-xl shadow-xl whitespace-pre-line">
        {insight}
      </div>
    </div>
  );
};

export default InsightEngine;

