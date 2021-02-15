import { useState } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";

export default function MenuWeb() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("Inicia Sesión");

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
                        <MenuOptions onShowModal={onShowModal} />
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
    const { onShowModal } = props;
    return (
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi Cuenta
            </Menu.Item>
        </Menu>
    )
}

