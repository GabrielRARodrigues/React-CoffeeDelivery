import styled, { css } from 'styled-components'

export const SuccessContainer = styled.main`
  padding-top: 8rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > section:first-of-type {
    width: 100%;
    max-width: 52.6rem;

    & > p {
      font-size: ${({ theme }) => theme.sizes.xlg};
      color: ${({ theme }) => theme.colors.base[700]};
    }
  }

  & > section:last-of-type {
    display: flex;
    align-items: flex-start;

    & > img {
      object-fit: cover;
      object-position: 0 1rem;
    }
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 1.6rem;

    font-family: ${theme.fonts.secondary};
    font-size: ${theme.sizes.xxxlg};
    font-weight: 800;
    color: ${theme.colors.yellow[700]};
  `}
`

export const DeliveryInfo = styled.div`
  width: 100%;
  padding: 4rem;
  margin-top: 4rem;
  background: ${({ theme }) => theme.colors.background};

  border-radius: 6px 36px 6px 36px;

  position: relative;

  &::before {
    content: '';

    margin: -1px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.yellow[500]},
      ${({ theme }) => theme.colors.purple[500]}
    );

    border-radius: 6px 36px 6px 36px;

    position: absolute;
    inset: 0;
    z-index: -1;
  }
`

export const DeliveryInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  list-style-type: none;
`
