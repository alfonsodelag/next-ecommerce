import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/BasicLayout';
import { getMeApi } from "../api/user";
import useAuth from "../hooks/useAuth";
import ChangeNameForm from "../components/Account/ChangeNameForm";
import ChangeEmailForm from "../components/Account/ChangeEmailForm";
import ChangePasswordForm from "../components/Account/ChangePasswordForm";

export default function Account() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response || null);
        })()
    }, [auth]);

    if (user === undefined) return null;

    // Si el usuario no está loggeado, lo mandamos a Home
    if (!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <BasicLayout className="account">
            <Configuration user={user} logout={logout} setReloadUser={setReloadUser} />
        </BasicLayout>
    );
}

function Configuration(props) {
    const { user, logout, setReloadUser } = props;

    return (
        <div className="account__configuration">
            <div className="title">Configuración</div>
            <div className="data">
                <ChangeNameForm
                    user={user}
                    logout={logout}
                    setReloadUser={setReloadUser} />
                <ChangeEmailForm
                    user={user}
                    logout={logout}
                    setReloadUser={setReloadUser} />
                <ChangePasswordForm user={user} logout={logout} />
            </div>
        </div>
    )
}