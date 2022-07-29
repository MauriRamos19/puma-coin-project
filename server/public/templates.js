


const templatePasswordReset = (email,link) => `<div style="
    width: 100%;
    background-color: #E9E6E6;
    border: 1px solid transparent;
">
    <table style="
        max-width: 567px;
        margin: 80px auto;
        padding: 50px 76px;
        text-align: center;
        background-color: #ffffff;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    ">
        <tbody>
            <tr>
                <td>
                    <a href="${link}">
                        <img 
                            src="https://res.cloudinary.com/dzv5rmys1/image/upload/v1656499007/Restablece_tu_contrasena_whizon.png"
                            alt="PST Dashboard" 
                            title="PST Dashboard"  
                            style="
                                height: 174px; 
                                display: inline-block;" 
                        />
                    </a>
                </td>
            </tr>
            <tr>
                <td><p style="font-weight: bold; font-size: 2rem; margin-bottom: 10px;">Solicitud de restablecimiento de contraseña</p></td>
            </tr>
            <tr>
                <td><p style="font-size: 1.5rem; margin-bottom: 45px;">Ha solicitado un restablecimiento de contraseña para el usuario con correo electrónico ${email}.</p></td>
            </tr>
            <tr>
                <td>
                    <a href="${link}" 
                        style="
                        background-color: #F79D15;
                        color: #ffffff;
                        border-color: #1d79c5;
                        font-size: 1.5rem;
                        padding: 0.6em 1em;
                        max-width: 320px;
                        border-radius: 8px;
                        display: inline-block;
                        text-decoration: none;
                        font-weight: bold;
                    ">
                        Click aquí para restaurar tu contraseña
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="color: #424242; margin: 10px 0 40px 0;">
                        o click aqui <a href="${link}" style="color: #2196F3; text-decoration: none;">link</a>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="color: #424242; margin: 10px 0 40px 0;">
                        <b>Si no has sido tu, puedes ignorar este correo.</b>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <table style="width: 100%">
                        <tbody>
                            <tr>
                                <td style="text-align: start; width: 50%;">
                                    <p style="color: #424242; font-size: 0.7rem;">
                                        Copyright © 2022 PUMACOIN, <br>Inc. All rights reserved.
                                    </p>
                                </td>
                                <td style="text-align: end; width: 50%;">
                                    <p style="color: #424242; font-size: 0.7rem;">
                                        <a href="" style="color: #2196F3; text-decoration: none;">Powered by PumaCoin</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</div>`


const supportEmail  = (name,email,subject,message) => `
<div 
    style="
        width:100%;
        height:100%;
        background-color: #fbfbfb;
        padding: 30px 0;
    "
>
    <table 
        style="
            width:30%;
            min-width: 500px;
            background-color: rgb(238, 238, 238);
            margin: 0 auto;
            text-align: center;
    ">

        <tr 
            style="
                background-color: rgb(255, 255, 255);
                height: auto;
        ">
            <td>
                <a href="https://pumacoin-finance.web.app/">
                    <img 
                        src="https://styles.redditmedia.com/t5_2ccx1v/styles/communityIcon_tfy0xb1d5m941.png?width=256&s=6bcb2bb377d2dde78d499f68ba19c4fc389f2b3f"
                        style="
                            height: 80px;
                            width: auto;
                        "
                        alt="Puma Coin App"
                    />
                </a>
            </td>
        </tr>

        <tr 
            style="
                background-color: rgb(245, 245, 245);
        ">
            <td style="padding: 20px 0">
                <h2 style="
                    color: #266FB6; 
                    font-weight: bold;
                    margin-bottom: 10px;
                ">
                    Soporte
                </h2>
                <p>Un usuario ha solicitado ayuda</p>
            </td>
        </tr>
        
        <tr 
            style="
                background-color: rgb(255, 255, 255);  
                text-align: start;
        ">
            <td
                style="
                    padding: 30px 0;
                "
            >
                <table 
                    width="80%"
                    style="
                        margin: 0 auto;
                    "
                >
                    <tr>
                        <td>
                            <h5 style="margin: 7px 0px">Name</h5>
                            <p  style="margin: 7px 0px">${name}</p>
                            <hr style="color: rgba(0,0,0, 0.2)">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 style="margin: 7px 0px">Email</h5>
                            <p style="margin: 7px 0px">${email}</p>
                            <hr style="color: rgba(0,0,0, 0.2)">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 style="margin: 7px 0px">Subject</h5>
                            <p style="margin: 7px 0px">${subject}</p>
                            <hr style="color: rgba(0,0,0, 0.2)">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 style="margin: 7px 0px">Message</h5>
                            <p style="margin: 7px 0px">${message}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <p style=" 
        margin: 20px 0;
        text-align: center;
    ">
        <span>
            copyright © 2022 
            <a 
                href="https://pumacoin-finance.web.app/"
                style="text-decoration: unset">
                PumaCoin
            </a>
        </span>
    </p>
</div>
`

module.exports = {templatePasswordReset, supportEmail};