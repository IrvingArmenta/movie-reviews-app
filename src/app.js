import React from 'react'
import { hot } from 'react-hot-loader'
import style from './app.module.scss'

// scss modules test
console.log(style.mainSection);

const App = () => {
  return(
    <div>
      <section className={style.mainSection}>
      <p>Hello darkness my old friend</p>
    </section>
  </div>
  )
}

export default hot(module)(App)
