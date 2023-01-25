import './AnnouncementsArea.css'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import {useState} from "react";
function AnnouncementItem (props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
        maxHeight: '60vh',
        maxWidth: '80vh',
        overflow: 'auto',
        backgroundColor: '#2d2a2e',
        color: 'white'
    };

    const [modalOpen, setModalOpen] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    function resize () {
        setWidth(window.innerWidth);
    }

    window.addEventListener('resize', resize)

    return(
        <div className="projectCard">
            <Card sx={{ minWidth: {xs : 0.8*width, sm : 350}, height: "100%", background: "rgba(45, 42, 46, 1)"}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.thumbnail}
                    alt={props.name}
                />
                <CardContent>
                    <div className="titleContent">
                        <Typography gutterBottom variant="h5" component="div" sx={{color: "white"}}>
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{color: "white"}}>
                            {props.date}
                        </Typography>
                    </div>
                    <div className="announcementDescription">
                        <Typography variant="h6" color="text.secondary" sx={{color: "white"}}>
                            {props.description}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" sx={{ color: '#fff' }} onClick={() => setModalOpen(true)}>Read More</Button>
                </CardActions>
            </Card>
            <Modal
                open={modalOpen}
                onClose={() => {setModalOpen(false)}}
            >
                <Box sx={style}>
                    <div className="annModalTitle">
                        <Typography variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {props.date}
                        </Typography>
                    </div>
                    <img src={props.thumbnail} alt={""} style={{maxWidth: "100%"}}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.description}
                    </Typography>
                </Box>
            </Modal>
        </div>

    )
}
export default AnnouncementItem;