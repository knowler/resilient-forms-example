import * as React from 'react'

export const Button = props => (
  <button
    display='inline-block'
    bg='gray.0'
    border='1px solid'
    borderColor='gray.8'
    fontSize={1}
    px={3} py={2}
    transition='0.2s ease'
    css={{
      ':hover': {
        backgroundColor: 'indigo.6',
        borderColor: 'indigo.6',
        color: 'gray.0',
      },
    }}
    {...props}
  />
)
