import { create } from "zustand"

export type AlternativeLetter = 'a' | 'b' | 'c' | 'd'

type Alternative = {
  letter: AlternativeLetter
  text: string
}

type Question = {
  text: string
  alternatives: Alternative[]
}

interface Store {
  questions: Question[]
  userAnswers: AlternativeLetter[]
  currentQuestion: number

  addAnswer: (letter: AlternativeLetter) => void
  addLastAnswer: (letter: AlternativeLetter) => void
}

export const useQuiz = create<Store>((set) => ({
  currentQuestion: 0,
  questions: [
    {
      text: "O que é o Adaptil?",
      alternatives: [
        { letter: 'a', text: 'Petisco' },
        { letter: 'b', text: 'Produto Floral' },
        { letter: 'c', text: 'Feromonio' },
        { letter: 'd', text: 'Embelezador' },
      ]
    },
    {
      text: 'Quais das apresentações o Adaptil NÃO possui?',
      alternatives: [
        { letter: 'a', text: 'Difusor' },
        { letter: 'b', text: 'Refil difusor' },
        { letter: 'c', text: 'Sachê' },
        { letter: 'd', text: 'Spray' },
      ]
    },
    {
      text: 'Em que situações podemos usar o Adaptil?',
      alternatives: [
        { letter: 'a', text: 'Medo de barulhos' },
        { letter: 'b', text: 'Novos moradores' },
        { letter: 'c', text: 'Sociabilização' },
        { letter: 'd', text: 'Todas anteriores' },
      ]
    },
    {
      text: 'O Adaptil pode ser usado até que idade do animal?',
      alternatives: [
        { letter: 'a', text: 'Apenas filhotes' },
        { letter: 'b', text: 'A vida inteira' },
        { letter: 'c', text: 'Até os 5 anos' },
        { letter: 'd', text: 'Apenas em idosos' },
      ]
    },
    {
      text: 'Qual desta NÃO é uma característica do Adaptil?',
      alternatives: [
        { letter: 'a', text: 'Efeito anestésico' },
        { letter: 'b', text: 'Ação apenas e cães' },
        { letter: 'c', text: 'Spray rende cerca de 400 borrifadas' },
        { letter: 'd', text: 'Não causa dependência' },
      ]
    },
    {
      text: 'Quanto tempo devemos aguardar após a aplicação do Adaptil Spray?',
      alternatives: [
        { letter: 'a', text: '10- 15 minutos' },
        { letter: 'b', text: '1 hora' },
        { letter: 'c', text: '2 dias' },
        { letter: 'd', text: 'Não precisa esperar' },
      ]
    }
  ],
  userAnswers: [],

  addAnswer: (letter: AlternativeLetter) => {
    set((state) => ({
      userAnswers: [...state.userAnswers, letter],
      currentQuestion: state.currentQuestion + 1
    }))
  },

  addLastAnswer: (letter: AlternativeLetter) => {
    set((state) => ({
      userAnswers: [...state.userAnswers, letter],
    }))
  }
}))