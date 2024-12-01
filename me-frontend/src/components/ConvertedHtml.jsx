
export default function ConvertedHtml({renderMarkdown}) {

    return(
        <>
            <div 
                style={{ width:"49%", float:"left", height:"100%", margin:"4px"}}
                dangerouslySetInnerHTML={renderMarkdown()}
            />
        </>
    )
}