import React, { useState } from "react";
import { Clock } from "lucide-react";

const RoutineManager = () => {
  const [tasks, setTasks] = useState([
    { text: "Wake up and stretch", done: false },
    { text: "Drink water 💧", done: false },
    { text: "Write 3 goals", done: false }
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Clock size={28} /> Routine Manager
      </h2>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow space-y-4">
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                task.done
                  ? "bg-green-100 dark:bg-green-800 text-green-900 dark:text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              }`}
            >
              <span className={task.done ? "line-through" : ""}>{task.text}</span>
              <button
                onClick={() => toggleTask(index)}
                className="ml-4 px-2 py-1 text-sm bg-black text-white rounded hover:bg-opacity-80 dark:bg-white dark:text-black"
              >
                {task.done ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-3 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
            placeholder="Add new task..."
          />
          <button
            onClick={addTask}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineManager;

