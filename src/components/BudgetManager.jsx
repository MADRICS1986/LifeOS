import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BudgetManager = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("budget-entries");
    return saved ? JSON.parse(saved) : [];
  });
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("income");

  const balance = entries.reduce((acc, e) => {
    return e.type === "income" ? acc + e.amount : acc - e.amount;
  }, 0);

  const addEntry = () => {
    if (!amount || !desc) return;
    const newEntry = { amount: Number(amount), desc, type, time: Date.now() };
    const updated = [...entries, newEntry];
    setEntries(updated);
    localStorage.setItem("budget-entries", JSON.stringify(updated));
    setAmount("");
    setDesc("");
  };

  return (
    <div className="min-h-screen p-6 font-[Poppins] bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4">💸 Budget Manager</h2>

      <div className="mb-6">
        <p className="text-xl font-semibold">Balance: ₹{balance.toLocaleString()}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded-xl bg-gray-100 dark:bg-white/10 w-full sm:w-32 outline-none"
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="p-3 rounded-xl bg-gray-100 dark:bg-white/10 w-full outline-none"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 rounded-xl bg-gray-100 dark:bg-white/10 w-full sm:w-32 outline-none"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={addEntry}
          className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {entries.length === 0 && <p>No entries yet. Start tracking 💰</p>}
        {entries.map((e, i) => (
          <motion.div
            key={i}
            className={`p-4 rounded-xl shadow-md ${
              e.type === "income" ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"
            }`}
          >
            <p className="font-medium">{e.desc}</p>
            <p>
              {e.type === "income" ? "+" : "-"}₹{e.amount.toLocaleString()} • {new Date(e.time).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BudgetManager;

