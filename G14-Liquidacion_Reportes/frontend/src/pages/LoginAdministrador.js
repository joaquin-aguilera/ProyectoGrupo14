import React from "react";
import "../style/LoginFuncionario.css";
import Header from "../components/Header";
import LoginCard from "../components/LoginCard";

export default function LoginAdministrador() {
    const goBack = () => { if (window.history.length > 1) window.history.back(); };

    const handleLogin = ({ run, password }) => {
        // lógica específica de administrador
        console.log("administrador login", { run, password });
    };

    return (
        <div className="login-funcionario-bg">
            <Header onBack={goBack} />

            <main className="funcionario-main">
                <h1 className="funcionario-welcome-text">Te damos la bienvenida!</h1>

                <section className="funcionario-form-wrap">
                    <LoginCard
                        title="Ingresa Portal Administrador ELEAM"
                        badgeText="Red ELEAM"
                        submitLabel="INGRESAR"
                        onSubmit={handleLogin}
                    />
                </section>
            </main>
        </div>
    );
}