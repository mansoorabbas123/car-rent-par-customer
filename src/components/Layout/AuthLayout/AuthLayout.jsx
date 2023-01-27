import React from 'react'
import { Styled } from './AuthLayout.styled'

const AuthLayout = ({children}) => {
  return (
   <Styled.AuthWrapper>
    {children}
   </Styled.AuthWrapper>
  )
}

export default AuthLayout