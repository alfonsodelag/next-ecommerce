import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { registerApi } from "../../../api/user";

export default function RegisterForm(props) {
    const { showLoginForm } = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        /* El validationSchema es para que si no tenemos todo el formulario completo,
        no debería registrar al usuario */
        validationSchema: Yup.object(validationSchema()),
        // ! formData??
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await registerApi(formData);
            console.log(response);
            if (response?.jwt) {
                showLoginForm();
            } else {
                console.log("Error al registrar el usuario, inténtelo más tarde");
                toast.error("Error al registrar el usuario, inténtelo más tarde");
            }
            setLoading(false);
        }
    });

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input name="name" type="text" placeholder="Nombre" onChange={formik.handleChange} error={formik.errors.name} />
            <Form.Input name="lastname" type="text" placeholder="Apellidos" onChange={formik.handleChange} error={formik.errors.name} />
            <Form.Input name="username" type="text" placeholder="Nombre de Usuario" onChange={formik.handleChange} error={formik.errors.name} />
            <Form.Input name="email" type="text" placeholder="Correo Electrónico" onChange={formik.handleChange} error={formik.errors.name} />
            <Form.Input name="password" type="password" placeholder="Contraseña" onChange={formik.handleChange} error={formik.errors.name} />
            <div className="actions">
                <Button type="button" basic onClick={showLoginForm}>
                    Iniciar Sesión
                </Button>
                <Button type="submit" className="submit" loading={loading}>
                    Registrar
                </Button>
            </div>
        </Form>
    );
}


function initialValues() {
    return {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    }
}

function validationSchema() {
    return {
        // El Yup string quiere decir de que debe ser un string, y requerido
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    }
}