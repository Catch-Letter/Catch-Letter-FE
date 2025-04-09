import { useAutoFocus } from '#/hooks'
import { useToastStore } from '#/store/toastStore'
import { ChangeEvent, CompositionEvent, InputHTMLAttributes, KeyboardEvent, useRef } from 'react'
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
  // const [isComposing, setIsComposing] = useState(false)
  const { showToast } = useToastStore()
  const { t } = useTranslation()

  useAutoFocus(autoFocus, inputRefs)

  const handleBeforeInput = (e: CompositionEvent<HTMLInputElement>) => {
    const input = e.data

    // null은 Backspace 등에서 올 수 있으니 무시
    if (input === null) return

    // 숫자만 입력 가능한 비밀번호
    if (type === 'password' && /^[0-9]$/.test(input) === false) {
      e.preventDefault()
      showToast(t('numberPWD'), 'error')
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValues = Array.from({ length }, (_, i) => value[i] ?? ' ')
    newValues[index] = e.currentTarget.value[0]
    onChangeValue(newValues.join(''))

    // 다음 입력칸으로 이동
    // if (!isComposing && e.currentTarget.value.length === 1) {
    if (e.currentTarget.value.length === 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // const handleCompositionStart = () => {
  //   setIsComposing(true)
  // }

  // const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>, index: number) => {
  //   setIsComposing(false)

  //   const val = e.currentTarget.value
  //   const newValues = Array.from({ length: value.length }, (_, i) => value[i] ?? ' ')
  //   newValues[index] = val[0]
  //   if (index < length) {
  //     newValues[index + 1] = val[1]
  //   }
  //   onChangeValue(newValues.join(''))
  //   inputRefs.current[index + 1]?.focus()
  // }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // if (isComposing) return

    switch (e.key) {
      case 'Backspace':
        e.preventDefault()
        const newValues = Array.from({ length }, (_, i) => value[i] ?? ' ')
        newValues[index] = ' '
        onChangeValue(newValues.join(''))
        if (!e.currentTarget.value) {
          inputRefs.current[index - 1]?.focus()
        }
        return
      case 'ArrowLeft':
        e.preventDefault() // 이동 시 focus가 글자 앞으로 가지 않도록
        inputRefs.current[index - 1]?.focus()
        return
      case 'ArrowRight':
        inputRefs.current[index + 1]?.focus()
        return
      case 'Tab': // tab 이동 허용
        return
      case 'Shift':
        return
    }
  }

  const inputs = Array.from({ length }, (_, index) => (
    <input
      key={index}
      type={type}
      ref={(el) => (inputRefs.current[index] = el)}
      value={value[index] === ' ' ? '' : (value[index] ?? '')}
      onChange={(e) => handleInputChange(e, index)}
      onBeforeInput={handleBeforeInput}
      // onCompositionStart={handleCompositionStart}
      // onCompositionEnd={(e) => handleCompositionEnd(e, index)}
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
