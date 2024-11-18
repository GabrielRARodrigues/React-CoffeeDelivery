import styled, { css } from 'styled-components'

import background from '@/assets/images/background.png'

export const Background = styled.div`
  width: 200vw;
  height: 54.8rem;

  background: url(${background});
  background-size: auto;
  background-repeat: round;

  position: absolute;
  top: 10.8rem;

  transform: translateX(-50%);
`

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;

  & > section.coffees {
    padding-block: 3.2rem;

    h2 {
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: ${({ theme }) => theme.sizes.xxxlg};
      font-weight: 800;
      color: ${({ theme }) => theme.colors.base[700]};
    }
  }
`

export const Banner = styled.section`
  width: 100%;
  padding-block: 9.4rem;
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    ${({ theme }) => css`
      font-family: ${theme.fonts.secondary};
      font-size: ${theme.sizes['2xxlg']};
      font-weight: bold;
      color: ${theme.colors.base[800]};
      line-height: 130%;
    `}
  }

  & > p {
    margin-top: 1.6rem;

    font-size: ${({ theme }) => theme.sizes.xlg};
    color: ${({ theme }) => theme.colors.base[700]};
  }
`

export const InfoItensList = styled.ul`
  margin-top: 6.4rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 2rem;

  list-style-type: none;

  & > li {
    width: calc(50%);
  }
`

export const Coffees = styled.div`
  width: 100%;
  margin-top: 5.4rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem 3.2rem;
`
