import React from 'react'

interface Props{
    children: React.ReactNode
}

export const LayoutTenant = ({children}: Props) => {
    return(
        <>
        <h1>Tenant Layout</h1>
        {children}
        </>
    )
}