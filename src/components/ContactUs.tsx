import React, { useState } from 'react';
import "../styles/contact-us.scss";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        workEmail: '',
        phone: '',
        company: '',
        numEmployees: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section className="contact-us">
            <form onSubmit={handleSubmit} className='contact-form'>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Work Email:
                    <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Company:
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Number of Employees:
                    <select
                        name="numEmployees"
                        value={formData.numEmployees}
                        onChange={handleChange}
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

            <iframe frameBorder="0" height="650" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.3834036396004!2d80.23891665785588!3d13.050509997701042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665bbf60e533%3A0x6da55abfb21035b!2sInvent+SoftLabs+(India)+Private+Limited!5e0!3m2!1sen!2sus!4v1521013531175"></iframe>
        </section>
    );
};

export default ContactUs;
