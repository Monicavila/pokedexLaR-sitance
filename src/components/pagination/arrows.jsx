import React from "react"
import './pagination.css'
export default function Arrows(props){
    
    return(
        <div className="arrowContainer">
            <div className="arrowBtnB" onClick={()=>props.fn(props.currentPage-1)}>{"<"}</div>
            <div className="arrowBtnN" onClick={()=>props.fn(props.currentPage+1)}>{">"}</div>
        </div>
    )
}