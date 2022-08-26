import React from "react"
import Card from "./Card"

function DoneImg(props) {
    if(props.done) {
        return (<img alt="done" src="./assets/icons8-checkmark-48.png"></img>)
    }else {
        return (<img alt="undone" src="./assets/icons8-checkmark-48 (1).png"></img>)
    }
}

function ListItem(props){

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button className="btnAddDel" onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button className="btnAddDel" onClick={() => {props.onItemDeleted(props.item)}}><img src="./assets/icons8-trash-50.png" alt="delete"></img></button>
                </div>
            </Card>
        </li>)
  }

export default ListItem;