import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Register.css'
import Button from '../../Components/Button/Button'
import InputContainer from '../../Components/InputContainer/InputContainer'
import AuthBlueSquare from '../../Layouts/AuthBlueSquare/AuthBlueSquare'
import { register as registerService } from '../../services/auth'
import { registerForm as initialDataForm } from '../../Utils/initialData'

const Register = (props) => {

    const [form, setForm] = useState(initialDataForm);

    const onSubmitHandler = ((evt) => {
        evt.preventDefault();
        console.log(form)
        registerService(form)
        console.log('asd')
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
                        <label htmlFor='nickName'>Nickname</label>
                        <input 
                            type='text' 
                            name='nickName' 
                            id='nickName' 
                            value={form.nickName}
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
                        <label htmlFor='password2'>Confirm Password</label>
                        <input 
                            type='password' 
                            name='password2' 
                            id='password2' 
                            value={form.password2}
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