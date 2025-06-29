import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoodTracker from "./components/MoodTracker";
import RoutineManager from "./components/RoutineManager";
import BudgetManager from "./components/BudgetManager";
import InsightEngine from "./components/InsightEngine";

export default function App() {
  // Mood Tracker State
  const [moodLogs, setMoodLogs] = useState(() => {
    const saved = localStorage.getItem("moodLogs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("moodLogs", JSON.stringify(moodLogs));
  }, [moodLogs]);

  // Routine Manager State
  const [routines, setRoutines] = useState(() => {
    const saved = localStorage.getItem("routines");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  // Budget Manager State
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <MoodTracker moodLogs={moodLogs} setMoodLogs={setMoodLogs} />
                <RoutineManager routines={routines} setRoutines={setRoutines} />
                <BudgetManager transactions={transactions} setTransactions={setTransactions} />
                <InsightEngine
                  moodData={moodLogs}
                  routineData={routines}
                  budgetData={transactions}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

