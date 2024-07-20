import React, { useState } from 'react';

const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [numEmployees, setNumEmployees] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Work Email:
                <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Phone:
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <br />
            <label>
                Company:
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </label>
            <br />
            <label>
                Number of Employees:
                <select
                    value={numEmployees}
                    onChange={(e) => setNumEmployees(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101+">101+</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactUs;