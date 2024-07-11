import { useState } from 'react';
import axios from '../axios';

export default function AddVendorForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [upi, setUpi] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/vendors', { name, email, upi });
            alert('Vendor added successfully');
            window.location.reload();
        } catch (error) {
            console.error('Error adding vendor', error);
            if (error.response && error.response.status === 400) {
                alert(error.response.data);
            } else {
                alert('An error occurred while adding the vendor');
            }
        }
    };

    return (
        <>
            <style jsx>{`
                .vendor-form {
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
            <form className="vendor-form" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="name">Name</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter vendor name" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="upi">UPI</label>
                    <input id="upi" value={upi} onChange={(e) => setUpi(e.target.value)} placeholder="Enter UPI" required />
                </div>
                <button type="submit">Add Vendor</button>
            </form>
        </>
    );
}
