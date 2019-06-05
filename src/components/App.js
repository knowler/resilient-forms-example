import * as React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Text, TextArea } from 'informed'
import { globalStyles, theme } from '@theme'
import { Button } from '@components'
import { Form, Reset, Save } from '@components/forms'

const Label = props => (
  <label
    display='block'
    fontSize={0}
    fontFamily='sans-serif'
    marginBottom={1}
    {...props}
  />
)

export const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <main>
      <Form>
        <p>
          <Label htmlFor='full_name'>Full Name</Label>
          <Text
            id='full_name'
            field='full_name'
            p={2}
            fontSize={1}
            borderWidth={1}
            borderColor='black'
          />
        </p>
        <p>
          <Label htmlFor='email'>Email</Label>
          <Text
            id='email'
            field='email'
            p={2}
            fontSize={1}
            borderWidth={1}
            borderColor='black'
          />
        </p>
        <p>
          <Label htmlFor='message'>Message</Label>
          <TextArea
            id='message'
            field='message'
            p={2}
            fontFamily='sans-serif'
            fontSize={1}
            borderWidth={1}
            borderColor='black'
          />
        </p>
        <Button type='submit'>Submit</Button>
        <Save ml={2} />
        <Reset ml={2} />
      </Form>
    </main>
  </ThemeProvider>
)
