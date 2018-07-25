import React, {Component} from 'react'
import { hot } from 'react-hot-loader'

// specific element styles [css modules]
import style from './app.module.scss'

// css global styles
import globalStyles from './common/styles/common.scss'

// scss modules test
console.log(style);

class App extends Component {
  render() {
    return(
      <section className={style.section}>
        <h1 className={style.section__title}>Hello darkness my old friend</h1>
      </section>
    )
  }
}

// react-hot-loader
export default hot(module)(App)
