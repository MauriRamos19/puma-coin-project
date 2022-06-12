import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import InputContainer from '../../Components/InputContainer/InputContainer'
import AuthBlueSquare from '../../Layouts/AuthBlueSquare/AuthBlueSquare'
import './Register.css'

const Register = (props) => {
    return (
        <div className='Register'>
            <div className='Register__form_wrapper'>
                <div className='Register__header'>
                    <p>
                        Have an account? <Link to='/login'>Login!</Link>
                    </p>
                </div>
                <h1>Register</h1>
                <form className='Register__form'>
                    <InputContainer>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' id='username' />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type='password' name='confirmPassword' id='confirmPassword' />
                    </InputContainer>
                    <Button>Register!</Button>
                </form>
            </div>
            <AuthBlueSquare />
        </div>
    )
}

export default Register