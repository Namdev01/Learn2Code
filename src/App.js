import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Cf from './Sites/Codeforces/Cf'
import Cc from './Sites/Codechef/cc'
import Leetcode from './Sites/Leetcode/leetcode'
import Atcoder from './Sites/Atcoder/atcoder'
import Resource from './Sites/Resource/Resource'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Cf" component={Cf} />
          <Route path="/Cc" component={Cc} />
          <Route path="/Leetcode" component={Leetcode} />
          <Route path="/Atcoder" component={Atcoder} />
          <Route path="/Resource" component={Resource} />
          <Route path="/" component={Cf} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
