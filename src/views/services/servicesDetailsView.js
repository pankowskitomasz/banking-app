import {Container } from "react-bootstrap";
import { useParams } from "react-router";

function ServicesDetailsView(){
    const params = useParams();

    console.log("Details", params);
    return(
        <Container>
            <h1>Services details</h1>

        </Container>
    );
}

export default ServicesDetailsView;