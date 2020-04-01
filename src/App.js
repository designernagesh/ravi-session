import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Container from './components/Container'
import UsingCSS from './components/UsingCSS'
import Form from './components/Form'

function App() {
  return (
    <div>

      <div className="container-flud">
        <div className="row">
          <div className="col-md-3">
            <Container />
          </div>

          <div className="col-md-3">
            <UsingCSS />
          </div>

          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
