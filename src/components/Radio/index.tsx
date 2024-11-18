import { InputHTMLAttributes } from 'react'

import { useFormContext } from 'react-hook-form'

import { RadioContainer } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Radio({ name, children, ...rest }: RadioProps) {
  const { register } = useFormContext()

  return (
    <RadioContainer>
      <input type="radio" {...rest} className="sr-only" {...register(name)} />
      {children}
    </RadioContainer>
  )
}
