import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import PersonCard from './components/PersonCard'

function App() {


  return (
    <div className="App">
      <Form></Form>
      <PersonCard></PersonCard>
    </div>
  )
}

export default App
