const modalReducer = function (prev, action) {

    const dynamicCustomData = {
		isActive: true,
		...action.data
	}

    switch (action.type) {
        case 'completeRegister':
            return {
                isActive: true,
                type: 'info',
                title: 'Completar Registro',
                description: 'Revisa tu email',
                ...dynamicCustomData
                // headingIcon: "fa-circle-check",
            }

        case 'close':
            return {
                isActive: false,
                type: '',
                title: '',
                description: '',
                // headingIcon: "fa-circle-check",
            }

        default:
            throw new Error('action type not implemented');
    }
}

export default modalReducer;