import React, { useState } from 'react'

import imagePlaceHolder from '../../Assets/images/userImagePlaceHolder.png'
import Button from '../../Components/Button/Button'
import InputContainer from '../../Components/InputContainer/InputContainer'
import InputFileWithPreview from '../../Components/InputFileWithPreview/InputFileWithPreview'
import InputWithLabel from '../../Components/InputWithLabel/InputWithLabel'
import Select from '../../Components/Select/Select'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import './FinishRegister.css'

const sexOptions = [
    { id: "m", value: "Male" },
    { id: "f", value: "Female" },
    { id: "o", value: "Other" }
]

const departmentsOptions = [
    { id: "Atlántida", value: "Atlántida" },
    { id: "Choluteca", value: "Choluteca" },
    { id: "Colón", value: "Colón" },
    { id: "Copán", value: "Copán" },
    { id: "Cortés", value: "Cortés" },
    { id: "El Paraíso", value: "El Paraíso" },
    { id: "Francisco Morazán", value: "Francisco Morazán" },
    { id: "Gracias a Dios", value: "Gracias a Dios" },
    { id: "Intibucá", value: "Intibucá" },
    { id: "Islas de la Bahía", value: "Islas de la Bahía" },
    { id: "La Paz", value: "La Paz" },
    { id: "Lempira", value: "Lempira" },
    { id: "Ocotepeque", value: "Ocotepeque" },
    { id: "Olancho", value: "Olancho" },
    { id: "Santa Bárbara", value: "Santa Bárbara" },
    { id: "Valle", value: "Valle" },
    { id: "Yoro", value: "Yoro" },
]

const FinishRegister = (props) => {
    return (
        <div className="FinishRegister">
            <form className="FinishRegister__form">
                <div className="FinishRegister__header">
                    <h1>Almost There!</h1>
                    <p>we need a little more info about yourself just to protect your account.</p>
                </div>
                <div className="FinishRegister__photo">
                    <InputFileWithPreview
                        name="profilePhoto"
                        alt="profilePhoto"
                        imagePlaceHolder={imagePlaceHolder}
                    />
                </div>
                <div className="FinishRegister__inputs">
                    <WrapperDirection direction="vertical">
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="First Name">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Write your first name" />
                            </InputWithLabel>
                            <InputWithLabel label="Last Name">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Write your last name" />
                            </InputWithLabel>
                        </WrapperDirection>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Sex">
                                <Select
                                    options={sexOptions}
                                    name="sex" />
                            </InputWithLabel>
                            <InputWithLabel label="Phone">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Write your phone" />
                            </InputWithLabel>
                        </WrapperDirection>

                        <InputWithLabel label="Address 1">
                            <input
                                type="text"
                                name="address1"
                                placeholder="Write your address 1" />
                        </InputWithLabel>

                        <InputWithLabel label="Address 2">
                            <input
                                type="text"
                                name="address2"
                                placeholder="Write your address 2" />
                        </InputWithLabel>

                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="Country">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="wirte your country" />
                            </InputWithLabel>
                            <InputWithLabel label="Department">
                                <input
                                    type="text"
                                    name="department"
                                    placeholder="wirte your department" />
                            </InputWithLabel>
                            
                            
                        </WrapperDirection>
                        
                        <WrapperDirection direction="horizontal">
                            <InputWithLabel label="City">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="wirte your city" />
                            </InputWithLabel>
                            <InputWithLabel label="Zip Code">
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="wirte your zip Code" />
                            </InputWithLabel>
                        </WrapperDirection>
                    </WrapperDirection>
                </div>
                <div className="FinishRegister__submit-button">
                    <Button type="submit">Finish!</Button>
                </div>
            </form>
        </div>
    )
}

export default FinishRegister