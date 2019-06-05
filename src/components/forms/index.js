import * as React from 'react'
import PropTypes from 'prop-types'

/**
 * Form and Button Components
 */
export { Form } from './Form'
export { Label } from './Label'
export { Reset } from './Reset'
export { Save } from './Save'

/**
 * Field Components
 *
 * These must be imported since the field factory will use them.
 */
import { Text } from './Text'
import { TextArea } from './TextArea'

export {
  Text,
  TextArea,
}

/**
 * Field Factory
 */
export function makeField(name) {
  const fields = {
    Text,
    TextArea,
  }

  return fields[name]
}

/**
 * Field factory component
 */
export const Fields = ({ fields, wrapWith }) => (
  <>
    {fields.map(({ component, props }, key) =>  {
      const field = makeField(component)({ key, ...props })

      return wrapWith ? React.createElement(wrapWith, null, field) : field
    })}
  </>
)

Fields.propTypes = {
  fields: PropTypes.array,
  wrapWith: PropTypes.string,
}
