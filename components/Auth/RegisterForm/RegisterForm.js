import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function RegisterForm(props) {
    const { showLoginForm } = props;

    return (
        <Form className="login-form">
            <Form.Input name="name" type="text" placeholder="Nombre" />
            <Form.Input name="lastname" type="text" placeholder="Apellidos" />
            <Form.Input name="username" type="text" placeholder="Nombre de Usuario" />
            <Form.Input name="email" type="text" placeholder="Correo Electrónico" />
            <Form.Input name="password" type="password" placeholder="Contraseña" />
            <div className="actions">
                <Button type="button" basic>
                    Iniciar Sesión
                </Button>
                <Button type="submit" className="submit">
                    Registrar
                </Button>
            </div>
        </Form>
    );
}
