import {Container, Grow, Typography} from "@mui/material";
import './AboutArea.css'
import React from "react";
import {Icon} from "@iconify/react";

function AboutArea (props) {

    return(
        <div id="aboutArea" ref={props.aboutRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="aboutAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>About Brown Taekwondo</b>
                    </Typography>
                    <div id="aboutInfo">
                        <Typography variant="subtitle1" sx={{maxWidth:{xs : "100%", sm : "50%"}}} id="aboutWords">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </Typography>
                        <Container sx={{display:{xs:"none", sm:"block"}, textAlign: "center"}}>
                            <Icon icon="game-icons:high-kick" color="white" id="kickIcon"/>
                        </Container>
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default AboutArea;