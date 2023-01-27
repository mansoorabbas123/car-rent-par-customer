import React from 'react'
import HeaderTop from '../Header/HeaderTop'
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../Header/Navbar';

const Layout = ({children}) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div>
        {matches && <HeaderTop />}
        <Navbar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout