import AppBar from '@mui/material/AppBar';
import React, {useEffect, useState} from "react";
import {Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';
import './Navbar.css'
import { animateScroll as scroll} from 'react-scroll'
import {Transition} from "react-transition-group";

function NavBar (props) {

    const defaultStyle = {
        transition: `background-color 300ms ease-in-out`,
        backgroundColor: "rgba(35,35,38,0)",
        boxShadow: "none"
    };

    const [navHeight, setNavheight] = useState("10px")

    useEffect(()=>{
        setNavheight(props.navbarRef.current.clientHeight/2 + "px")
    }, [props.navbarRef])

    // const defaultStyleSVG = {
    //     height: navHeight,
    // };

    const transitionStyles = {
        entering: {backgroundColor: "rgba(35,35,38,0)"},
        entered: {backgroundColor: "rgba(35,35,38,1)"},
        exiting: {backgroundColor: "rgba(35,35,38,1)"},
        exited: {backgroundColor: "rgba(35,35,38,0)"},
    };

    const [openDrawer, setOpenDrawer] = useState(false);
    function drawerToggle () {
        if(openDrawer){
            setOpenDrawer(false);
        } else {
            setOpenDrawer(true);
        }
    }

    function scrollHandler(type) {
        let offset = props.navbarRef.current.clientHeight; //accounts for navbar
        switch (type) {
            case "about" : {
                let yOffset = props.aboutRef.current.offsetTop;
                scroll.scrollTo(yOffset-offset);
                break;
            }
            case "projects" : {
                let yOffset = props.projectsRef.current.offsetTop;
                scroll.scrollTo(yOffset-offset);
                break;
            }
            case "contact" : {
                let yOffset = props.contactsRef.current.offsetTop;
                scroll.scrollTo(yOffset-offset);
                break;
            }
            default:
                break;
        }
    }

    function drawerClickHandler(type) {
        drawerToggle();
        scrollHandler(type);
    }


    return(
        <Transition in={!props.titleVisible} timeout={0}>
            {(state) => (
                <Box sx={{ display: 'flex' }}>
                    <AppBar ref={props.navbarRef} component="nav" sx={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <Toolbar>
                            <IconButton
                                aria-label="open drawer"
                                edge="start"
                                onClick={drawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <Icon icon="material-symbols:menu" color="white" />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex' }, alignItems: "center" }}
                            >
                                {
                                    <IconButton sx={{padding:0}} onClick={scroll.scrollToTop}>
                                        <Icon icon="game-icons:high-kick" color="white" height={navHeight}/>
                                    </IconButton>
                                }
                                {/*&ensp; Austin Phan*/}
                                Brown Taekwondo
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Button key="about"  onClick={() => scrollHandler("about")} sx={{ color: '#fff' }}>
                                    About
                                </Button>
                                <Button key="projects"  onClick={() => scrollHandler("projects")} sx={{ color: '#fff' }}>
                                    Projects
                                </Button>
                                <Button key="contact"  onClick={() => scrollHandler("contact")} sx={{ color: '#fff' }}>
                                    Contact
                                </Button>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            variant="temporary"
                            open={openDrawer}
                            onClose={drawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                                background: "rgba(35,35,38,0.7)",
                            }}
                            PaperProps={{sx: {background: "rgba(35,35,38,1)"}}}
                        >
                            {
                                <div className="menuDrawer">
                                    <div id={"drawerButtons"}>
                                        <Button key="about"  onClick={() => drawerClickHandler("about")}
                                                sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                            About
                                        </Button>
                                        <Button key="projects" onClick={() => drawerClickHandler("projects")}
                                                sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                            Projects
                                        </Button>
                                        <Button key="contact" onClick={() => drawerClickHandler("contact")}
                                                sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                            Contact
                                        </Button>
                                    </div>
                                    <div id="drawerCopyright">
                                        <Typography variant="body2" sx={{pb:2
                                        }}>
                                            &copy; 2023 Brown Taekwondo
                                        </Typography>
                                    </div>
                                </div>
                            }
                        </Drawer>
                    </Box>
                </Box>
            )}
        </Transition>
    )
}
export default NavBar;