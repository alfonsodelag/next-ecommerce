import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateNameApi } from "../../../api/user";

export default function ChangeNameForm(props) {
    const { user, logout, setReloadUser } = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(user.name, user.lastname),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await updateNameApi(user.id, formData);
            if (!response) {
                toast.error("Error al actualizar el nombre y apellidos");
            } else {
                setReloadUser(true);
                toast.success("Nombre y Apellidos actualizados")
                console.log("Nombre actualizado");
            }
            setLoading(false);
        }
    })

    return (
        <div className="change-name-form">
            <h4>Cambia tu nombre y apellidos</h4>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        name="name"
                        placeholder="Tu Nuevo Nombre"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name} />
                    <Form.Input
                        name="lastname"
                        placeholder="Tu Nuevo Apellido"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        error={formik.errors.lastname} />
                </Form.Group>
                <Button className="submit" loading={loading}>
                    Actualizar
                </Button>
            </Form>
        </div>
    )
}

function initialValues(name, lastname) {
    return {
        name: name || "",
        lastname: lastname || "",
    };
}

function validationSchema() {
    return {
        name: Yup.string().required(),
        lastname: Yup.string().required(true)
    }
}