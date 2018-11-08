import React from 'react'
import { Row, Col } from 'reactstrap';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <Row>
                <Col sm="12" md="12" lg="12">
                    <p className="align-self-center">&copy; {year}. Felipe Pimentel</p>
                </Col>
            </Row>
        </footer>
    );
}
export default Footer
