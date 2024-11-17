import styled from 'styled-components'

import { Variants } from '../..'

interface CounterProps {
  $variant: Variants
}

export const CounterContainer = styled.div<CounterProps>`
  padding: ${({ $variant }) => ($variant === 'cart' ? '0.6rem' : '0.8rem')};
  background: ${({ theme }) => theme.colors.base[300]};

  display: flex;
  align-items: center;
  gap: 0.4rem;

  border-radius: 6px;

  & > button {
    background: transparent;

    line-height: 0;

    border: none;

    cursor: pointer;

    transition: all 200ms;

    svg {
      font-size: ${({ theme }) => theme.sizes.sm};
      color: ${({ theme }) => theme.colors.purple[500]};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.purple[700]};
      }
    }
  }

  & > span {
    min-width: 2rem;

    text-align: center;
    color: ${({ theme }) => theme.colors.base[800]};
    line-height: initial;
  }
`
