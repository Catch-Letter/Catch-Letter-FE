import { Button } from '#/shared/ui/button'
import { useState } from 'react'

const emojis = ['😵', '😊', '😊😊']

const TryCounter = () => {
  const maxChances = 3
  const [chances, setChances] = useState(maxChances)

  const handleWrongAttempt = () => {
    if (chances > 0) {
      setChances(chances - 1)
    }
  }

  return (
    <div className='flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md'>
      <div className='text-2xl'>{emojis[chances - 1] || '😵'}</div>
      <p className='text-lg font-semibold'>{chances}번의 기회가 남았어요!</p>
      <Button onClick={handleWrongAttempt} disabled={chances === 0}>
        틀렸어요!
      </Button>
    </div>
  )
}

export default TryCounter
