import { debounce } from "lodash";

export default function Markdown({handleMDconversion, refTextArea}) {
    
    const handleTextChange = debounce((e) => {
        handleMDconversion(e.target.value)
    }, 2000)

    return(
        <>
        {/* width:"100%", float:"left", */}
            <div style={{ height:"100%", width:"99%" }}>
                <textarea style={{ width:"100%", resize: "vertical" }} ref={refTextArea} onChange={handleTextChange} />
            </div>
        </>
    )
}