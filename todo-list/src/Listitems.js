import React from 'react'
import './ListItems.css'

function Listitems(props){
    const items = props.items
    const listItems = items.map(item =>{
        {
            return <div className = "list" key = {item.key}>
                <p>
                <input type = "text" id={item.key} value = {item.text}
                onChange = {
                    (e) =>{
                        props.setUpdate(e.target.value, item.key) //Editar lista
                    }
                }></input>
                <button onClick= {() => props.deleteItem(item.key)}>Delete</button>
                </p>
                
            </div>
        }
    })
    return(
        <div>{listItems}</div>
        
    )
}

export default Listitems