import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  // Dark mode toggle
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Mood Tracker
  const [mood, setMood] = useState("");
  const [moodLog, setMoodLog] = useState(() => {
    const saved = localStorage.getItem("moodLog");
    return saved ? JSON.parse(saved) : [];
  });

  const handleMoodSubmit = () => {
    if (!mood) return;
    const newEntry = {
      id: Date.now(),
      mood,
      response: getMoodResponse(mood),
    };
    setMoodLog([newEntry, ...moodLog]);
    setMood("");
  };

  const getMoodResponse = (text) => {
    if (text.includes("happy")) return "💬 I hear you. Let’s take it one step at a time 💙";
    if (text.includes("sad")) return "💬 Proud of you for expressing how you feel 💫";
    if (text.includes("not good")) return "💬 Breathe in... you’ve got this.";
    if (text.includes("love")) return "💬 You’re doing amazing, even when it’s tough.";
    return "💬 I'm here for you, always.";
  };

  useEffect(() => {
    localStorage.setItem("moodLog", JSON.stringify(moodLog));
  }, [moodLog]);

  // Budget Manager
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? JSON.parse(saved) : [];
  });

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(transactions));
  }, [transactions]);

  const handleAdd = () => {
    if (!desc || !amount || isNaN(amount)) return;
    const newEntry = {
      id: Date.now(),
      desc,
      amount: parseFloat(amount),
      type,
    };
    setTransactions([newEntry, ...transactions]);
    setDesc("");
    setAmount("");
  };

  const balance = transactions.reduce((acc, tx) => {
    return tx.type === "income" ? acc + tx.amount : acc - tx.amount;
  }, 0);

  // AI Insight
  const getInsight = () => {
    if (balance < 0) return "⚠️ Your balance is negative. Consider cutting expenses.";
    if (balance < 5000) return "💡 You're running low. Save more this month.";
    return "✅ Your finances are stable. Keep saving and building that buffer!";
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 font-sans transition-colors duration-300">
      {/* Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">🧬 LifeOS</h1>

      {/* Mood Tracker */}
      <section className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧠 Mood Tracker</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="How are you feeling?"
            className="flex-1 p-2 border rounded dark:bg-gray-800"
          />
          <button
            onClick={handleMoodSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Share
          </button>
        </div>
        <ul className="space-y-2">
          {moodLog.map((entry) => (
            <li key={entry.id} className="p-2 rounded bg-blue-50 dark:bg-gray-800">
              <div className="font-semibold">🗣️ {entry.mood}</div>
              <div className="text-sm">{entry.response}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Budget Manager */}
      <section className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">💸 Budget Manager</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-24 p-2 border rounded"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <div className="mb-4 text-xl font-medium">
          Balance: ₹{balance.toFixed(2)}
        </div>

        <ul>
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className={`flex justify-between p-2 rounded mb-2 ${
                tx.type === "income" ? "bg-green-100 dark:bg-green-800" : "bg-red-100 dark:bg-red-800"
              }`}
            >
              <span>{tx.desc}</span>
              <span>
                {tx.type === "income" ? "+" : "-"}₹{tx.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Insights */}
      <section className="card">
        <h2 className="text-2xl font-semibold mb-4">🔍 AI-Powered Insights</h2>
        <p>{getInsight()}</p>
      </section>
    </div>
  );
}

