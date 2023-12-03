'use client';

import { AlternativeLetter, useQuiz } from "@/store/quiz";
import { useRouter } from "next/navigation";

export function Questions() {
  const { questions, currentQuestion, addAnswer, addLastAnswer, userAnswers } = useQuiz();

  const router = useRouter()
  
  const question = questions[currentQuestion]


  const handleSelectAlternative = (letter: AlternativeLetter) => {
    if (currentQuestion < 5) {
      addAnswer(letter)
      return
    }

    addLastAnswer(letter)
    router.push('/result')
  }

  return (
    <div className="grid grid-cols-2 gap-10">
      {question.alternatives.map(alternative => (
        <button key={alternative.letter} className="flex items-center gap-4 bg-secondary p-2 rounded-full" onClick={() => handleSelectAlternative(alternative.letter)}>
          <span className="flex items-center justify-center bg-primary text-secondary rounded-full w-10 h-10">
            {alternative.letter}
          </span>

          <p className="text-white mr-4">{alternative.text}</p>
      </button>
      ))}
    </div>
  )
}