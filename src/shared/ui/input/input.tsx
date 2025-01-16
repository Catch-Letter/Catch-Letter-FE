import { ComponentProps, FC, FocusEventHandler, useCallback, useState } from 'react'
import { inputStyles } from './input.styles'

interface Props extends ComponentProps<'input'> {
  invalid?: boolean
}

const Input: FC<Props> = ({ value, onChange, invalid = false, placeholder, onBlur, ...props }) => {
  const [isInvalid, setIsInvalid] = useState(false)
  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback((e) => {
    onBlur?.(e)
    setIsInvalid(invalid)
  }, [])

  return (
    <input
      css={inputStyles}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={isInvalid}
      onBlur={handleOnBlur}
      {...props}
    />
  )
}

export default Input
