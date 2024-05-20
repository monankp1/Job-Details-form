import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './JobDetails.css';

const JobDetails = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        designation: '',
        companyName: '',
        city: '',
        country: '',
        roleAndResponsibility: '',
        joiningDate: ''
    });

    const [saveData, setSaveData] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        setSaveData([...saveData, formData]);

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleCancel = () => {
        setFormData({
            fullName: '',
            designation: '',
            companyName: '',
            city: '',
            country: '',
            roleAndResponsibility: '',
            joiningDate: ''
        })
    }




    const containerStyle = {
        display: 'flex',
        margin: '2rem',
        widht: '100%',
    };

    const inputCard = {
        backgroundColor: 'var(--New-Blue-Purple, #E2C2FF)',
        padding: '20px',
        marginTop: '2rem',
        marginRight: '1rem',
        position: 'relative',
        left: '2px',
        borderRadius: '13.301px',
        border: '0.831px solid var(--New-Blue-Purple, #E2C2FF)',
        background: 'var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%))',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        width: '50%',
    };


    const formItemStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '15px',
    };

    const displayStyle = {
        backgroundColor: 'var(--New-Blue-Purple, #E2C2FF)',
        padding: '20px',
        marginTop: '2rem',
        position: 'relative',
        left: '2px',
        borderRadius: '13.301px',
        border: '0.831px solid var(--New-Blue-Purple, #E2C2FF)',
        background: 'var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%))',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        width: '50%',
    };



    // console.log(formData);
    // console.log(saveData);

    return (
        <div>
            <h1>Job Details</h1>
            <div style={containerStyle}>
                <div style={inputCard}>
                    <form onSubmit={handleSubmit} >
                        <div style={formItemStyle}>
                            <label>Full Name:-</label>
                            <input
                                type='name'
                                name='fullName'
                                value={formData.fullName}
                                placeholder='Full Name'
                                onChange={handleChange}
                                ref={inputRef}
                                required
                            />
                            {/* <span>{formData.fullName}</span> */}
                        </div>

                        <div style={formItemStyle}>
                            <label>Designation:-</label>
                            <input
                                type='text'
                                name='designation'
                                value={formData.designation}
                                placeholder='Designation'
                                onChange={handleChange}
                                required
                            />
                            {/* <span>{formData.designation}</span> */}
                        </div>

                        <div style={formItemStyle}>
                            <label>Company Name:-</label>
                            <input
                                type='text'
                                name='companyName'
                                value={formData.companyName}
                                placeholder='Company Name'
                                onChange={handleChange}
                                required
                            />
                            {/* <span>{formData.companyName}</span> */}


                        </div>

                        <div style={formItemStyle}>
                            <label>City:-</label>
                            <input
                                type='text'
                                name='city'
                                value={formData.city}
                                placeholder='City'
                                onChange={handleChange}
                                required
                            />
                            {/* <span>{formData.city}</span> */}

                        </div>

                        <div style={formItemStyle}>
                            <label>Country:-</label>
                            <input
                                type='text'
                                name='country'
                                value={formData.country}
                                placeholder='Country'
                                onChange={handleChange}
                                required
                            />
                            {/* <span>{formData.country}</span> */}

                        </div>

                        <div style={formItemStyle}>
                            <label>Role and Responsibility:-</label>
                            <input
                                type='text'
                                name='roleAndResponsibility'
                                value={formData.roleAndResponsibility}
                                placeholder='Role and Responsibility'
                                onChange={handleChange}
                                required
                            />
                            {/* <span>{formData.roleAndResponsibility}</span> */}

                        </div>

                        <div style={formItemStyle}>
                            <label>Joining Date:-</label>
                            <input
                                type='date'
                                name='joiningDate'
                                value={formData.joiningDate}
                                onChange={handleChange}
                                required
                            />
                            {/* <span>{formData.joiningDate}</span> */}

                        </div>
                        <div>
                            <button type='submit'>
                                Save
                            </button>
                            <button type='button' onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>


                </div>

                <div style={displayStyle}>
                    <p> <strong>Full Name: </strong>{formData.fullName}</p>
                    <p> <strong>Designation:</strong>{formData.designation}</p>
                    <p> <strong>Company Name:</strong>{formData.companyName}</p>
                    <p> <strong>City:</strong>{formData.city}</p>
                    <p> <strong>Country:</strong>{formData.country}</p>
                    <p> <strong>Role and Responsibility:</strong>{formData.roleAndResponsibility}</p>
                    <p> <strong>Joining Date:</strong>{formData.joiningDate}</p>
                </div>


            </div>

            <div className='list'>
                {saveData.length > 0 &&
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Designation</th>
                                <th>Company Name</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Role and Responsibility</th>
                                <th>Joining Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {saveData.map((data, idx) => (
                                <tr key={idx}>
                                    <td>{data.fullName}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.companyName}</td>
                                    <td>{data.city}</td>
                                    <td>{data.country}</td>
                                    <td>{data.roleAndResponsibility}</td>
                                    <td>{data.joiningDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default JobDetails