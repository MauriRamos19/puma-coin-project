const modalReducer = function (prev, action) {
  const dynamicCustomData = {
    isActive: true,
    ...action.data,
  };

  switch (action.type) {
    case "completeRegister":
      return {
        isActive: true,
        type: "info",
        title: "Completar Registro",
        description:
          "Enviamos un correo a tu direccion de email para finalizar el proceso de registro.",
        ...dynamicCustomData,
        // headingIcon: "fa-circle-check",
      };

    case "emailChangePassword":
      return {
        isActive: true,
        type: "info",
        title: "Restablecer contraseña",
        description:
          "Enviamos un correo a tu direccion de email para finalizar el proceso de registro.",
        ...dynamicCustomData,
      };

    case "close":
      return {
        isActive: false,
        type: "",
        title: "",
        description: "",
        // headingIcon: "fa-circle-check",
      };

    default:
      throw new Error("action type not implemented");
  }
};

export default modalReducer;

{
  /* <formGroup>
            <label for = 'email'>
            "Ingresa el correo electronico asociado a tu cuenta de usuario. Enviaremos un email para que restablezcas tu contraseña."
            </label>
             <input type = "text" id ='email'></input>
        </formGroup> */
}
