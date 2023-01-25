import {Container, Grow, Typography} from "@mui/material";
import './AboutArea.css'
import React from "react";
import {Icon} from "@iconify/react";

function AboutArea (props) {

    return(
        <div id="aboutArea" ref={props.aboutRef}>
            <Grow in={props.isVisible} timeout={500}>
                <div id="aboutAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>About Brown Taekwondo</b>
                    </Typography>
                    <div id="aboutInfo">
                        <Typography variant="subtitle1" sx={{maxWidth:{xs : "100%", sm : "75%"}, flexGrow: "10"}} id="aboutWords">
                            &emsp; Brown Taekwondo is a student-run, student-serving club that offers comprehensive martial arts
                            training in a supportive team environment and provides opportunities to compete at the collegiate
                            level. We welcome every ethnicity, gender, class, creed, sexual orientation, and experience
                            level to join our team.
                            <br/>
                            &emsp; Founded over 20 years ago, we have become one of the largest student groups in Brown University,
                            with over 120 active members and still growing every year. We’ve excelled in both regional
                            and national competitions, placing in the top three overall in Collegiate nationals for the
                            past decade, winning our first national title in 2011 and later defending it in 2012. While
                            we offer comprehensive training in Taekwondo, we also hold demonstrations on campus for various
                            events and for schools within the Providence area to show Taekwondo to others. We also run
                            fundraisers, such as “The Kick-a-Thon”, an annual event for families with children fighting
                            cancer, and we hold social events for members to get to know one another better.
                            <br/>
                            &emsp; Other than kicking butt, there are many ways of becoming involved with Brown Taekwondo,
                            such as participating in demonstrations, helping out with social events, competing in
                            tournaments, and even just motivating other members! We welcome everyone of any ethnicity,
                            gender, class, creed, sexual orientation, and experience level to join our team.
                        </Typography>
                        <Container sx={{display:{xs:"none", sm:"block"}, textAlign: "center", flexGrow: "1"}}>
                            <Icon icon="game-icons:high-kick" color="white" id="kickIcon"/>
                        </Container>
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default AboutArea;