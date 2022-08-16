import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imagePlaceHolder from "../../Assets/images/userImagePlaceHolder.png";
import Button from "../../Components/Button/Button";
import Select from "../../Components/Select/Select";
import InputWithLabel from "../../Components/InputWithLabel/InputWithLabel";
import InputFileWithPreview from "../../Components/InputFileWithPreview/InputFileWithPreview";
import WrapperDirection from "../../Components/WrapperDirection/WrapperDirection";

import "./Settings.css";
import { getUser, editUser, deleteAccount } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";

const Settings = ({withCookies, cookies, dispatchModal}) => {
  
  const navigate = useNavigate();
  
  const [token,setToken] = useState(cookies.get('x_access_token'));

  const [user, setUser] = useState({
    name: "",
    RTN:"",
    lastName: "",
    email: "",
    img: "",
    phone: "",
    currentPassword:"",
    newPassword:"",
    newPassword2:"",
    address: "",
    address2: "",
    country: "",
    department: "",
    city: "",
    zipCode: "",
    userType: "",
    verified: false
  });
  const [profileImage, setProfileImage] = useState({});  
  const [disabled, setDisabled] = useState(true)


  useEffect(  () => {

    getUser(token).then(data => {
      setUser( (prev) => {
        return {
          ...prev,
          ...data.user
        };
      });
      data.user.verified === true ? setDisabled(false) : setDisabled(true);
      setProfileImage(data.user.img)
    });

  }, [token]); 

  const onChangeHandler = (evt) => {
    const propery = evt.target.name;
    const value = evt.target.value;

    setUser((prev) =>
      Object.assign(
        {},
        {
          ...prev,
          [propery]: value,
        }
      )
    );
  };

  const onClickHandler = async (evt) => {
    evt.preventDefault();
    evt.target.disabled = true;

    const formData = new FormData()
        // 
 
      Object.entries(user).forEach(atributte => {
          formData.append(atributte[0].toString(),atributte[1])
      })

    await editUser(formData,token)
   
    navigate('/');
  }

  const handleDeleteUser = () =>  {
    deleteAccount(token).then(data => {
      console.log(data)
      cookies.remove('x_access_token')
      dispatchModal({ type:"close" })
      navigate('/login');
    });
  }

  const onDeleteUserHandler = (evt) => {
    console.log(dispatchModal)
    dispatchModal({ 
      type: "deleteUser",
      data:{
        title: "Borrar cuenta",
        headingIcon: (
          <FontAwesomeIcon 
            icon="fa-solid fa-triangle-exclamation" 
            style={{
              color: "rgb(237, 70, 70)",
              fontSize: "3rem"
            }} />
        ),
        description: "Cuidado!, esta accion puede llegar hacer irreversible, ¿estas seguro que quisieras eliminar tu cuenta?",
        content:(

          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
          }}>

            <Button onClick={() => dispatchModal({ type:"close" })}>Cerrar</Button>
            <button onClick={handleDeleteUser} className="deleteAccountBtn">Eliminar</button>

          </div>
        )
      }
    });
  }

 
  const changePhotoHandler = (src) => {
        setProfileImage(src)
    }

    const onChangeProfilePhotoHandler = (evt) => {
        
        const fileReader = new FileReader();

        fileReader.readAsDataURL(evt.target.files[0])
        setProfileImage(evt.target.files[0])
        setUser((prev) =>
          Object.assign(
            {},
            {
              ...prev,
              img: evt.target.files[0]
            }
          )
        );
        fileReader.onloadend = () => {
            changePhotoHandler(fileReader.result)
            
        }
    }
 
  //pasar este archivo a imagen para renderizarlo

  return (
  
    <div className="Settings__pag">
      <form className="Settings__form">
        <div className="Settings__header">
          <h1>Perfil del Usuario</h1>
          <p>Permitenos ayudarte a mantener actualizado tu perfil</p>
        </div>
        <div className="Settings__photo">
         
        <label className={`InputFileWithPreview`}>
            <img src={ profileImage === "" ? imagePlaceHolder : profileImage} alt={'img'} />
            <input
                type="file"
                name={'img'}
                onChange={onChangeProfilePhotoHandler}
            />
        </label>
    
        </div>
        <div className="Settings__inputs">
          <WrapperDirection direction="vertical">
            <WrapperDirection direction="horizontal">
              {
                user.userType === "company" ? (
                  <>
                    <InputWithLabel label="Nombre de la empresa">
                        <input
                          disabled="disabled"
                          type="text"
                          name="name"
                          placeholder=""
                          onChange={onChangeHandler}
                          value={user.name}
                        />
                    </InputWithLabel>
                    <InputWithLabel label="RTN">
                        <input
                          disabled="disabled"
                          type="text"
                          name="RTN"
                          placeholder=""
                          onChange={onChangeHandler}
                          value={user.RTN}
                        />
                    </InputWithLabel>
                  </>
                ) : (
                  <>
                  <InputWithLabel label="Nombre">
                      <input
                        disabled="disabled"
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={onChangeHandler}
                        value={user.name}
                      />
                  </InputWithLabel>
                  <InputWithLabel label="Apellido">
                    <input
                      disabled="disabled"
                      type="text"
                      name="lastName"
                      placeholder=""
                      onChange={onChangeHandler}
                      value={user.lastName}
                    />
                  </InputWithLabel>
                  </>
                    

                )
            
            
                
              }
              
              <InputWithLabel label="Correo Electronico">
                <input
                  disabled="disabled"
                  type="text"
                  name="email"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.email}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Contraseña Actual">
                <input
                  disabled={disabled}
                  type="password"
                  name="currentPassword"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.currentPassword}
                />
              </InputWithLabel>
              <InputWithLabel label="Nueva Contraseña">
                <input
                  disabled={disabled}
                  type="password"
                  name="newPassword"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.newPassword}
                />
              </InputWithLabel>
              <InputWithLabel label="Confirmar Contraseña">
                <input
                  disabled={disabled}
                  type="password"
                  name="newPassword2"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.newPassword2}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Telefono">
                <input
                  disabled={disabled}
                  type="text"
                  name="phone"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.phone}
                />
              </InputWithLabel>
            </WrapperDirection>
            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Direccion 1">
                <input
                  disabled={disabled}
                  type="text"
                  name="address"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.address}
                />
              </InputWithLabel>
            </WrapperDirection>
            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Direccion 2">
                <input
                  disabled={disabled}
                  type="text"
                  name="address2"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.address2}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection direction="horizontal">
              <InputWithLabel label="Pais">
                <input
                  disabled={disabled}
                  type="text"
                  name="country"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.country}
                />
              </InputWithLabel>

              <InputWithLabel label="Departamento">
                <input
                  disabled={disabled}
                  type="text"
                  name="department"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.department}
                />
              </InputWithLabel>
            </WrapperDirection>

            <WrapperDirection>
              <InputWithLabel label="Ciudad">
                <input
                  disabled={disabled}
                  type="text"
                  name="city"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.city}
                />
              </InputWithLabel>
              <InputWithLabel label="Codigo Postal">
                <input
                  disabled={disabled}
                  type="text"
                  name="zipCode"
                  placeholder=""
                  onChange={onChangeHandler}
                  value={user.zipCode}
                />
              </InputWithLabel>
            </WrapperDirection>
          </WrapperDirection>
        </div>
        <div className="Settings__submit-button">
          <WrapperDirection className="userAccountOptions__wrapper">
            <Button type="submit" onClick={onClickHandler} disabled={disabled}>Actualizar</Button>
            <Button className="deleteAccountBtn" type="button" onClick={onDeleteUserHandler}>Borrar Cuenta</Button>         
          </WrapperDirection>          
        </div>
      </form>
    </div>
  );
};

export default withCookies(Settings);
