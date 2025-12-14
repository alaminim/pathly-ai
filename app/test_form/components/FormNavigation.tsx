'use client'

import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { FormNavigationProps } from '../lib/types';


export const FormNavigation = ({
  currentStep,
  totalSteps,
  isStepComplete,
  isSubmitting,
  onPrevious,
  onNext,
  onSubmit
}: FormNavigationProps) => {
  const isLastStep = currentStep === totalSteps - 1;
  
  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          currentStep === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        <ChevronLeft size={20} />
        Previous
      </button>

      <button
        type="button"
        onClick={isLastStep ? onSubmit : onNext}
        disabled={!isStepComplete || isSubmitting}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          !isStepComplete || isSubmitting
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : isLastStep
            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing...
          </>
        ) : isLastStep ? (
          'Submit Assessment'
        ) : (
          <>
            Next
            <ChevronRight size={20} />
          </>
        )}
      </button>
    </div>
  );
};