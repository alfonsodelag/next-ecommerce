import { Modal, Icon } from "semantic-ui-react";

export default function BasicModal(props) {
    /* ...rest van los otros props que el usuario quiera darle (props no controlados). 
    Si el usuario quiere agregarle una clase al modal puede hacerlo */
    const { show, setShowModal, title, children, ...rest } = props;

    const onClose = () => setShowModal(false);

    return (
        <Modal className="basic-modal" open={show} onClose={onClose} {...rest} >
            <Modal.Header>
                <span>{title}</span> <Icon name="close" onClick={onClose}></Icon>
            </Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    );
}
