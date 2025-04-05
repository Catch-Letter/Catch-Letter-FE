import {
  separatedInputContainer,
  separateInputs,
  separateInput,
  labels,
} from './separated-input.styles'
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react'

export interface SeparatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  label?: string
  type?: string
  onChangeValue?: (value: string) => void
  value?: string
  autoFocus?: boolean
}

const SeparatedInput: React.FC<SeparatedInputProps> = ({
  label,
  length,
  type,
  onChangeValue,
  value = '',
  autoFocus = false,
  ...props
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [inputValues, setInputValues] = useState<string[]>(() =>
    Array.from({ length }, (_, i) => value[i] ?? '')
  )
  const [isComposing, setIsComposing] = useState(false)

  useEffect(() => {
    // 화면에 보이는 순간 첫째 input에 focus
    if (!autoFocus || !inputRefs.current || !inputRefs.current[0]) return
    inputRefs.current[0].focus()
  }, [])

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
      return
    }

    //숫자만 입력 가능한 비밀번호
    if (type === 'password' && /^[0-9]$/.test(e.key) === false) {
      e.preventDefault()
    }
  }

  const inputs = Array.from({ length }, (_, index) => (
    <input
      key={index}
      type={type}
      ref={(el) => (inputRefs.current[index] = el)}
      value={isComposing ? undefined : (inputValues[index] ?? '')}
      onChange={(e) => handleInputChange(e, index)}
      onCompositionStart={(e) => handleComposition(e, index)}
      onCompositionEnd={(e) => handleComposition(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      maxLength={1}
      css={separateInput}
      {...props}
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
