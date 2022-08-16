import "./modal.css";
import logoImg from '../Assets/images/pumaCoinLogo.png'

const modalReducer = function (prev, action) {

	const dynamicCustomData = {
		isActive: true,
		...action.data,
	};

	switch (action.type) {
		case "completeRegister":
			return {
				isActive: true,
				img: logoImg,
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

		case "emailSentChangePassword":
			return {
				isActive: true,
				type: "info",
				title: "Restablecer contraseña",
				description: "",
				...dynamicCustomData,
			};

		case "deleteUser":
			return {
				isActive: true,
				type: "confirm",
				title: "Desea eliminar su cuenta?",
				description: "",
				...dynamicCustomData,
			}

		case "claimTokens":
			return {
				isActive: true,
				type: "info",
				title: "",
				description: "",
				...dynamicCustomData,
			};

		case "close":
			return {
				isActive: false,
				type: "",
				title: "",
				description: "",
			};

		default:
			throw new Error("action type not implemented");
	}
};

export default modalReducer;
