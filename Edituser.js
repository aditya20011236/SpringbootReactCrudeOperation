import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/user/${id}`, user);
            navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
            // Handle error appropriately, e.g., display a message to the user
        }
    };

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error loading user:", error);
            // Handle error appropriately, e.g., display a message to the user
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border-rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-control'>Name</label>
                            <input type="text" className='form-control' placeholder='Enter Name' name='name' value={name} onChange={onInputChange} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-control'>UserName</label>
                            <input type="text" className='form-control' placeholder='Enter Username' name='username' value={username} onChange={onInputChange} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-control'>Email</label>
                            <input type="text" className='form-control' placeholder='Enter Email' name='email' value={email} onChange={onInputChange} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Update</button>
                        <button type='button' className='btn btn-outline-danger m-2' onClick={() => navigate("/")}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;
