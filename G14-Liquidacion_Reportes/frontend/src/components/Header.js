import React from "react";
import logo from "../img/logo.png";

export default function Header({ onBack }) {
    return (
        <header className="funcionario-header">
            <div className="funcionario-header-inner">
                <button className="funcionario-back-button" onClick={onBack} aria-label="Atrás">
                    <span className="funcionario-back-icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span className="funcionario-back-text">ATRÁS</span>
                </button>

                <div className="funcionario-brand" aria-hidden="true">
                    <img src={logo} alt="Red ELEAM" className="funcionario-logo" />
                    <span className="funcionario-brand-text">Red ELEAM</span>
                </div>

                <div className="funcionario-header-spacer" />
            </div>
        </header>
    );
}