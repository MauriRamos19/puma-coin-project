import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import InputContainer from '../../Components/InputContainer/InputContainer'
import AuthBlueSquare from '../../Layouts/AuthBlueSquare/AuthBlueSquare'
import './Register.css'

const Register = (props) => {

    const [form, setForm] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const onSubmitHandler = ((evt) => {
        evt.preventDefault();
        
    })

    const onChangeHanlder = (evt) => {
        setForm(
            prev => Object.assign({}, {
                ...prev,
                [evt.target.name]: evt.target.value
            })
        )
    }

    return (
        <div className='Register'>
            <div className='Register__form_wrapper'>
                <div className='Register__header'>
                    <p>
                        Have an account? <Link to='/login'>Login!</Link>
                    </p>
                </div>
                <h1>Register</h1>
                <form className='Register__form' onSubmit={onSubmitHandler}>
                    <InputContainer>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            value={form.email}
                            onChange={onChangeHanlder} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='username'>Username</label>
                        <input 
                            type='text' 
                            name='username' 
                            id='username' 
                            value={form.username}
                            onChange={onChangeHanlder} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            value={form.password}
                            onChange={onChangeHanlder} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input 
                            type='password' 
                            name='confirmPassword' 
                            id='confirmPassword' 
                            value={form.confirmPassword}
                            onChange={onChangeHanlder} />
                    </InputContainer>
                    <Button type='submit'>Register!</Button>
                </form>
            </div>
            <AuthBlueSquare />
        </div>
    )
}

export default Register