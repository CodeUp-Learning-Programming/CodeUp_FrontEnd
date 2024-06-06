import React from 'react'
import style from './Input.module.css'

const Input = ({ id, label,title, setValue, ...props }) => {
    return (
        <>
            <label style={style.label} htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                title={title}
                onChange={({ target }) => setValue(target.value)}
                {...props}
            />
        </>
    );
};


export default Input