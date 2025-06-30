import React, { useState } from "react";
import MoodTracker from "./MoodTracker";
import RoutineManager from "./RoutineManager";
import BudgetManager from "./BudgetManager";
import InsightEngine from "./InsightEngine";
import TodaySummary from "./TodaySummary";
import CalendarView from "./CalendarView";
import BubbleAI from "./BubbleAI";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "mood":
        return <MoodTracker />;
      case "routine":
        return <RoutineManager />;
      case "budget":
        return <BudgetManager />;
      case "insight":
        return <InsightEngine />;
      case "today":
        return <TodaySummary />;
      case "calendar":
        return <CalendarView />;
      default:
        return (
          <div className="text-center mt-20 text-xl font-semibold text-gray-600 dark:text-gray-300">
            Welcome to LifeOS ✨ Choose a feature to begin.
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-[Poppins]">
      <header className="p-6 border-b border-gray-200 dark:border-gray-800 shadow-sm flex justify-between items-center">
        <h1 className="text-3xl font-bold">LifeOS</h1>
        <div className="space-x-3">
          <button onClick={() => setActiveComponent("mood")} className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium shadow-md hover:scale-105 transition">Mood</button>
          <button onClick={() => setActiveComponent("routine")} className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium shadow-md hover:scale-105 transition">Routine</button>
          <button onClick={() => setActiveComponent("budget")} className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium shadow-md hover:scale-105 transition">Budget</button>
          <button onClick={() => setActiveComponent("insight")} className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-medium shadow-md hover:scale-105 transition">Insights</button>
          <button onClick={() => setActiveComponent("today")} className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-medium shadow-md hover:scale-105 transition">Today</button>
          <button onClick={() => setActiveComponent("calendar")} className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-medium shadow-md hover:scale-105 transition">Calendar</button>
        </div>
      </header>
      <main className="p-6">{renderComponent()}</main>
      <BubbleAI />
    </div>
  );
};

export default Dashboard;

