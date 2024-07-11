import { useState } from 'react';
import axios from '../axios';

export default function AddEmployeeForm() {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [ctc, setCtc] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/employees', { name, designation, ctc, email });
            alert('Employee added successfully');
            window.location.reload();
        } catch (error) {
            console.error('Error adding employee', error);
            if (error.response && error.response.status === 400) {
                alert(error.response.data);
            } else {
                alert('An error occurred while adding the employee');
            }       
         }
    };

    return (
        <>
            <style jsx>{`
                .employee-form {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                }

                .form-group {
                    margin-bottom: 15px;
                }

                .form-group.mt-3 {
                    margin-top: 15px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }

                .form-group input {
                    width: 100%;
                    padding: 8px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                button[type="submit"] {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                button[type="submit"]:hover {
                    background-color: #0056b3;
                }
            `}</style>
            <form className="employee-form" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="name">Name</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter employee name" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="designation">Designation</label>
                    <input id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter designation" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="ctc">CTC</label>
                    <input id="ctc" value={ctc} onChange={(e) => setCtc(e.target.value)} placeholder="Enter CTC" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </>
    );
}
