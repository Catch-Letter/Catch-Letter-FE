import { useAutoFocus } from '#/hooks'
import { useToastStore } from '#/store/toastStore'
import { InputHTMLAttributes, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  labels,
  separatedInputContainer,
  separateInput,
  separateInputs,
} from './separated-input.styles'

export interface SeparatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  label?: string
  type?: string
  onChangeValue: (value: string) => void
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
  disabled,
  ...props
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [isComposing, setIsComposing] = useState(false)
  const { showToast } = useToastStore()
  const { t } = useTranslation()

  useAutoFocus(autoFocus, inputRefs)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isComposing) return

    const newValues = [...value]
    newValues[index] = e.currentTarget.value // 조합 한글을 저장
    onChangeValue(newValues.join(''))

    // 다음 입력칸으로 이동
    if (e.target.value.length === 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleComposition = (e: React.CompositionEvent<HTMLInputElement>, index: number) => {
    if (e.type === 'compositionstart') {
      setIsComposing(true)
    } else if (e.type === 'compositionend') {
      setIsComposing(false)

      const newValues = [...value]
      newValues[index] = e.currentTarget.value // 조합 한글을 저장
      onChangeValue(newValues.join(''))

      inputRefs.current[index + 1]?.focus()
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

    // 숫자만 입력 가능한 비밀번호
    if (type === 'password' && /^[0-9]$/.test(e.key) === false) {
      showToast(t('numberPWD'), 'error')
      e.preventDefault()
    }
  }

  const inputs = Array.from({ length }, (_, index) => (
    <input
      key={index}
      type={type}
      ref={(el) => (inputRefs.current[index] = el)}
      value={isComposing ? undefined : (value[index] ?? '')}
      onChange={(e) => handleInputChange(e, index)}
      onCompositionStart={(e) => handleComposition(e, index)}
      onCompositionEnd={(e) => handleComposition(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      maxLength={1}
      css={separateInput}
      disabled={disabled}
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
