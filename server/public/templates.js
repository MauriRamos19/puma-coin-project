


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
                    <a href="">
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
                    <table>
                        <tbody>
                            <tr>
                                <td style="text-align: start; width: 50%;">
                                    <p style="color: #424242; font-size: 0.7rem;">
                                        Copyright © 2022 PUMACOIN, <br>Inc. All rights reserved.
                                    </p>
                                </td>
                                <td style="text-align: end; width: 50%;">
                                    <p style="color: #424242; font-size: 0.7rem;">
                                        <a href="" style="color: #2196F3; text-decoration: none;">Powered by UNAH</a>
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


module.exports = templatePasswordReset;