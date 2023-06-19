import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="ui segment">
                <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
            </div>
        )
    })
    return (
        <div className="ui celled list" style={{ marginTop: "10%" }}>
            <div className="ui segment">
                <div className="ui grid">
                    <div className="ten wide column">
                        <h2 className="ui header">Contact List</h2>
                    </div>
                    <div className="six wide column">
                        <Link to={"/add"}>
                            <button className="ui button blue right floated">Add Contact</button>
                        </Link>
                    </div>
                </div>
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;