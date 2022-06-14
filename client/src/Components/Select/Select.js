import React from 'react'

const Select = ({ options, name, value, id, className }) => {
    return (
        <select
            name={name}
            value={value}
            id={id}
            className={`Select ${className}`}
        >
            {options.map(
                option =>
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.value}
                    </option>
                )
            }
        </select>
    )
}

export default Select