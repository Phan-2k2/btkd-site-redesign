import './MainPage.css';
import AboutArea from "./AboutArea/AboutArea";
import AnnouncementsArea from "./ProjectsArea/AnnouncementsArea";
import ContactArea from "./ContactArea/ContactArea";
import {useEffect, useRef, useState} from "react";
import TitleArea from "./TitlePage/TitleArea";
import FooterArea from "./FooterArea/FooterArea";
import announcementsFile from "../../md/announcements.md";
import ReactMarkdown from "react-markdown";

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

class announcement {
    constructor(title, date, image, message) {
        this.title = title;
        this.date = date;
        this.image = image;
        this.message = message;
    }
}

function MainPage(props) {

    const aboutRef = useRef();
    const isVisibleAbout = useIsVisible(aboutRef);
    const announcementsRef = useRef();
    const isVisibleAnnouncements = useIsVisible(announcementsRef);
    const contactsRef = useRef();
    const isVisibleContacts = useIsVisible(contactsRef);

    const [announcementsText, setAnnouncementsText] = useState([]);

    const [landingPageAnnouncements, setLandingPageAnnouncements] = useState([]);

    useEffect(() => {fetchAnnouncementsMarkdown()}, []);

    function fetchAnnouncementsMarkdown () {
        console.log("help")
        fetch(announcementsFile).then((response) => response.text()).then((text) => {
            //first split by announcements
            let splitAnnouncements = text.split("___");
            setAnnouncementsText(splitAnnouncements);

            //area for handling announcements formatting for main page
            let announcements = [];
            for(let i = 0; i < 4; i++){
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
                    let endLocation = tempImageSrc.search('\\)');
                    let splitSrc = tempImageSrc.slice(publicLocation + 7, endLocation);
                    image = image + splitSrc;
                }


                let date = currentText.slice(indexDate + 2, indexMessage);
                let message = currentText.slice(indexMessage + 5);
                let markdownMessage = <ReactMarkdown children={message}/>
                let newAnnouncement = new announcement(title, date, image, markdownMessage);
                announcements.push(newAnnouncement);
            }
            setLandingPageAnnouncements(announcements);
        })
    }

  return (
    <div className="App">
        <TitleArea titleRef={props.titleRef} isVisible={props.isVisibleTitle}/>
        <AboutArea aboutRef={aboutRef} isVisible={isVisibleAbout}/>
        <hr/>
        <AnnouncementsArea announcementsRef={announcementsRef} isVisible={isVisibleAnnouncements}
                           announcementsText={announcementsText} setAnnouncementsText={setAnnouncementsText}
                           landingPageAnnouncements={landingPageAnnouncements}
        />
        <hr/>
        <ContactArea contactsRef={contactsRef} isVisible={isVisibleContacts}/>
        <FooterArea/>
    </div>
  );
}

export default MainPage;
