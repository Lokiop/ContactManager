import React from "react";
import { Link, useLocation } from 'react-router-dom';
import user from '../images/contact.jpg'

const ContactDetail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    return (
        <div className="main" style={{ marginTop: "10%", display: "flex", justifyContent: "center" }}>
            <div className="ui class centered">
                <div className="ui image">
                    <img src={user} alt="user" />
                    <div className="content ui segment">
                        <div className="ui header">{name}</div>
                        <div className="ui description">{email}</div>
                    </div>
                </div>
                <div className="center-div" style={{ marginTop: "8px", textAlign: "center" }}>
                    <Link to={'/'}>
                        <button className="ui button blue center">
                            Back to Contact List
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;