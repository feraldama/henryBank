import React from 'react'
import {Route} from 'react-router-dom'
import Form from './components/Form/Form'

const App = () => {
  return(
    <Route 
    path = '/:userId'
    render = {(match) => <Form userId={match} />} />
  )
}

export default App

