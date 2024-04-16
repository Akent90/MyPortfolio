import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateField = (fieldName, value) => {
        let isValid = true;
        if (value.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, [fieldName]: 'This fiels is required' }));
            isValid = false;
        } else {
            setErrors(prevErrors => {
                const { [field]: removedError, ...restErrors } = prevErrors;
                return restErrors;
            });
        }

        if (field === 'email' && value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value.trim())) {
                setErrors(prevErrors => ({ ...prevErrors, email: 'Please enter a valid email address' }));
                isValid= false;
            }
        }

        return isValid;
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formIsValid = true;
        formIsValid &=  validateField('name', name);
        formIsValid &= validateField('email', email);
        formIsValid &= validateField('message', message);

        if (formIsValid) {
            console.log('Form is valid and can be submitted');
        }
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;