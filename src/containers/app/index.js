import React from 'react'
import { Route } from 'react-router-dom'
import Calendar from '../Calendar'

const App = () => (
  <div>
    <header>
      <p className="headerText">
        Birthday Calendar App - Chrystian Schutz
      </p>
    </header>
    <main>
      <Route exact path="/" component={Calendar} />
    </main>
  </div>
)

export default App
