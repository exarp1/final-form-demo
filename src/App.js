import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Form, Field } from 'react-final-form'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>✓FINAL FORM✓</h1>
        <Form
          onSubmit={values =>
            window.alert(JSON.stringify(values, undefined, 2))
          }
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  name={'firstName'}
                  label={'First Name'}
                  placeholder={'Enter First Name'}
                />
                <TextField
                  name={'lastName'}
                  label={'Last Name'}
                  placeholder={'Enter Last Name'}
                />
                <TextField
                  name={'email'}
                  label={'email'}
                  placeholder={'Enter email'}
                  type={'email'}
                />
              </div>
              <button type='submit'>Submit</button>
            </form>
          )}
        </Form>
      </div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export const TextField = props => {
  const { error, touched, name, label, placeholder } = props
  const styles = {
    container: { margin: 10 },
    error: {
      marginTop: 5,
      fontSize: '0.8em',
      color: 'red',
    },
  }

  return (
    <Field component='input' {...props}>
      {({ input, meta }) => (
        <div style={styles.container}>
          <label>{label}</label>
          <input {...props} />
          {error && touched && <div style={styles.error}>{error}</div>}
        </div>
      )}
    </Field>
  )
}

export default App
