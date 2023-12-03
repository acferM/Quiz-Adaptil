import { QuestionText } from '@/components/QuestionText'
import { Questions } from '@/components/Questions'
import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image'

const LuckiestGuy = Luckiest_Guy({ weight: '400', subsets: ['latin']})

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-8 items-center justify-center bg-background bg-cover min-h-[100vh]">
      <div className='relative'>
        <Image src="/question.svg" alt="Question ballon" width={400} height={400} />

        <h1 className={`${LuckiestGuy.className} absolute text-primary top-20 left-14 text-[3rem]`}>
          QUIZ ADAPTIL
        </h1>

        <QuestionText />
      </div>

      <Questions />
    </div>
  )
}
