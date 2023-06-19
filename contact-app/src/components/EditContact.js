import React, { useState } from "react";
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';

const EditContact = (props) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const id = searchParams.get('id');
    const [name, setName] = useState(searchParams.get('name'));
    const [email, setEmail] = useState(searchParams.get('email'));

    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }

        props.updateContactHandler({ id, name, email });
        setName("");
        setEmail("");
        navigate('/');
    }

    return (
        <div className="ui main" style={{ marginTop: '8%' }}>
            <h2 className="ui header">Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="ui field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="ui field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="ui button blue">Update</button>
                    <Link to={'/'}>
                        <button className="ui button red">
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default EditContact;