import React from 'react'

function Button({ className, children }) {
    return (
        <button className={`${className} capitalize rounded-[56px] font-jakarta font-bold text-[18px] text-white cursor-pointer`}>
            {children}
        </button>
    )
}

export default Button