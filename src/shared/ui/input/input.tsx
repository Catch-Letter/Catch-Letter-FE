import { ComponentProps, FC, FocusEventHandler, useCallback, useState } from 'react'
import { inputStyles } from './input.styles'

export interface InputProps extends ComponentProps<'input'> {
  isInvalid?: boolean
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  isInvalid = false,
  placeholder,
  onBlur,
  ...props
}) => {
  const [isUsed, setIsUsed] = useState(false)
  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback((e) => {
    setIsUsed(true)
    onBlur?.(e)
  }, [])

  return (
    <input
      css={inputStyles}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={isUsed && isInvalid}
      onBlur={handleOnBlur}
      autoComplete='off'
      {...props}
    />
  )
}

export default Input
