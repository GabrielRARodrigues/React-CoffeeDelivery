import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'

import { CartContextProvider } from './contexts/CartContext'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
