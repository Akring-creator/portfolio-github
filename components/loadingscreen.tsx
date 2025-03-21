"use client";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}
export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const fullText: string = "< Welcome />";

  useEffect(() => {
    let index: number = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed z-50 inset-0 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 font-mono text-4xl font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-40 bg-blue-500 h-full shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
