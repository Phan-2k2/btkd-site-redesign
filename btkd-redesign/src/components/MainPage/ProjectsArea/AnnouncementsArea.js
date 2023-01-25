import {Button, Grow, Typography} from "@mui/material";
import './AnnouncementsArea.css'
import AnnouncementItem from "./AnnouncementItem";
import React from "react";

function AnnouncementsArea (props) {

    return (
        <div id="announcementsArea" ref={props.announcementsRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="announcementsAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Latest Announcements</b>
                    </Typography>
                    <div id="announcements">
                        {props.landingPageAnnouncements.map((announcement) => (
                            <AnnouncementItem key={announcement.date}
                                              name={announcement.title} description={announcement.message}
                                              thumbnail={announcement.image} date={announcement.date}
                            />
                        ))}
                    </div>
                    <Button size="large" variant="text" sx={{ color: '#fff' }}>Read all announcements</Button>
                </div>
            </Grow>
        </div>
    )
}
export default AnnouncementsArea;