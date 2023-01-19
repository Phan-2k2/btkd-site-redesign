function MarkdownImage (props) {

    let SRC = props.imageSrc;


    function fixImageSrc() {
        let publicLocation = SRC.search("/public/");
        let splitSrc = SRC.slice(publicLocation + 7);
        console.log(SRC, splitSrc);
        return process.env.PUBLIC_URL + splitSrc;
    }

    return(
        <div className={"markdownImage"}>
            <img src={fixImageSrc()} alt={props.alt} style={{width : "100%"}}/>
        </div>
    )
}
export default MarkdownImage;