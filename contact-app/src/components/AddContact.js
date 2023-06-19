import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddContact = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main" style={{ marginTop: "8%" }}>
      <h2 className="ui header">Add Contact</h2>
      <form className="ui form" onSubmit={add}>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="ui button blue">Add</button>
          <Link to={"/"}>
            <button className="ui button blue">Contact List</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
