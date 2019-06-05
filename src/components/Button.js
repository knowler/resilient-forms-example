import * as React from 'react'

export const Button = props => (
  <button
    display='inline-block'
    bg='blue.2'
    border='1px solid'
    borderColor='blue.3'
    borderRadius='0.25rem'
    color='blue.8'
    fontSize={1}
    fontWeight={500}
    px={3} py={2}
    transition='0.2s ease'
    css={{
      ':hover, :focus': {
        backgroundColor: 'blue.6',
        borderColor: 'blue.6',
        color: 'blue.0',
      },
    }}
    {...props}
  />
)
