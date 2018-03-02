import React from 'react'
import Head from './Head/Head'

export default ({ children }) => (
    <div>
        <Head />
        <div className="page-main">{children}</div>
    </div>
)
