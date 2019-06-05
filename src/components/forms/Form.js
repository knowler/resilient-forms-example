import * as React from 'react'
import { Form as Base } from 'informed'
import { get, set } from 'idb-keyval'

export const Form = props => {
  const [formApi] = React.useState()
  const [initialValues, setInitialValues] = React.useState()

  const loadInitialValues = async () => {
    const submission = await get('submission')

    setInitialValues(submission || {})
  }
  React.useEffect(() => { loadInitialValues() }, [])

  const handleSubmit = async values => {
    if (!navigator.onLine) {
      set('submission', values)
    } else {
      await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
    }
  }

  return initialValues ? (
    <Base
      formApi={formApi}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      {...props}
    />
  ) : null
}
