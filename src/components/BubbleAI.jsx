import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const greetings = [
  "Hey cutie, how are you feeling today? 💬",
  "I’m always here for you, wanna talk? 👂",
  "Your day matters. Wanna share something? ✨",
  "Feeling okay? I'm right beside you 👩‍🚀❤️"
];

const BubbleAI = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * greetings.length);
      setMessage(greetings[random]);
      setShow(true);
    }, 2500);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`transition-all duration-500 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <div className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-2xl shadow-lg max-w-xs border border-gray-200 dark:border-gray-800">
          <div className="flex items-start gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xl">
              <MessageCircle size={20} />
            </div>
            <p className="text-sm leading-tight font-medium font-[Poppins]">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleAI;

