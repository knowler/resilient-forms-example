import * as React from 'react'
import PropTypes from 'prop-types'
import { useFormApi } from 'informed'
import { del } from 'idb-keyval'
import { Button } from '@components'

export const Reset = ({ children, ...props }) => {
  const formApi = useFormApi()

  const handleReset = () => {
    formApi.reset()

    del('submission')
  }

  return (
    <Button type='button' onClick={handleReset} {...props} >
      {children || 'Reset'}
    </Button>
  )
}

Reset.propTypes = {
  children: PropTypes.node,
}
