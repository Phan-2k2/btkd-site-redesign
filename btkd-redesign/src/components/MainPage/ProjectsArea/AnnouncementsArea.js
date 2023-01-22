import {Grow, Typography} from "@mui/material";
import './ProjectsArea.css'
import AnnouncementItem from "./AnnouncementItem";
import MarkdownTest from "../../MarkdownTest";
import announcementsFile from "../../../md/announcements.md"

const projectData = [];
function AnnouncementsArea (props) {
    return (
        <div id="projectsArea" ref={props.announcementsRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="projectsAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Latest Announcements</b>
                    </Typography>
                    <MarkdownTest/>
                    <div id="projects">
                        {projectData.map((project) => (
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