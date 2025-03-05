import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-12 md:px-16 bg-white min-h-screen flex flex-col items-stretch">
            {children}
        </div>
    )
}

export default Container
