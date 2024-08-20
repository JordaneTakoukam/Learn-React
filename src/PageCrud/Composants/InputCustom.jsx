import React from 'react'

function InputCustom({ label, value, setValue, placeholder }) {
    return (
        <div className='space-y-2'>
            <label>{label}</label>
            <input
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                placeholder={placeholder}
                className='w-full border border-blue-500 rounded h-10 px-3' />
        </div>
    )
}

export default InputCustom