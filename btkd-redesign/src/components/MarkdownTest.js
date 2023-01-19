import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import markdownFile from "../md/testfile.md"
function MarkdownTest () {

    const [markdownText, setMarkdownText] = useState("");

    useEffect(fetchMarkdown, []);

    function fetchMarkdown () {
        fetch(markdownFile).then((response) => response.text()).then((text) => {
            setMarkdownText(text);
            console.log(text);
        })
    }

    return (
        <div>
            <ReactMarkdown children={markdownText}/>
        </div>
    )
}
export default MarkdownTest;