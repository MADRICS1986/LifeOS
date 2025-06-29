import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
