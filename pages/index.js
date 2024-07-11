import { useEffect, useState } from 'react';
import axios from '../axios';
import AddEmployeeForm from '../components/AddEmployeeForm';
import AddVendorForm from '../components/AddVendorForm';
import SendEmailForm from '../components/SendEmailForm';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Navbar, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [employees, setEmployees] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [activeTab, setActiveTab] = useState('employee');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeResponse = await axios.get('/employees');
                setEmployees(employeeResponse.data);

                const vendorResponse = await axios.get('/vendors');
                setVendors(vendorResponse.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* <TopBar /> */}
            <SideBar onTabClick={handleTabClick} />
            <div style={{ flex: '1', width: '100%' }}>
                <Navbar style={{ width: '188%', backgroundColor: '#b2c7e7' }}>
                    <Navbar.Brand>
                        {activeTab === 'employee' ? <h2>Employees</h2> : <h2>Vendors</h2>}
                    </Navbar.Brand>
                </Navbar>
                {activeTab === 'employee' && (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className='mt-2 ml-4' style={{ flex: '1', marginRight: '20px' }}>
                            <AddEmployeeForm />
                        </div>
                        <div className='mt-2' style={{ flex: '2' }}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Designation</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map(employee => (
                                        <tr key={employee.id}>
                                            <td>{employee.name}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                )}
                {activeTab === 'vendor' && (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className='mt-2 ml-4' style={{ flex: '1', marginRight: '20px' }}>
                            <AddVendorForm />
                        </div>
                        <div className='mt-2' style={{ flex: '2' }}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>UPI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendors.map(vendor => (
                                        <tr key={vendor.id}>
                                            <td>{vendor.name}</td>
                                            <td>{vendor.email}</td>
                                            <td>{vendor.upi}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div className='mt-2'>
                            <h2>Send Emails to Vendors</h2>
                            <SendEmailForm vendors={vendors} />
                        </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
}
