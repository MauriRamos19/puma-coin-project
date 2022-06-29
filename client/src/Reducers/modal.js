import "./modal.css";

//const

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
          "Enviaremos un correo a tu direccion de email asociada a tu cuenta de usuario. Por favor, ingresa tu correo electronico",
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
