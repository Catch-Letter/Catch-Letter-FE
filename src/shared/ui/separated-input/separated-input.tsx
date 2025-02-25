import {
  separatedInputContainer,
  separateInputs,
  separateInput,
  labels,
} from './separated-input.styles'
import { InputHTMLAttributes, useRef, useState } from 'react'

interface SeparatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  label?: string
  type?: string
  onChangeValue?: (value: string) => void
}

const SeparatedInput: React.FC<SeparatedInputProps> = ({ label, length, type, onChangeValue }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [inputValues, setInputValues] = useState<string[]>(Array(length).fill(''))
  const [isComposing, setIsComposing] = useState(false)

  const updateValues = (newValues: string[]) => {
    setInputValues(newValues)
    onChangeValue?.(newValues.join(''))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isComposing) return

    const { value } = e.target
    const newValues = [...inputValues]
    newValues[index] = value
    updateValues(newValues)

    // 다음 입력칸으로 이동
    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleComposition = (e: React.CompositionEvent<HTMLInputElement>, index: number) => {
    if (e.type === 'compositionstart') {
      setIsComposing(true)
    } else if (e.type === 'compositionend') {
      setIsComposing(false)

      const newValues = [...inputValues]
      newValues[index] = e.currentTarget.value // 조합 한글을 저장
      updateValues(newValues)

      if (inputRefs.current[index + 1]) {
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
      type={type}
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
      {label && <label css={labels}>{label}</label>}
      <div css={separateInputs}>{inputs}</div>
    </div>
  )
}

export default SeparatedInput
