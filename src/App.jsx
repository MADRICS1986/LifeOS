import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import RoutineManager from './components/RoutineManager';
import BudgetManager from './components/BudgetManager';
import InsightEngine from './components/InsightEngine';
import CalendarDiary from './components/CalendarDiary';
// Optional: import your AI Assistant screen if it's separate

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/routine" element={<RoutineManager />} />
        <Route path="/budget" element={<BudgetManager />} />
        <Route path="/insight" element={<InsightEngine />} />
        <Route path="/calendar" element={<CalendarDiary />} />
        {/* Add AI Assistant route if needed */}
      </Routes>
    </Router>
  );
}

export default App;

