import * as React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { globalStyles, theme } from '@theme'
import { Button } from '@components'
import { Form, Reset, Save, Fields } from '@components/forms'

export const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <main display='flex' justifyContent='center' alignItems='center' css={{height: '100%'}}>
      <Form>
        <Fields fields={window.form} wrapWith='p' />
        <Button type='submit'>Submit</Button>
        <Save ml={2} />
        <Reset ml={2} />
      </Form>
    </main>
  </ThemeProvider>
)
