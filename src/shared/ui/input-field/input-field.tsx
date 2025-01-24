import { Input } from '#/shared/ui'
import { InputProps } from '#/shared/ui/input/input'
import { FC, FocusEventHandler, useCallback, useState } from 'react'
import { initialStyles, invalidStyles, validStyles } from './input-filed.styles'

interface Props extends InputProps {
  label?: string
  validMessage?: string
  invalidMessage?: string
  helpMessage?: string
}

const InputField: FC<Props> = ({
  label,
  validMessage,
  invalidMessage,
  helpMessage,
  value,
  onChange,
  isInvalid = false,
  placeholder,
  ...props
}) => {
  const [isUsed, setIsUsed] = useState(false)
  const onBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    setIsUsed(true)
  }, [])

  return (
    <div css={isUsed ? (isInvalid ? invalidStyles : validStyles) : initialStyles}>
      {label && (
        <label htmlFor={`${label}-input`} className='input-field-label'>
          {label}
        </label>
      )}

      <Input
        id={`${label}-input`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        isInvalid={isInvalid}
        aria-describedby={helpMessage && 'help-message'}
        {...props}
      />

      {helpMessage && (
        <small className='input-field-help-message' role={isInvalid ? 'alert' : undefined}>
          {isUsed ? (isInvalid ? invalidMessage : validMessage) : helpMessage}
        </small>
      )}
    </div>
  )
}

export default InputField
