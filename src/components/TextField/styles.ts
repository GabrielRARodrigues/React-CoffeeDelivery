import styled, { css } from 'styled-components'

interface TextFieldContainerProps {
  $optional: boolean
}

export const TextFieldContainer = styled.div<TextFieldContainerProps>`
  width: 100%;
  height: 4.2rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.base[200]};

  display: flex;

  border: 1px solid ${({ theme }) => theme.colors.base[300]};
  border-radius: 4px;

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.yellow[700]};
  }

  & > input {
    width: 100%;
    background: transparent;

    font-size: ${({ theme }) => theme.sizes.sm};

    border: 0;

    outline: none;

    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.base[500]};
    }
  }

  ${({ theme, $optional }) =>
    $optional &&
    css`
      &::after {
        content: 'Opcional';

        font-size: ${theme.sizes.xsm};
        color: ${theme.colors.base[500]};
        font-style: italic;
      }
    `}
`
