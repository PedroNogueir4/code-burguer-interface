import React from 'react'
import { PropTypes } from 'prop-types'

import { ButtonContainer } from './styles'

export function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}

Button.propTypes = {
  children: PropTypes.string
}
