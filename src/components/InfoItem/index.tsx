import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'

import { IconProps } from 'phosphor-react'

import { IconContainer, InfoItemContainer } from './styles'

export type Colors = 'yellow' | 'gray' | 'purple' | 'yellow-dark'

interface InfoItemProps {
  color: Colors
  children: ReactNode
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export function InfoItem({ children, color, icon }: InfoItemProps) {
  const Icon = icon

  return (
    <InfoItemContainer>
      <IconContainer $bgColor={color}>
        <Icon weight="fill" />
      </IconContainer>
      {children}
    </InfoItemContainer>
  )
}
