
export default function ConvertedHtml({ renderMarkdown, htmlLoading }) {

    return(
        <>
            <div style={{position:"relative"}} >
                {   
                    htmlLoading ? 
                    <div style={{position:"absolute", top:0, right:"50px" }}>
                        ...Loading
                    </div>
                    :
                    <></>
                }
                <div 
                    style={{ height:"100%", margin:"4px", padding:"10px"}}
                    dangerouslySetInnerHTML={renderMarkdown()}
                />
            </div>
        </>
    )
}