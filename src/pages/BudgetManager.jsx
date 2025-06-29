import PageWrapper from "../components/PageWrapper";
import { useState, useEffect } from "react";

export default function BudgetManager() {
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

  return (
    <PageWrapper>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
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
                tx.type === "income" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <span>{tx.desc}</span>
              <span>
                {tx.type === "income" ? "+" : "-"}₹{tx.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}

