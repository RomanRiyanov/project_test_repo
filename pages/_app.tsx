import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { Layout } from 'features'
import { Main } from 'components/Main/Main'

import { store } from 'store'
import { ModalProvider } from 'shared/hocs/ModalContext'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Layout>
          <Main/>
        </Layout>
      </ModalProvider>
    </Provider>
  )
}

export default MyApp
