import React, { useState } from 'react';

const Student = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { firstName, lastName, age, grade });
    };

    return (
        <div className="student-form-container">
            <h1>Student Form</h1>
            <form onSubmit={handleSubmit} className="student-form">
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label>
                    Grade:
                    <input
                        type="text"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Student;
