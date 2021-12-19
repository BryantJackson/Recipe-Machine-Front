import { Container } from "./containers.styled";

function LoadingPage () {
    return <div>
        <Container>
            <div style={{display: "flex", width: "100%", height: "90vh", backgroundColor: "black", justifyContent: "center"}}>
                <p style={{color: "white", textAlign: "center"}}>Loading</p>
            </div>
        </Container>
    </div>
}

export default LoadingPage