import * as React from "react"
import {Grid, Col, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                    1
                </Col>
                <Col xs={6} md={4}>
                    2
                </Col>
            </Row>

            <Row className="show-grid">
                <Col xs={6} md={4}>
                   1
                </Col>
                <Col xs={6} md={4}>
                    2
                </Col>
                <Col xsHidden md={4}>
                    3
                </Col>
            </Row>

            <Row className="show-grid">
                <Col xs={6} xsOffset={6}>
                    <code>&lt;{'Col xs={6} xsOffset={6}'} /">">&gt;</code>
                </Col>
            </Row>

            <Row className="show-grid">
                <Col md={6} mdPush={6}>
                    <code>&lt;{'Col md={6} mdPush={6}'} /">">&gt;</code>
                </Col>
                <Col md={6} mdPull={6}>
                    <code>&lt;{'Col md={6} mdPull={6}'} /">">&gt;</code>
                </Col>
            </Row>
        </Grid>
    )
};

export default HomePage;