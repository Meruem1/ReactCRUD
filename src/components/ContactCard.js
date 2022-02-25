import React from "react";
import user from "../images/user.png"

const ContactCard = (props)=>{
    const {id, name,email}  = props.contact

    console.log( props.contact);
    return(
        <div className="item">
            <img className="ui avatar image " src={user} alt="user"></img>
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <h2>Helo</h2>
        </div>
        <i className="trash alternate outline icon" style={{color:"red",marginTop:"7"}}></i>
    </div>
    )
}

export default ContactCard ;