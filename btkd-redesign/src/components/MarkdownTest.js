import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import markdownFile from "../md/testfile.md"
import MarkdownImage from "./MarkdownImage";
function MarkdownTest () {

    const [markdownText, setMarkdownText] = useState([]);

    useEffect(fetchMarkdown, []);

    function fetchMarkdown () {
        fetch(markdownFile).then((response) => response.text()).then((text) => {
            console.log(text);
            let returnText = text.split("___");
            console.log(returnText);
            setMarkdownText(returnText);
        })
    }

    function generateMarkdownArray() {
        return(
            markdownText.map((announcement) => {
                return(
                    <div className={"announcement"} key={announcement}>
                        <ReactMarkdown children={announcement} components={{
                            img : ({src, alt}) => <MarkdownImage imageSrc={src} alt={alt}/>
                        }}/>
                    </div>
                )
            })
        )
    }

    return (
        <div className={"testerContainer"}>
            {generateMarkdownArray()}
        </div>
    )
}
export default MarkdownTest;