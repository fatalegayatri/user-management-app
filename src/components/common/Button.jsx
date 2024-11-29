import React from 'react'

const Button = (props) => {
    const { children } = props;
    return (
        <button
            {...props}
            className='bg-primary w-full text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-all'
        >
            {children}
        </button>
    )
}

export default Button