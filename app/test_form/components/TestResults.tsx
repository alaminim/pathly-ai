import { RotateCcw } from "lucide-react";
import { MBTIResultsProps } from "../lib/types";
import {IconBulb} from '@tabler/icons-react'

export const MBTIResults: React.FC<MBTIResultsProps> = ({ result, onReset }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{result.type}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your MBTI Type</h1>
        <p className="text-xl text-gray-600">{result.description}</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Your Preferences:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {result.scores.E > result.scores.I ? 'E' : 'I'}
            </div>
            <div className="text-sm text-gray-600">
              {result.scores.E > result.scores.I ? 'Extraversion' : 'Introversion'}
            </div>
            <div className="text-xs text-gray-500">
              {Math.max(result.scores.E, result.scores.I)}/4
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {result.scores.S > result.scores.N ? 'S' : 'N'}
            </div>
            <div className="text-sm text-gray-600">
              {result.scores.S > result.scores.N ? 'Sensing' : 'Intuition'}
            </div>
            <div className="text-xs text-gray-500">
              {Math.max(result.scores.S, result.scores.N)}/4
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {result.scores.T > result.scores.F ? 'T' : 'F'}
            </div>
            <div className="text-sm text-gray-600">
              {result.scores.T > result.scores.F ? 'Thinking' : 'Feeling'}
            </div>
            <div className="text-xs text-gray-500">
              {Math.max(result.scores.T, result.scores.F)}/4
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {result.scores.J > result.scores.P ? 'J' : 'P'}
            </div>
            <div className="text-sm text-gray-600">
              {result.scores.J > result.scores.P ? 'Judging' : 'Perceiving'}
            </div>
            <div className="text-xs text-gray-500">
              {Math.max(result.scores.J, result.scores.P)}/4
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 mb-4"
      >
        <RotateCcw size={20} />
        Take Assessment Again
      </button>
      <button
        onClick={onReset}
        className="w-full bg-gradient-to-r from-green-600 to-amber-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-yellow-800 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <IconBulb size={20} />
        Recommend Career
      </button>
     
    </div>
  );
};