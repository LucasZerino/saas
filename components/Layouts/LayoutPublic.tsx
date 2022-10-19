import React from 'react'

interface Props{
    children: React.ReactNode
}

export const LayoutPublic = ({children}: Props) => {
    return(
        <>
        <h1>Public Layout</h1>
        {children}
        </>
    )
}