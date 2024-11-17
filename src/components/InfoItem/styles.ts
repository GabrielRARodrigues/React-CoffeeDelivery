import styled, { css } from 'styled-components'

import { Colors } from '.'

export const InfoItemContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

const COLORS = {
  yellow: { colorName: 'yellow', colorVariant: 500 },
  'yellow-dark': { colorName: 'yellow', colorVariant: 700 },
  gray: { colorName: 'base', colorVariant: 700 },
  purple: { colorName: 'purple', colorVariant: 500 }
} as const

interface IconContainerProps {
  $bgColor: Colors
}

export const IconContainer = styled.div<IconContainerProps>`
  ${({ theme, $bgColor }) => {
    const colorName = COLORS[$bgColor].colorName
    const colorVariant = COLORS[$bgColor].colorVariant

    return css`
      padding: 0.8rem;
      background: ${theme.colors[colorName][colorVariant]};

      border-radius: 100%;

      line-height: 0;

      & > svg {
        font-size: ${theme.sizes.md};
        color: ${theme.colors.white};
      }
    `
  }}
`
