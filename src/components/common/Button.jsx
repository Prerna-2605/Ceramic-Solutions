import React from 'react'

function Button({ className, children }) {
    return (
        <button className={`${className} capitalize rounded-[56px] font-jakarta font-bold text-[18px] whitespace-nowrap text-white cursor-pointer transition-transform duration-200 active:scale-95 `}>
            {children}
        </button>
    )
}

export default Button