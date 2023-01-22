import {Typography} from "@mui/material";

const footerStyle = {
    "height" : "8vh",
    "display" : "flex",
    "flexDirection" : "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor" : "rgba(45, 42, 46, 1)"
}
function FooterArea () {
    return (
        <div id="footer" style={footerStyle}>
            <Typography variant="body2" sx={{color: "white", textAlign: "center"}}>
                Copyright &copy; 2023 Brown University Taekwondo
            </Typography>
            <Typography variant="body2" sx={{color: "white", textAlign: "center"}}>
                Designed and implemented by Austin :D
            </Typography>
        </div>
    )
}
export default FooterArea;