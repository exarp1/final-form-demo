import React from 'react'

import { Form, FormSpy, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(1000) // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2))
}
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
        >
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit} validate={values => {}}>
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
                      <label>First Name</label>
                      <input {...input} placeholder={placeholder} />
                      {meta.error && meta.touched && (
                        <span style={styles.error}>{meta.error}</span>
                      )}
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
                      <label>Last Name</label>
                      <input {...input} placeholder={placeholder} />
                      {meta.error && meta.touched && (
                        <span style={styles.error}>{meta.error}</span>
                      )}
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
                      <label>Email</label>
                      <input {...input} placeholder={placeholder} />
                      {meta.error && meta.touched && (
                        <span style={styles.error}>{meta.error}</span>
                      )}
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
