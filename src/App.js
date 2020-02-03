import React from 'react'

import { TextField } from 'rmwc'
import '@material/textfield/dist/mdc.textfield.css'
import '@material/floating-label/dist/mdc.floating-label.css'
import '@material/notched-outline/dist/mdc.notched-outline.css'
import '@material/line-ripple/dist/mdc.line-ripple.css'

import { Form, FormSpy, Field } from 'react-final-form'
import createDecorator from 'final-form-focus'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(1000) // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2))
}
const focusOnError = createDecorator()
const required = value => (value ? undefined : 'Required')

const styles = {
  active: isActive => {
    return isActive
      ? { borderColor: 'green', borderWidth: 10, background: 'lightGreen' }
      : { borderColor: 'grey', borderWidth: 10 }
  },
  error: {
    fontWeight: 800,
    color: 'red',
  },
}

function App() {
  return (
    <div className='App'>
      <div>
        <h1>✓FINAL FORM✓</h1>
        <Form
          onSubmit={showResults}
          subscription={{
            submitting: true,
          }}
          decorators={[focusOnError]}
        >
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name='firstName'
                  component='input'
                  placeholder='First Name'
                  validate={required}
                  subscription={{
                    value: true,
                    active: true,
                    error: true,
                    touched: true,
                  }}
                >
                  {({ input, meta, placeholder }) => (
                    <div style={styles.active(meta.active)}>
                      <Input
                        {...input}
                        {...meta}
                        type={'text'}
                        label={placeholder}
                        placeholder={placeholder}
                      />
                    </div>
                  )}
                </Field>
                <Field
                  name='lastName'
                  component='input'
                  placeholder='Last Name'
                  validate={required}
                  subscription={{
                    value: true,
                    active: true,
                    error: true,
                    touched: true,
                  }}
                >
                  {({ input, meta, placeholder }) => (
                    <div style={styles.active(meta.active)}>
                      <Input
                        {...input}
                        {...meta}
                        type={'text'}
                        label={placeholder}
                        placeholder={placeholder}
                      />
                    </div>
                  )}
                </Field>
                <Field
                  name='email'
                  component='input'
                  placeholder='email'
                  validate={required}
                  subscription={{
                    value: true,
                    active: true,
                    error: true,
                    touched: true,
                  }}
                >
                  {({ input, meta, placeholder }) => (
                    <div style={styles.active(meta.active)}>
                      <Input
                        {...input}
                        {...meta}
                        type={'email'}
                        label={'Email'}
                        placeholder={placeholder}
                      />
                    </div>
                  )}
                </Field>
              </div>
              <button type='submit' disabled={submitting}>
                Submit
              </button>
              <FormSpy subscription={{ values: true }}>
                {({ values }) => (
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
                )}
              </FormSpy>
            </form>
          )}
        </Form>
      </div>
    </div>
  )
}

export const Input = props => {
  const { error, touched, active, type } = props
  const styles = {
    container: { margin: 10 },
    active: isActive => {
      return isActive
        ? { borderColor: 'green', borderWidth: 10, background: 'lightGreen' }
        : { borderColor: 'grey', borderWidth: 10 }
    },
    error: {
      fontWeight: 800,
      color: 'red',
    },
  }

  return (
    <div style={{ ...styles.active(active), ...styles.container }}>
      <TextField type={type} invalid={error} {...props} />
      {error && touched && <div style={styles.error}>{error}</div>}
    </div>
  )
}

export default App
