import React, { useEffect, useState } from 'react'

import InputFileWithPreview from '../../Components/InputFileWithPreview/InputFileWithPreview'
import imagePlaceHolder from '../../Assets/images/userImagePlaceHolder.png'
import WrapperDirection from '../../Components/WrapperDirection/WrapperDirection'
import InputWithLabel from '../../Components/InputWithLabel/InputWithLabel'
import Button from '../../Components/Button/Button'

//import './Settings.css'


const Settings = () => {

  const sexOptions = [
    { id: "m", value: "masculino", option: "Masculino" },
    { id: "f", value: "femenino", option: "Femenino" },
    { id: "o", value: "otro", option: "Otro" }
]

  const [user, setUser] = useState({
    name: '',
    lastName: '',
    img: '',
    gender: sexOptions[0].value,
    phone: '',
    address: '',
    address2: '',
    country: '',
    department: '',
    city: '',
    zipCode: '',
    userType: 'natural'
});

  const onChangeHandler = (evt) => {

    const propery = evt.target.name;
    const value = evt.target.value;

    setUser(prev => Object.assign({}, {
        ...prev,
        [propery]: value
    }));
}

  return (
    <div className='Senttings__pag' >
      <form>
        <div>
          <h1>Perfil del Usuario</h1>
          <p>Permitenos ayudarte a Mantener Actualizado tu Perfil</p>          
        </div>
        <div>
          <InputFileWithPreview
              name="img"
              alt="img"
              imagePlaceHolder={imagePlaceHolder}
              onChange={onChangeHandler}
              value={user.img}
            />
        </div>
        <div>
        <WrapperDirection direction="vertical">
            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Primer Nombre">
                <input
                  type="text"
                  name="name"
                  placeholder="Escriba su primer Nombre"
                  onChange={onChangeHandler}
                  value={user.name} />
              </InputWithLabel>
              <InputWithLabel label="Apellido">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Escriba su Apellido"
                  onChange={onChangeHandler}
                  value={user.lastName} />
              </InputWithLabel>
              
              <InputWithLabel label="Correo Electronico">
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.name} />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
                <InputWithLabel label="Telefono">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Escriba su Telefono"
                    onChange={onChangeHandler}
                    value={user.phone} />
                </InputWithLabel>
            </WrapperDirection>    
              <WrapperDirection direction="horizontal">
                <InputWithLabel label="Contraseña Actual">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Escriba su Contraseña Actual"
                    onChange={onChangeHandler}
                    value={user.phone} />
                </InputWithLabel>
                <InputWithLabel label="Nueva Contraseña">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Escriba su Nueva Contraseña"
                    onChange={onChangeHandler}
                    value={user.phone} />
                </InputWithLabel>
                <InputWithLabel label="Confirme su Contraseña">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Repita su Contraseña"
                    onChange={onChangeHandler}
                    value={user.phone} />
                </InputWithLabel>
              
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Pais">
                <input
                  type="text"
                  name="country"
                  placeholder="Escriba su País"
                  onChange={onChangeHandler}
                  value={user.country} />
              </InputWithLabel>
                            
              <InputWithLabel label="Departamento">
                <input
                  type="text"
                  name="department"
                  placeholder="Escriba su Departamento"
                  onChange={onChangeHandler}
                  value={user.department} />
              </InputWithLabel>

              <InputWithLabel label="Dirección ">
              <input
                type="text"
                name="address2"
                placeholder="Escriba su Direccion Actual"
                onChange={onChangeHandler}
                value={user.address2} />
            </InputWithLabel>


            </WrapperDirection>

            


        </WrapperDirection>
    </div>
      <div>
        <Button type="submit">Actulizar!</Button>
      </div>
      </form>
    </div>
  )
}


export default Settings;