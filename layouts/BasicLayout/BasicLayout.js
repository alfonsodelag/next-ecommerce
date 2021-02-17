import React from "react";
import Header from "../../components/Header/Header";
import { Container } from "semantic-ui-react";
import classNames from "classnames";

const BasicLayout = (props) => {
    const { children, className } = props;

    return (
        <Container fluid className={classNames("basic-layout", {
            // ! El contenido que me llegue a className, añadelo en el className del Container siempre y cuando tenga contenido, sino, nada
            [className]: className
        })}>
            <Header />
            <Container className="content">{children}</Container>
        </Container>
    )
}

export default BasicLayout;
