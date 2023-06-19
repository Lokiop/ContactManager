import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png'

const CardContact = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="content" style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <img className="ui avatar image" src={user} alt="user" />
                </div>
                <div style={{ flexGrow: 1, marginLeft: "10px" }}>
                    <div className="content">
                        <Link to={`contact/${id}?name=${name}&email=${email}`}>
                            <div className="ui header">{name}</div>
                            <div>{email}</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to={`edit/?id=${id}&name=${name}&email=${email}`}>
                        <i
                            className="edit alternate outline icon"
                            style={{ color: "blue" }}
                        ></i>
                    </Link>
                    <i
                        className="trash alternate outline icon"
                        style={{ color: "red", marginLeft: "4px" }}
                        onClick={() => {
                            const confirmed = window.confirm("Are you sure you want to delete this contact?");
                            if (confirmed) {
                                props.clickHandler(id);
                            }
                        }}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default CardContact;