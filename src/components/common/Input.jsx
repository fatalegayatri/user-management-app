import React from 'react'

const Input = (props) => {
    console.log(props, "gayatri");

    return (
        <input
            {...props}
            className='border border-gray-200 focus:outline-primary  focus:outline-3 active:ring-0   rounded-lg placeholder:text-gray-600 w-full p-2 mt-2'
        />
    )
}

export default Input