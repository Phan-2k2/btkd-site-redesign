import './TitleArea.css'
import {Container, Grow, Typography} from "@mui/material";

function TitleArea (props) {


    return(
        <div id="titleAreaMain" ref={props.titleRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <Container sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    color: "white",
                    textAlign: "center",
                    overflowWrap: "anywhere"
                }}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{p:2}}
                    > <b>Welcome! We're Brown Taekwondo</b>
                        {
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{p:2}}
                            > We Go. We Fight. We Win.
                            </Typography>
                        }
                    </Typography>
                </Container>
            </Grow>
            </div>
    )
}
export default TitleArea;