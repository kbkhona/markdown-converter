import { debounce } from "lodash";

export default function Markdown({handleMDconversion}) {

    const handleTextChange = debounce((e) => {
        handleMDconversion(e.target.value)
    }, 2000)

    return(
        <>
            <div style={{ height:"100%", width:"99%" }}>      
                <textarea 
                    rows={20}
                    style={{ width:"100%", resize: "vertical", padding:"5px" }}
                    onChange={handleTextChange}
                    placeholder="Enter Your Markdown Here"
                />
            </div>
        </>
    )
}