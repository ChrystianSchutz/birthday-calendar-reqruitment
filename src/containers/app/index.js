import React from 'react'
import { Route } from 'react-router-dom'
import Calendar from '../Calendar'
import BirthdayForm from '../BirthdayForm';
import BirthdayInformation from '../BirthdayInformation';

const App = () => (
  <div>
    <header>
      <p className="headerText">
        Birthday Calendar App - Chrystian Schutz
      </p>
    </header>
    <main>
      <Route exact path="/" component={Calendar} />
      <BirthdayForm/>
      <BirthdayInformation/>
    </main>
  </div>
)

export default App
