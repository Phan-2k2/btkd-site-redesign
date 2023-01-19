import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import markdownFile from "../md/testfile.md"
import MarkdownImage from "./MarkdownImage";
function MarkdownTest () {

    const [markdownText, setMarkdownText] = useState("");

    useEffect(fetchMarkdown, []);

    function fetchMarkdown () {
        fetch(markdownFile).then((response) => response.text()).then((text) => {
            setMarkdownText(text);
        })
    }

    return (
        <div>
            <ReactMarkdown children={markdownText} components={{
                img : ({src, alt}) => <MarkdownImage imageSrc={src} alt={alt}/>
            }}/>
        </div>
    )
}
export default MarkdownTest;