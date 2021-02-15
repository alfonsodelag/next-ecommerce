import React from 'react'

export default function LoginForm(props) {
    const { showRegisterForm } = props;

    return (
        <div>
            <h1>Estamos en LoginForm</h1>
            <button onClick={showRegisterForm}>Ir al registro</button>
        </div>
    )
}
