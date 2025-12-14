'use client'

import { ProgressBarProps } from "../lib/types";



export const ProgressBar = ({
  currentStep,
  totalSteps,
  className = ''
}: ProgressBarProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 mb-4 ${className}`}>
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};