import { Input } from '#/shared/ui'
import { ComponentProps, FC, FocusEventHandler, useCallback, useState } from 'react'
import {
  helpMessageInalidStyles,
  helpMessageStyles,
  helpMessageValidStyles,
  labelInvalidStyles,
  labelStyles,
  labelValidStyles,
} from './input-filed.styles'

interface Props extends ComponentProps<'input'> {
  label?: string
  invalid?: boolean
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
  invalid = false,
  placeholder,
  ...props
}) => {
  const [, setIsInvalid] = useState(false)
  const [used, setUsed] = useState(false)
  const onBlur: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    setUsed(true)
    setIsInvalid(invalid)
  }, [])

  return (
    <div>
      {label && (
        <label
          htmlFor={`${label}-input`}
          css={used ? (invalid ? labelInvalidStyles : labelValidStyles) : labelStyles}
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
        invalid={invalid}
        aria-describedby={helpMessage && 'help-message'}
        {...props}
      />

      {helpMessage && (
        <small
          id='help-message'
          role={invalid ? 'alert' : undefined}
          css={
            used ? (invalid ? helpMessageInalidStyles : helpMessageValidStyles) : helpMessageStyles
          }
        >
          {used ? (invalid ? invalidMessage : validMessage) : helpMessage}
        </small>
      )}
    </div>
  )
}

export default InputField
