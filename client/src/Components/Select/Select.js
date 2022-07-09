import React from 'react'

const Select = ({ options, name, value, id, className, onChange }) => {
    return (
        <select
            id={id}
            name={name}
            onChange={onChange}
            value={value}
            className={`Select ${className}`}
        >
            {options.map(
                option =>
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option?.option || option.value}
                    </option>
                )
            }
        </select>
    )
}

export default Select