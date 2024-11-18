import styled from 'styled-components'

export const RadioContainer = styled.label`
  width: 100%;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.base[300]};

  font-size: ${({ theme }) => theme.sizes.xsm};
  line-height: 0;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.base[300]};
  border-radius: 6px;

  cursor: pointer;

  transition: all 200ms;

  &:has(input:checked) {
    border: 1px solid ${({ theme }) => theme.colors.purple[500]};
    background-color: ${({ theme }) => theme.colors.purple[300]};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.purple[500]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.base[400]};

    color: ${({ theme }) => theme.colors.base[700]};
  }
`
