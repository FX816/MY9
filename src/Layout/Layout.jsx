import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
        <div className='bg-oq dark:bg-dakr text-qora dark:text-oq duration-300'>
            <Header />

            {children}

            <Footer />            
        </div>

        </>
    )
}

export default Layout