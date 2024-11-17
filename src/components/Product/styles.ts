import styled, { css } from 'styled-components'

export const ProductContainerBase = styled.div`
  background: ${({ theme }) => theme.colors.base[100]};

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.base[700]};
`

export const ProductCatalogContainer = styled(ProductContainerBase)`
  ${({ theme }) => css`
    width: 25.6rem;
    padding: 2rem 2.4rem;

    text-align: center;

    border-radius: 6px 36px 6px 36px;

    flex-direction: column;

    & > img {
      width: 12rem;
      margin-top: -4rem;
    }

    & > h3 {
      margin-bottom: 0.8rem;

      font-family: ${theme.fonts.secondary};
      font-size: ${theme.sizes.xlg};
      font-weight: 700;
    }

    & > p {
      font-size: ${theme.sizes.sm};
      color: ${theme.colors.base[500]};
    }
  `}
`

export const ProductCartContainer = styled(ProductContainerBase)`
  width: 100%;
  max-width: 36.8rem;
  padding: 0.8rem 0.4rem;

  display: flex;
  gap: 2rem;

  & > img {
    width: 6.4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h3 {
      font-size: ${({ theme }) => theme.sizes.md};
      font-weight: 400;
    }
  }
`

export const Tags = styled.div`
  margin-block: 1.2rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const Tag = styled.span`
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors.yellow[300]};

  font-size: ${({ theme }) => theme.sizes.xxsm};
  color: ${({ theme }) => theme.colors.yellow[700]};
  font-weight: 700;
  text-transform: uppercase;
  line-height: initial;

  border-radius: 100px;
`

export const PriceAndActions = styled.div`
  width: 100%;
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceBase = styled.span`
  color: ${({ theme }) => theme.colors.base[600]};
`

export const CatalogPrice = styled(PriceBase)`
  ${({ theme }) => css`
    font-size: ${theme.sizes.sm};

    & > strong {
      font-family: ${theme.fonts.secondary};
      font-size: ${theme.sizes.xxlg};
      font-weight: 800;
    }
  `}
`

export const CartPrice = styled(PriceBase)`
  margin-left: auto;

  font-weight: 700;

  align-self: start;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const CartButton = styled.button`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.purple[700]};

  color: ${({ theme }) => theme.colors.base[100]};
  line-height: 0;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: all 200ms;

  &:hover {
    background: ${({ theme }) => theme.colors.purple[500]};
  }
`

export const RemoveButton = styled.button`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.base[300]};

  font-size: ${({ theme }) => theme.sizes.xsm};
  color: ${({ theme }) => theme.colors.base[600]};
  text-transform: uppercase;
  line-height: initial;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  transition: all 200ms;

  & > svg {
    font-size: ${({ theme }) => theme.sizes.md};
    color: ${({ theme }) => theme.colors.purple[500]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.base[400]};

    color: ${({ theme }) => theme.colors.base[700]};

    & > svg {
      color: ${({ theme }) => theme.colors.purple[700]};
    }
  }
`
