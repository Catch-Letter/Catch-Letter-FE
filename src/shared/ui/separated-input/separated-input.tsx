import { useAutoFocus } from '#/hooks'
import { useToastStore } from '#/store/toastStore'
import {
  ChangeEvent,
  CompositionEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
  useState,
} from 'react'
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
  onChangeValue?: (value: string) => void
  value?: string
  autoFocus?: boolean
  padding?: string | number
}

const SeparatedInput: React.FC<SeparatedInputProps> = ({
  label,
  length,
  type,
  onChangeValue,
  value = '',
  autoFocus = false,
  disabled = false,
  padding,
  ...props
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  // const [isComposing, setIsComposing] = useState(false)
  const { showToast } = useToastStore()
  const { t } = useTranslation()

  //type = password 일 때 값 입력시 •로 가려지는 상태를 관리하기 위한 상태값
  const [displayValue, setDisplayValue] = useState<string[]>(
    Array.from({ length }, (_, i) => (type === 'password' && value[i] ? '•' : (value[i] ?? '')))
  )

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
    const char = e.currentTarget.value[0] ?? ''

    //실제값에 대응하는 •값
    const newDisplayValues = [...displayValue]
    newDisplayValues[index] = type === 'password' ? (char ? '•' : '') : char
    setDisplayValue(newDisplayValues)

    //실제값
    const newValues = value
      .padEnd(length, ' ')
      .split('')
      .map((v, i) => (i === index ? char : v))
    onChangeValue?.(newValues.join(''))

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
      case 'Backspace': {
        e.preventDefault()
        const newDisplayValues = [...displayValue]
        const newValues = value.padEnd(length, ' ').split('')

        if ((value[index] === '' || value[index] === ' ') && index > 0) {
          // 현재 칸이 비어있으면 이전 칸 지우고 포커스
          newDisplayValues[index - 1] = ' '
          newValues[index - 1] = ' '
          setDisplayValue(newDisplayValues)
          onChangeValue?.(newValues.join(''))
          inputRefs.current[index - 1]?.focus()
        } else {
          // 현재 칸만 지우기
          newDisplayValues[index] = ' '
          newValues[index] = ' '
          setDisplayValue(newDisplayValues)
          onChangeValue?.(newValues.join(''))
        }
        return
      }
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
      value={displayValue[index] === ' ' ? '' : (displayValue[index] ?? '')}
      onChange={(e) => handleInputChange(e, index)}
      onBeforeInput={handleBeforeInput}
      // onCompositionStart={handleCompositionStart}
      // onCompositionEnd={(e) => handleCompositionEnd(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      maxLength={1}
      css={separateInput}
      disabled={disabled}
      style={{ padding }}
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
