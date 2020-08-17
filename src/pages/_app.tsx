import 'react-app-polyfill/ie11'
import 'core-js/features/array/find'
import 'core-js/features/array/find-index'
import 'core-js/features/array/includes'
import 'core-js/features/object/values'

import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChartBar, faCrown } from '@fortawesome/free-solid-svg-icons'
import { createStore } from '@/state/store'
import theme from '@/styles/theme'

// icon
library.add(faHome, faChartBar, faCrown)

// css
import 'sanitize.css'

const store = createStore()

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
