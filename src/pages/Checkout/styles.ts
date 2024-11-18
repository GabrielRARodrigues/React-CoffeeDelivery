import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 3.2rem;
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 1.6rem;

    font-family: ${theme.fonts.secondary};
    font-size: ${theme.sizes.lg};
    font-weight: 700;
    color: ${theme.colors.base[700]};
  `}
`

export const CartItensCard = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.colors.base[100]};

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  border-radius: 6px 44px 6px 44px;
`

export const CartItensList = styled.ul`
  max-height: 26rem;

  list-style-type: none;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  & ::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.base[400]};
    border-radius: 10px;
  }

  & > li {
    padding-block: 2.4rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.base[300]};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-size: ${({ theme }) => theme.sizes.sm};
    }

    strong {
      font-size: ${({ theme }) => theme.sizes.xlg};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.base[700]};
    }
  }
`

export const ConfirmationButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.yellow[500]};

  font-size: ${({ theme }) => theme.sizes.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  transition: all 200ms;

  &:hover {
    background: ${({ theme }) => theme.colors.yellow[700]};
  }
`
