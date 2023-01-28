import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage, {useIsVisible} from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTopOnChange from "./ScrollToTopOnChange";
import Gallery from "./components/Gallery/Gallery";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index () {
    const navbarRef = useRef();
    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTopOnChange/>
                <NavBar navbarRef={navbarRef} titleVisible={isVisibleTitle}/>
                <Routes>
                    <Route path="/btkd-site-redesign" element={<MainPage navbarRef={navbarRef} titleRef={titleRef} isVisibleTitle={isVisibleTitle}/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
root.render(
    <Index/>
);
