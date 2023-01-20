function MarkdownImage (props) {

    let SRC = props.imageSrc;


    function fixImageSrc() {
        let publicLocation = SRC.search("/public/");
        let splitSrc = SRC.slice(publicLocation + 7);
        return process.env.PUBLIC_URL + splitSrc;
    }

    return(
        <img className={"markdownImage"} src={fixImageSrc()} alt={props.alt} style={{width : "100%"}}/>
    )
}
export default MarkdownImage;