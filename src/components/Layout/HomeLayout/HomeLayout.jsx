import React from 'react'
import HeroForm from '../../Header/HeroForm'

const HomeLayout = ({children}) => {
  return (
    <>
      {/* <HeroForm /> */}
      <div>{children}</div>
    </>
  )
}

export default HomeLayout