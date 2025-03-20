import React from "react"
import '../App.css'

function ListItem({item,onClick}){
    return(
        <div className="list-item" onClick={onClick}>
            <span className="item-text">K{item}</span> 
        </div>
            
    )
}

export default ListItem