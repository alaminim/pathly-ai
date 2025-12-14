// components/QuestionCard.tsx
'use client'

import { QuestionCardProps } from "../lib/types";



export const QuestionCard = ({
  question,
  selectedValue,
  onSelect,
  questionNumber
}: QuestionCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {questionNumber}. {question.text}
      </h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(question.id, option.value)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedValue === option.value
                ? 'border-blue-500 bg-blue-50 text-blue-800'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                selectedValue === option.value
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
              }`}>
                {selectedValue === option.value && (
                  <div className="w-full h-full rounded-full bg-white scale-50" />
                )}
              </div>
              <span className="font-medium">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};