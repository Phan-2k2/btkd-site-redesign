import {Grow, Typography} from "@mui/material";
import './ProjectsArea.css'
import ProjectItem from "./ProjectItem";

const projectData =
    [
    {
        "name": "Personas and Storyboarding",
        "description": "Understanding interfaces and their users.",
        "thumbnail": "ProjectThumbnails/storyboarding-blurred.jpg",
        "link":"/personas-storyboarding"
    },
    {
        "name": "Responsive Redesign",
        "description": "Redesigning an old website to be more responsive.",
        "thumbnail": "ProjectThumbnails/redesign.jpg",
        "link":"/responsive-redesign"
    },
    {
        "name": "Iterative Design",
        "description": "Designing and redesigning something new with the help of user feedback.",
        "thumbnail": "ProjectThumbnails/iterative2.jpg",
        "link":"/iterative-design"
    },
    {
        "name": "Development",
        "description": "Creating a site using React and making use of states.",
        "thumbnail": "ProjectThumbnails/development.jpeg",
        "link":"/development"
    }
]

projectData.forEach((item) => {
    item.thumbnail = process.env.PUBLIC_URL + "/" + item.thumbnail;
});

function ProjectsArea (props) {


    return (
        <div id="projectsArea" ref={props.projectsRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="projectsAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>My Projects</b>
                    </Typography>
                    <div id="projects">
                        {projectData.map((project) => (
                            <ProjectItem key={project.name}
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
export default ProjectsArea;