import { Input } from '#/shared/ui'
import { InputProps } from '#/shared/ui/input/input'
import { FC, FocusEventHandler, useCallback, useState } from 'react'
import {
  helpMessageInalidStyles,
  helpMessageStyles,
  helpMessageValidStyles,
  labelInvalidStyles,
  labelStyles,
  labelValidStyles,
} from './input-filed.styles'

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
    <div>
      {label && (
        <label
          htmlFor={`${label}-input`}
          css={isUsed ? (isInvalid ? labelInvalidStyles : labelValidStyles) : labelStyles}
        >
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
        <small
          role={isInvalid ? 'alert' : undefined}
          css={
            isUsed
              ? isInvalid
                ? helpMessageInalidStyles
                : helpMessageValidStyles
              : helpMessageStyles
          }
        >
          {isUsed ? (isInvalid ? invalidMessage : validMessage) : helpMessage}
        </small>
      )}
    </div>
  )
}

export default InputField
