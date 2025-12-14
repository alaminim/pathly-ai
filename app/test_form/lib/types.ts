// types/mbti-types.ts
export type MBTILetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Option {
  value: MBTILetter;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Category {
  title: string;
  description: string;
  questions: Question[];
}

export interface MBTIResult {
  type: string;
  description: string;
  scores: Record<MBTILetter, number>;
}

export interface FormData {
  responses: Record<string, MBTILetter>;
  timestamp: string;
  userId?: string;
}

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export interface QuestionCardProps {
  question: Question;
  selectedValue?: MBTILetter;
  onSelect: (questionId: string, value: MBTILetter) => void;
  questionNumber: number;
}

export interface QuestionStepProps {
  category: Category;
  responses: Record<string, MBTILetter>;
  onOptionSelect: (questionId: string, value: MBTILetter) => void;
  currentStep: number;
  totalSteps: number;
}

export interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isStepComplete: boolean;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export interface MBTIResultsProps {
  result: MBTIResult;
  onReset: () => void;
}