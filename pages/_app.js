import '../styles/globals.scss'
import '../styles/index.scss'

import { Fragment } from 'react'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
