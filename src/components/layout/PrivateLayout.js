import React from 'react'
import { Footer } from './partials/Footer'
import { PrivateHeader } from './partials/PrivateHeader'


export const PrivateLayout = ({children}) => {
    return (
        <div>
            <div className="private-layout">
            <PrivateHeader/>
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
