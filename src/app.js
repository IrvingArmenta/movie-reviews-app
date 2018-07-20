import React from 'react'
import { hot } from 'react-hot-loader'

// specific element styles [css modules]
import style from './app.module.scss'

// css global styles
import globalStyles from './common/styles/common.scss'

// scss modules test
console.log(style.section);

const App = () => {
  return(
    <section className={style.section}>
      <h1>Hello darkness my old friend</h1>
    </section>
  )
}

export default hot(module)(App)
