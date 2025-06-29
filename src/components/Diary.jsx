import React, { useState, useEffect } from 'react';

const Diary = () => {
  const [entry, setEntry] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    setHistory(saved);
  }, []);

  const handleSave = () => {
    const newEntry = {
      text: entry,
      date: new Date().toLocaleString(),
    };

    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedHistory));
    setEntry('');
    generateInsight(newEntry.text);
  };

  const generateInsight = (text) => {
    if (text.includes('sad')) {
      setResponse("I'm here for you. It’s okay to feel this way. Try writing more about what made you feel that.");
    } else if (text.includes('happy')) {
      setResponse("That’s beautiful! Hold on to this joy and share it with others.");
    } else {
      setResponse("Thank you for opening up. Keep writing — I’m listening.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">📝 Your Diary</h2>
      <textarea
        className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Type your thoughts here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-2 shadow-lg transition transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-purple-300"
        onClick={handleSave}
      >
        Save Entry
      </button>

      {response && (
        <div className="mt-4 bg-purple-100 text-purple-800 p-3 rounded-lg shadow-sm">
          <strong>InsightEngine:</strong> {response}
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700">📚 Past Entries</h3>
        <ul className="mt-2 space-y-2">
          {history.map((item, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded-lg text-sm shadow-sm">
              <div className="text-gray-600">{item.date}</div>
              <div className="text-gray-800 mt-1">{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Diary;
