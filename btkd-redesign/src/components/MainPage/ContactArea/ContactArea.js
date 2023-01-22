import {Button, Grow, Typography} from "@mui/material";
import './ContactArea.css'
import {Icon} from "@iconify/react";

function ContactArea (props) {
    const iconSize = 50;

    return (
        <div id="contactArea" ref={props.contactsRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="contactAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Contact</b>
                    </Typography>
                    <Typography variant="subtitle1" sx={{}}>
                        Thanks for visiting my portfolio! You can find me on anywhere linked below.
                        Click an icon to be directed to a page, or email me at <b>austin_phan@brown.edu</b>.
                    </Typography>
                    <div id="mediaButtons">
                        <Button variant="contained" onClick={() => {window.open("https://www.linkedin.com/in/austin-d-phan/")}} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon icon="mdi:linkedin" fontSize={iconSize}/>
                        </Button>
                        <Button variant="contained" onClick={() => {window.open("https://github.com/Phan-2k2")}} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon  icon="mdi:github" fontSize={iconSize}/>
                        </Button>
                    </div>

                </div>
            </Grow>
        </div>
    )
}
export default ContactArea;