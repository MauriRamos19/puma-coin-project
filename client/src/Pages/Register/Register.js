import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Register.css'
import Button from '../../Components/Button/Button'
import InputContainer from '../../Components/InputContainer/InputContainer'
import AuthBlueSquare from '../../Layouts/AuthBlueSquare/AuthBlueSquare'
import { register as registerService } from '../../services/auth'
import { registerForm as initialDataForm } from '../../Utils/initialData'
import Message from '../../Components/Message/Message'
import LoaderEllipsis from '../../Components/Loaders/Ellipsis/LoaderEllipsis'


const Register = ({ dispatchModal }) => {

    const [form, setForm] = useState(initialDataForm)
    const [message, setMessage] = useState({ active: false });
    const navigate = useNavigate();

    const onSubmitHandler = (async (evt) => {

        evt.preventDefault();

        // setMessage({
        //     active: true, 
        //     type: 'loading', 
        //     message: <LoaderEllipsis /> 
        // })

        const { token, error } = await registerService(form);

        if (error || !token) {

            setMessage({
                active: true,
                type: 'error',
                message: error
            })

            return;
        }

        localStorage.setItem("token", token);
        navigate('/');
    })

    const onChangeHanlder = (evt) => {

        setForm(prev => Object.assign({}, {
            ...prev,
            [evt.target.name]: evt.target.value
        }))

        setMessage({ active: false })
    }

    return (
        <div className='Register'>
            <div className='Register__form_wrapper'>

                <div className='Register__header'>
                    <p>
                        ¿Ya tienes cuenta? <Link to='/login'>¡Inicia sesión!</Link>
                    </p>
                </div>

                <h1>Registro</h1>

                <form className='Register__form' onSubmit={onSubmitHandler}>

                    {message.active &&
                        <Message
                            type={message.type}
                            message={message.message} />
                    }

                    <InputContainer>
                        <label htmlFor='email'>Correo</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={form.email.value}
                            onChange={onChangeHanlder}
                            required />
                        <span className='error-field'>{form.email.errorMsg}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='nickName'>Nombre de Usuario</label>
                        <input
                            type='text'
                            name='nickName'
                            id='nickName'
                            value={form.nickName.value}
                            onChange={onChangeHanlder}
                            required />
                        <span className='error-field'>{form.email.errorMsg}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={form.password.value}
                            onChange={onChangeHanlder}
                            required />
                        <span className='error-field'>{form.email.errorMsg}</span>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor='password2'>Confirmar Contraseña</label>
                        <input
                            type='password'
                            name='password2'
                            id='password2'
                            value={form.password2.value}
                            onChange={onChangeHanlder}
                            required />
                        <span className='error-field'>{form.email.errorMsg}</span>
                    </InputContainer>
                    <Button type='submit'>¡Registrarse!</Button>
                </form>
            </div>
            <AuthBlueSquare />
        </div>
    )
}

export default Register