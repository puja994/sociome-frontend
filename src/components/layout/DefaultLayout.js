import React from 'react'
import { Footer } from './partials/Footer'
import { Header } from './partials/Header'

export const DefaultLayout = ({children}) => {
    return (
        <div>
            <div className="default-layout">
            <Header/>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
