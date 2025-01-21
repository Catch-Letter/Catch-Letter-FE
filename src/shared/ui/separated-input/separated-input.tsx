import {
  separatedInputContainer,
  separateInputs,
  separateInput,
} from '#/shared/ui/separated-input/separated-input.styles'
import { InputHTMLAttributes, useRef } from 'react'

interface SeparatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  label?: string
}

export default function SeparatedInput({ label, length }: SeparatedInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value
    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // 백스페이스로 이전 input으로 이동
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && inputRefs.current[index - 1]) {
      const currentInput = inputRefs.current[index]
      if (currentInput && !currentInput.value) {
        inputRefs.current[index - 1]?.focus()
      }
    }
  }

  const inputs = Array.from({ length }, (_, index) => (
    <input
      key={index}
      ref={(el) => (inputRefs.current[index] = el)}
      onChange={(e) => handleInputChange(e, index)}
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
