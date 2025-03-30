import {Col,Container,Row} from "react-bootstrap";
import { Link } from "react-router";

function WelcomeView(){
    return(
        <Container className="bg-dark mh-100vh">
            <Row>
                <Col xs={12} sm={10} md={6} className="mh-100vh bg-secondary mx-auto d-flex">
                    <Row className="w-100 my-auto text-center">
                        <Col xs={12} className="pb-3">
                            <h2>Banking</h2>
                            <h5>
                                Welcome to the Bank of the future
                            </h5>
                        </Col>
                        <Col xs={10} sm={6} md={4} className="mx-auto">
                            <Link to="/signin" className="btn btn-dark ">
                                Get Started
                            </Link>
                        </Col>
                        <Col xs={12} className="text-center pt-5 pb-1">
                            <h6>
                                Don't have account?
                            </h6>
                        </Col>
                        <Col xs={10} sm={6} md={3} className="mx-auto">
                            <Link to="/signup" className="btn btn-dark ">
                                Sign up
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomeView;