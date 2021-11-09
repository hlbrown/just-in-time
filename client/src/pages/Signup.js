import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from 'utils/auth';
import { ADD_USER } from 'utils/mutations';
import "materialize-css/dist/css/materialize.min.css";


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phoneNumber: formState.phoneNumber,
        photo: formState.photo,
        dob: formState.dob,
        caregiver: formState.caregiver,
        admin: formState.admin
        
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container modal1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            placeholder="(***)***-****"
            name="phoneNumber"
            type="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="dob">Date Of Birth:</label>
          <input
            placeholder="**/**/****"
            name="dob"
            type="dob"
            id="dob"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="caregiver">Caregiver</label>
          <input
            placeholder="yes/no"
            name="caregiver"
            type="caregiver"
            id="caregiver"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="photo">Photo</label>
          <input
            placeholder="image"
            name="photo"
            type="photo"
            id="photo"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
