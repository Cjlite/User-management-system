import React, { useState } from 'react';
import UserCard from './UserCard.js';
import AddUser from './AddUser.js';
import Modal from 'react-modal';
import './Dashboard.css';

Modal.setAppElement('#root');

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [isAddingUser, setIsAddingUser] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
        setIsModalOpen(false);
    };

    const deleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>User Management Dashboard</h1>
            </div>
            <div className="user_detail">
                {users.length === 0 ? (
                    <p className="no-data">No Data Found</p>
                ) : (
                    users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onDelete={() => deleteUser(user.id)}
                        />
                    ))
                )}
            </div>

            <div className="fab-container">
                <button className="fab-button" onClick={() => setIsModalOpen(true)}>
                    +
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Add User Modal"
                className="modal"
            >
                <AddUser onAddUser={addUser} onCancel={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default Dashboard;
