'use client'

import { AlternativeLetter, useQuiz } from "@/store/quiz"
import { Luckiest_Guy } from "next/font/google"

const LuckiestGuy = Luckiest_Guy({ weight: '400', subsets: ['latin']})

const CORRECT_ANSWERS = ['d', 'c', 'd', 'b', 'a', 'a']

export default function Page() {
  const { userAnswers } = useQuiz()

  const getAnswerText = (letter: AlternativeLetter, idx: number) => {
    if (CORRECT_ANSWERS[idx] === letter) {
      return 'Resposta correta ✅'
    }

    return 'Resposta errada ❌'
  }

  return (
    <div className="flex flex-1 flex-col gap-8 items-center justify-center bg-background bg-cover min-h-[100vh]">
      <h1 className={`${LuckiestGuy.className} text-primary text-4xl`}>SEU RESULTADO:</h1>

      <ul className="list-none">
        {userAnswers.map((letter, index) => (
          <li key={index} className="text-lg text-white">
            {index + 1} - {getAnswerText(letter, index)}
          </li>
        ))}
      </ul>
    </div>
  )
}