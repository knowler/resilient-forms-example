import * as React from 'react'
import PropTypes from 'prop-types'
import { useFormState } from 'informed'
import { set } from 'idb-keyval'
import { Button } from '@components'

export const Save = ({ children, ...props }) => {
  const formState = useFormState()

  const handleSave = () => {
    set('submission', formState.values)
  }

  return (
    <Button type='button' onClick={handleSave} {...props} >
      {children || 'Save'}
    </Button>
  )
}

Save.propTypes = {
  children: PropTypes.node,
}
