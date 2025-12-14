'use client'

import { QuestionStepProps } from "../lib/types";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionsCard";


export const QuestionStep = ({
  category,
  responses,
  onOptionSelect,
  currentStep,
  totalSteps
}: QuestionStepProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">MBTI Personality Assessment</h1>
        <span className="text-sm text-gray-500">
          Step {currentStep + 1} of {totalSteps}
        </span>
      </div>
      
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {category.title}
        </h2>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="space-y-6">
        {category.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            selectedValue={responses[question.id]}
            onSelect={onOptionSelect}
            questionNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};