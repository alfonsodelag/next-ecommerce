import React, { useState, useEffect } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function MenuWeb() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("Inicia Sesión");
    const [user, setUser] = useState(undefined);
    const { auth, logout } = useAuth();

    useEffect(() => {
        // Una función asincrona que se autollama
        (async () => {
            const response = await getMeApi(logout);
            setUser(response);
        })()
    }, [auth]);

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column width={6} className="menu__left" >
                        <MenuPlataforms />
                    </Grid.Column>
                    <Grid.Column width={10} className="menu__right">
                        {user !== undefined && (
                            <MenuOptions
                                onShowModal={onShowModal}
                                user={user}
                                logout={logout} />
                        )}
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal
                show={showModal}
                setShowModal={setShowModal}
                title={titleModal}
                size="small">
                <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
            </BasicModal>
        </div>
    )
}

function MenuPlataforms() {
    return (
        <Menu>
            <Link href="/playstation">
                <Menu.Item as="a">
                    PlayStation
                </Menu.Item>
            </Link>
            <Link href="/xbox">
                <Menu.Item as="a">
                    Xbox
                </Menu.Item>
            </Link>
            <Link href="/switch">
                <Menu.Item as="a">
                    Switch
                </Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOptions(props) {
    const { onShowModal, user, logout } = props;

    return (
        <Menu>
            {
                user ? (
                    <>
                        <Link href="/orders">
                            <Menu.Item as="a">
                                <Icon name="game" />
                            Mis Pedidos
                        </Menu.Item>
                        </Link>
                        <Link href="/wishlist">
                            <Menu.Item as="a">
                                <Icon name="heart outline" />
                            Wishlist
                        </Menu.Item>
                        </Link>
                        <Link href="/account" onClick={logout}>
                            <Menu.Item as="a">
                                <Icon name="user outline" />
                                {user.name} {user.lastname}
                            </Menu.Item>
                        </Link>
                        <Link href="/cart" onClick={logout}>
                            <Menu.Item as="a" className="m-0">
                                <Icon name="cart" />
                            </Menu.Item>
                        </Link>
                        <Menu.Item onClick={logout}>
                            <Icon name="power off" />
                        </Menu.Item>
                    </>
                ) : (
                        <Menu.Item onClick={onShowModal}>
                            <Icon name="user outline" />
                    Mi Cuenta
                        </Menu.Item>
                    )
            }
        </Menu >
    )
}

