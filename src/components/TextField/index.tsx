import { InputHTMLAttributes } from 'react'

import { useFormContext } from 'react-hook-form'

import { TextFieldContainer } from './styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
}

export function TextField({
  placeholder,
  name,
  className,
  required,
  id = crypto.randomUUID(),
  type = 'text',
  ...rest
}: TextFieldProps) {
  const { register } = useFormContext()

  const optional = !required

  return (
    <TextFieldContainer className={className} $optional={optional}>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber: type === 'number' })}
        {...rest}
      />
    </TextFieldContainer>
  )
}
