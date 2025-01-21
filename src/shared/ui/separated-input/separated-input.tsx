import {
  separatedInputContainer,
  separateInputs,
  separateInput,
} from '#/shared/ui/separated-input/separated-input.styles'
import { InputHTMLAttributes, useRef, useState } from 'react'

interface SeparatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  label?: string
}

export default function SeparatedInput({ label, length }: SeparatedInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [isComposing, setIsComposing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    if (isComposing) return

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleComposition = (e: React.CompositionEvent<HTMLInputElement>, index: number) => {
    if (e.type === 'compositionstart') {
      setIsComposing(true)
    } else if (e.type === 'compositionend') {
      setIsComposing(false)

      const currentInput = inputRefs.current[index]
      if (currentInput && currentInput.value.length === 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const currentInput = inputRefs.current[index]
      if (currentInput && !currentInput.value && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus()
      }
    }
  }

  const inputs = Array.from({ length }, (_, index) => (
    <input
      key={index}
      ref={(el) => (inputRefs.current[index] = el)}
      onChange={(e) => handleInputChange(e, index)}
      onCompositionStart={(e) => handleComposition(e, index)}
      onCompositionEnd={(e) => handleComposition(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      maxLength={1}
      css={separateInput}
    />
  ))

  return (
    <div css={separatedInputContainer}>
      {label && <label>{label}</label>}
      <div css={separateInputs}>{inputs}</div>
    </div>
  )
}
