import AppBar from '@mui/material/AppBar';
import React, {useEffect, useState} from "react";
import {Box, Button, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';
import './Navbar.css'
import { animateScroll as scroll} from 'react-scroll'
import {Transition} from "react-transition-group";
import {NavLink} from "react-router-dom";

function NavBar (props) {

    const defaultStyle = {
        transition: `background-color 300ms ease-in-out`,
        backgroundColor: "rgba(35,35,38,0)",
        boxShadow: "none"
    };

    const [navHeight, setNavHeight] = useState("10px")

    useEffect(()=>{
        setNavHeight(props.navbarRef.current.clientHeight/2 + "px")
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const [openDrawer, setOpenDrawer] = useState(false);
    function drawerToggle () {
        if(openDrawer){
            setOpenDrawer(false);
        } else {
            setOpenDrawer(true);
        }
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
                                <NavLink to={"/btkd-site-redesign"} style={{textDecoration: 'none'}}>
                                    <Button key="Home"  onClick={() => {console.log("hello!")}} sx={{ color: '#fff' }}>
                                        Home
                                    </Button>
                                </NavLink>
                                <NavLink to={"/Gallery"} style={{textDecoration: 'none'}}>
                                    <Button key="Gallery"  onClick={() => {console.log("hello!")}} sx={{ color: '#fff' }}>
                                        Gallery
                                    </Button>
                                </NavLink>
                                <Button
                                    sx={{ color: '#fff' }}
                                    id="dropdownButton"
                                    onClick={(event) => {setAnchorEl(event.currentTarget);}}
                                >
                                    Resources
                                </Button>
                                <Menu
                                    id="dropdownButton"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleDropdownClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'menuButton',
                                    }}
                                >
                                    <MenuItem onClick={handleDropdownClose}>For Students</MenuItem>
                                    <MenuItem onClick={handleDropdownClose}>For Alumni</MenuItem>
                                </Menu>
                                <Button key="Tournaments"  onClick={() => {console.log("hello!")}} sx={{ color: '#fff' }}>
                                    Tournaments
                                </Button>
                                <Button key="Contact"  onClick={() => {console.log("hello!")}} sx={{ color: '#fff' }}>
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
                                        <NavLink to={"/btkd-site-redesign"} style={{textDecoration: 'none'}}>
                                            <Button key="Home"  onClick={() => {console.log("hello!")}}
                                                    sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                                Home
                                            </Button>
                                        </NavLink>
                                        <NavLink to={"/Gallery"} style={{textDecoration: 'none'}}>
                                            <Button key="Gallery" onClick={() => {console.log("hello!")}}
                                                    sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                                Gallery
                                            </Button>
                                        </NavLink>
                                        <Button
                                            sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}
                                            id="dropdownButton"
                                            onClick={(event) => {setAnchorEl(event.currentTarget);}}
                                        >
                                            Resources
                                        </Button>
                                        <Menu
                                            id="dropdownButton"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleDropdownClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'menuButton',
                                            }}
                                        >
                                            <MenuItem onClick={handleDropdownClose}>For Students</MenuItem>
                                            <MenuItem onClick={handleDropdownClose}>For Alumni</MenuItem>
                                        </Menu>
                                        <Button key="Tournaments"  onClick={() => {console.log("hello!")}}
                                                sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                            Tournaments
                                        </Button>
                                        <Button key="Contact"  onClick={() => {console.log("hello!")}}
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