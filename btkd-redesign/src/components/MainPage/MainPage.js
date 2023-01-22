import './MainPage.css';
import NavBar from "./NavBar/NavBar";
import AboutArea from "./AboutArea/AboutArea";
import AnnouncementsArea from "./ProjectsArea/AnnouncementsArea";
import ContactArea from "./ContactArea/ContactArea";
import {useEffect, useRef, useState} from "react";
import TitleArea from "./TitlePage/TitleArea";
import FooterArea from "./FooterArea/FooterArea";

//https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8
export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);
    return isIntersecting;
}

function MainPage() {
    const navbarRef = useRef();
    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);
    const aboutRef = useRef();
    const isVisibleAbout = useIsVisible(aboutRef);
    const announcementsRef = useRef();
    const isVisibleAnnouncements = useIsVisible(announcementsRef);
    const contactsRef = useRef();
    const isVisibleContacts = useIsVisible(contactsRef);

    const [announcementsText, setAnnouncementsText] = useState([]);

  return (
    <div className="App">
        <NavBar navbarRef={navbarRef} titleVisible={isVisibleTitle}/>
        <TitleArea titleRef={titleRef} isVisible={isVisibleTitle}/>
        <AboutArea aboutRef={aboutRef} isVisible={isVisibleAbout}/>
        <hr/>
        <AnnouncementsArea announcementsRef={announcementsRef} isVisible={isVisibleAnnouncements}
                           announcementsText={announcementsText} setAnnouncementsText={setAnnouncementsText}
        />
        <hr/>
        <ContactArea contactsRef={contactsRef} isVisible={isVisibleContacts}/>
        <FooterArea/>
    </div>
  );
}

export default MainPage;
