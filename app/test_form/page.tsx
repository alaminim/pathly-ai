'use client'

import { useState } from 'react';
import { QuestionStep } from './components/QuestionStep';
import { MBTILetter, MBTIResult } from './lib/types';
import { MBTIResults } from './components/TestResults';
import { questionCategories } from './lib/questions';
import { FormNavigation } from './components/FormNavigation';

export default function MBTIPersonalityTest() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [responses, setResponses] = useState<Record<string, MBTILetter>>({});
  const [result, setResult] = useState<MBTIResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const resetTest = () => {
    setCurrentStep(0);
    setResponses({});
    setResult(null);
    setIsSubmitting(false);
    setError(null);
  };

  // Fixed: Changed parameter name to questionId to match usage
  const handleOptionSelect = (questionId: string, letter: MBTILetter) => {
    setResponses(prev => ({ ...prev, [questionId]: letter }));
    setError(null);
  };

  const isStepComplete = () => {
    const currentQuestions = questionCategories[currentStep].questions;
    // Fixed: Check if all questions in current category have responses
    return currentQuestions.every(question => responses[question.id] !== undefined);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    setError(null);
  };

  const nextStep = () => {
    if (!isStepComplete()) {
      setError('Please select an option before proceeding.');
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, questionCategories.length - 1));
    setError(null);
  };

  const handleSubmit = () => {
    if (!isStepComplete()) {
      setError('Please complete the current step before submitting.');
      return;
    }
    setIsSubmitting(true);
    // Dummy result calculation, replace with your logic
    setTimeout(() => {
      setResult({
        type: Object.values(responses).join(''),
        description: 'Your MBTI result description here.',
        scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 } // Added missing scores property
      });
      setIsSubmitting(false);
    }, 1000);
  };

  if (result) {
    return <MBTIResults result={result} onReset={resetTest} />;
  }

  const currentCategory = questionCategories[currentStep];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <form onSubmit={(e) => e.preventDefault()}>
        <QuestionStep
          category={currentCategory}
          responses={responses}
          onOptionSelect={handleOptionSelect}
          currentStep={currentStep}
          totalSteps={questionCategories.length}
        />

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <FormNavigation
          currentStep={currentStep}
          totalSteps={questionCategories.length}
          isStepComplete={isStepComplete()}
          isSubmitting={isSubmitting}
          onPrevious={prevStep}
          onNext={nextStep}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}