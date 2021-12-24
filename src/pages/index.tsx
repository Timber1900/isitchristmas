import { useEffect, useState } from 'react'

export default function Home() {
  const [isChristmas, setIsChristmas] = useState<boolean | null>(null)
  const [timeMissing, setTimeMissing] = useState<string | null>(null)
  const [day, setDay] = useState<number>();

  useEffect(() => {
    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    setDay(day)

    if(month === 11 && (day === 25 || day === 24)) {
      setIsChristmas(true)
    } else {
      setIsChristmas(false)
    }

    const animation = () => {
      const timeMissing = getTimeMissing()
      setTimeMissing(timeMissing);

      requestAnimationFrame(animation)
    }
    requestAnimationFrame(animation)
  }, [])

  const getTimeMissing = () => {
    const date = new Date()
    const christmasDate = new Date(date.getFullYear(), 11, 25, 0, 0, 0, 0);
    let timeDiff = christmasDate.getTime() - date.getTime();
    if(timeDiff < 0) {
      timeDiff+= (1000 * 60 * 60 * 24 * 30 * 12);
    }
    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) - months * 30;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) - months * 30 * 24 - days * 24;
    const minutes = Math.floor(timeDiff / (1000 * 60)) - months * 30 * 24 * 60 - days * 24 * 60 - hours * 60;
    const seconds = Math.floor(timeDiff / 1000) - months * 30 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    if(days == 29 && months === 11) {
      return "It's Christmas!! 🎉🎉🎉"
    } else if(days === 0 && months === 0) {
      return `It's Christmas eve!! 🎉🎉🎉
      ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    }

    return `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  }

  return (
    <main className={`grid w-screen h-screen ${isChristmas ? "bg-green-600" :"bg-red-600"} place-content-center`}>
        <h1 className="w-screen font-sans text-3xl font-bold text-center text-white sm:text-9xl">{isChristmas ? day === 25 ? 'Yes!' : 'Yes!*' : 'No.'}</h1>
        <p className="w-screen h-auto px-4 font-sans text-xl font-bold text-center text-white whitespace-pre-wrap sm:text-3xl">{timeMissing}</p>
    </main>
  )
}
