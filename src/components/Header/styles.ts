import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  padding-block: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`

export const LocationCard = styled.div`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.purple[300]};

  display: flex;
  align-items: center;
  gap: 0.4rem;

  border-radius: 6px;

  & > span {
    font-size: ${({ theme }) => theme.sizes.sm};
    color: ${({ theme }) => theme.colors.purple[700]};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.purple[500]};
  }
`

export const Cart = styled(Link)`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.yellow[300]};

  display: flex;

  border-radius: 6px;

  position: relative;

  & > svg {
    color: ${({ theme }) => theme.colors.yellow[700]};
  }

  & > span {
    padding-inline: 0.6rem;
    background: ${({ theme }) => theme.colors.yellow[700]};

    font-size: ${({ theme }) => theme.sizes.xsm};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};

    border-radius: 1000px;

    position: absolute;
    right: 0.4rem;
    top: 0.2rem;

    transform: translate(50%, -50%);
  }
`
