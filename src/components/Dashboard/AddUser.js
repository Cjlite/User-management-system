import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddUser.css'
import InputControl from '../Auth/InputControl/InputControl';

const AddUser = ({ onAddUser, onCancel }) => {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Generate a unique ID for the new user using uuid
        const id = uuidv4(); // Generate a unique ID
        const newUserWithId = { ...newUser, id };

        onAddUser(newUserWithId);
        setNewUser({
            username: '',
            email: '',
            phone: '',
        });
    };

    return (
        <div className='add-user-container'>
            <div className='second_cointainer'>
                <h2>Add User</h2>
                <InputControl
                    label="username"
                    onChange={(event) =>
                        setNewUser((prev) => ({ ...prev, username: event.target.value }))
                    }
                    placeholder="Enter email address"
                />
                <InputControl
                    label="Email"
                    onChange={(event) =>
                        setNewUser((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Enter email address"
                />
                <InputControl
                    label="Mobile No"
                    onChange={(event) =>
                        setNewUser((prev) => ({ ...prev, phone: event.target.value }))
                    }
                    placeholder="Enter email address"
                />
                <button className='save-button' onClick={handleSubmit}>Save</button>
                <button className='cancel-button' onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default AddUser;
