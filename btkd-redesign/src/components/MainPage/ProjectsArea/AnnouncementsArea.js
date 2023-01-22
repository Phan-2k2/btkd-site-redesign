import {Grow, Typography} from "@mui/material";
import './AnnouncementsArea.css'
import AnnouncementItem from "./AnnouncementItem";
import MarkdownTest from "../../MarkdownTest";
import announcementsFile from "../../../md/announcements.md"
import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import MarkdownImage from "../../MarkdownImage";

class announcement {
    constructor(title, date, image, message) {
        this.title = title;
        this.date = date;
        this.image = image;
        this.message = message;
    }
}
function AnnouncementsArea (props) {

    // useEffect(fetchMarkdown, []);
    const [landingPageAnnouncements, setLandingPageAnnouncements] = useState([]);

    function fetchMarkdown () {
        fetch(announcementsFile).then((response) => response.text()).then((text) => {
            // console.log(text);
            //first split by announcements
            let splitAnnouncements = text.split("___");
            props.setAnnouncementsText(splitAnnouncements);
            let announcements = [];
            //max out at 4 latest announcements
            for(let i = 0; i < 1; i++){
                // console.log(splitAnnouncements[i]);
                let currentText = splitAnnouncements[i];
                let indexTitle = currentText.indexOf("#");
                let indexImage = currentText.indexOf("![");
                let indexDate = currentText.indexOf("##");
                let indexMessage = currentText.indexOf("#####");
                console.log(currentText.slice(indexTitle + 2, indexImage));
                console.log(currentText.slice(indexImage, indexDate));
                console.log(currentText.slice(indexDate + 2, indexMessage));
                console.log(currentText.slice(indexMessage + 5));
            }
            // console.log(splitAnnouncements);
        })
    }

    function generateMarkdownArray() {
        return(
            landingPageAnnouncements.map((announcement) => {
                return(
                    <div className={"announcement"} key={announcement}>
                        <ReactMarkdown children={announcement} components={{
                            img : ({src, alt}) => <MarkdownImage imageSrc={src} alt={alt}/>
                        }}/>
                    </div>
                )
            })
        )
    }

    return (
        <div id="announcementsArea" ref={props.announcementsRef}>
            <button onClick={fetchMarkdown}>Fetch</button>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="announcementsAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Latest Announcements</b>
                    </Typography>
                    <div id="projects">
                        {props.announcementsText.map((project) => (
                            <AnnouncementItem key={project.name}
                                              name={project.name} description={project.description} link={project.link}
                                              thumbnail={project.thumbnail}
                            />
                        ))}
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default AnnouncementsArea;