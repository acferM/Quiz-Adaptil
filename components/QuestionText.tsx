'use client'

import { useQuiz } from "@/store/quiz"

export function QuestionText() {
  const { questions, currentQuestion } = useQuiz()

  return (
    <p className="text-white absolute top-36 left-[50%] translate-x-[-53%] text-lg w-80 text-center">
      {questions[currentQuestion].text}
    </p>
  )
}