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
            for(let i = 0; i < 4; i++){
                // console.log(splitAnnouncements[i]);
                let currentText = splitAnnouncements[i];
                let indexTitle = currentText.indexOf("#");
                let indexImage = currentText.indexOf("![");
                let indexDate = currentText.indexOf("##");
                let indexMessage = currentText.indexOf("#####");

                let title = currentText.slice(indexTitle + 2, indexImage);

                let image = process.env.PUBLIC_URL;
                if(indexImage < 0){
                    image = image + "/images/placeholder.jpg"
                } else {
                    let tempImageSrc = currentText.slice(indexImage, indexDate);
                    let publicLocation = tempImageSrc.search("/public/");
                    console.log(tempImageSrc);
                    let endLocation = tempImageSrc.search('\\)');
                    let splitSrc = tempImageSrc.slice(publicLocation + 7, endLocation);
                    image = image + splitSrc;
                }


                let date = currentText.slice(indexDate + 2, indexMessage);
                let message = currentText.slice(indexMessage + 5);

                let newAnnouncement = new announcement(title, date, image, message);
                announcements.push(newAnnouncement);
            }
            setLandingPageAnnouncements(announcements);
            // console.log(splitAnnouncements);
        })
    }

    return (
        <div id="announcementsArea" ref={props.announcementsRef}>
            <button onClick={fetchMarkdown}>Fetch</button>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="announcementsAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Latest Announcements</b>
                    </Typography>
                    <div id="announcements">
                        {landingPageAnnouncements.map((announcement) => (
                            <AnnouncementItem key={announcement.date}
                                              name={announcement.title} description={announcement.message}
                                              thumbnail={announcement.image}
                            />
                        ))}
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default AnnouncementsArea;