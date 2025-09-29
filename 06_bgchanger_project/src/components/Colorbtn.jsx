function Colorbtn({color, hexValue, fontcolor}){
    return(
        <>
            <button type="button" style={{backgroundColor: hexValue, color: fontcolor, border: `2px solid #EBEBEB`}} className="flex-auto px-3 py-1 rounded-4xl cursor-pointer" onClick={() => document.body.style.backgroundColor = hexValue}>{color}</button>
        </>
    )
}

export default Colorbtn;