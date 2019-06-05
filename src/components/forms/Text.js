import * as React from 'react'
import PropTypes from 'prop-types'
import { Text as Base } from 'informed'
import { Label } from '@components/forms'

export const Text = ({ field, label, ...props }) => {
  return (
    <>
      <Label htmlFor={field}>{label}</Label>
      <Base
        id={field}
        field={field}
        p={2}
        fontSize={1}
        bg='gray.0'
        color='blue.9'
        borderColor='blue.3'
        borderRadius='0.25rem'
        borderStyle='solid'
        borderWidth={1}
        transition='0.2s ease'
        css={{
          ':hover, :focus': {
            borderColor: 'blue.5',
          },
        }}
        {...props}
      />
    </>
  )
}

Text.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
}
