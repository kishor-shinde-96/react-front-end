import React, { useState } from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import EmployeeForm from './AddEmployeeForm';
import VendorForm from './AddVendorForm'

// Import VendorForm component similarly if you have it

const App = () => {
    const [activeTab, setActiveTab] = useState('employee');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ display: 'flex' }}>
            <TopBar />
            <SideBar onTabClick={handleTabClick} />
            <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
                {activeTab === 'employee' && <EmployeeForm />}
                {activeTab === 'vendor' && <VendorForm />}
            </div>
        </div>
    );
};

export default App;
