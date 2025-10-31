import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/LoginSelection.css";
import logo from "../img/logo.png";

function LoginSelection() {
    const navigate = useNavigate();

    return (
        <div className="login-bg">
            <div className="login-img"></div>
            <div className="login-panel">
                <div className="login-header">
                    <img src={logo} alt="Logo" className="login-logo" />
                    <span className="login-title">Red <b>ELEAM</b></span>
                </div>

                <div className="login-content">
                    <h2 className="login-welcome">¡Te damos la bienvenida!</h2>
                    <p className="login-description">Seleccione el usuario al que desea ingresar</p>

                    <div className="login-buttons">
                        <button className="login-btn" onClick={() => navigate("/LoginAdministrador")}>
                            ADMINISTRADOR</button>
                        <button className="login-btn" onClick={() => navigate("/LoginFuncionario")}>
                            FUNCIONARIO
                        </button>
                    </div>

                    <button className="login-back" onClick={() => navigate(-1)}>
                        <span style={{ fontSize: "1.2em", marginRight: "8px" }}>&larr;</span> ATRÁS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginSelection;
