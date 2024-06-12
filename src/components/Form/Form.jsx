import axios from 'axios';
import React, { useState } from 'react';
import './Form.scss';
import { useForm } from 'react-hook-form';
import { projectContext } from '../../Project';
import { useContext } from 'react';
import { COMPANY_REQUIREMENT } from '../../constants/Constants';
import { Header } from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const Navigate = useNavigate();
    const totalData = useContext(projectContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const api_url = "https://incredibles.divami.com/be/incredibles";
    const [submitted, setSubmitted] = useState(false); // State to track if form has been submitted

    const onSubmit = (data) => {
        axios.post(api_url, data)
            .then((res) => {
                console.log("successful registration", data);
                Navigate("/");
            })
            .catch(error => {
                console.error("registration failed:", error);
            });
    };

    const handleCancel = () => {
        Navigate("/");
    };

    return (
        <>
            <Header />
            <h3 className="registration_form_heading">{COMPANY_REQUIREMENT}</h3>
            <form className="registration-form" onSubmit={handleSubmit((data) => {
                setSubmitted(true); 
                onSubmit(data);
            })}>
                <div className="registration_form_id_title">
                    <div >
                        <label className="label" htmlFor="jobId">Job ID:</label>
                        <input {...register("jobId", { required: true })} type="number" id="jobId" />
                        {submitted && errors.jobId && <span className="error">Job ID is required</span>}
                    </div>

                    <div>
                        <label className="label" htmlFor="jobTitle">Job Title:</label>
                        <input {...register("jobTitle", { required: true })}  id="jobTitle" />
                        {submitted && errors.jobId && <span className="error">Job Title is required</span>}
                    </div>

                </div>

                <div className="registration_form_id_title">
                    <div>
                        <label className="label" htmlFor="jobPositions">Job Positions:</label>
                        <input {...register("jobPositions", { required: true })} type="number"id="jobPositions" />
                        {submitted && errors.jobId && <span className="error">Job Positions is required</span>}
                    </div>

                    <div>
                        <label className="label" htmlFor="location">Location:</label>
                        <input {...register("location", { required: true })} id="location" />
                        {submitted && errors.jobId && <span className="error">Location is required</span>}
                    </div>
                </div>

                <div className="registration_form_id_title">
                    <div>
                        <label className="label" htmlFor="higherQualification">Higher Qualification:</label>
                        <input {...register("higherQualification", { required: true })} id="higherQualification" />
                        {submitted && errors.jobId && <span className="error">Higher Qualification is required</span>}
                    </div>

                    <div>
                        <label className="label" htmlFor="skills">Skills:</label>
                        <input {...register("skills", { required: true })} id="skills" />
                        {submitted && errors.jobId && <span className="error">Skills is required</span>}
                    </div>
                </div>

                <div className="registration_form_id_title">
                    <div>
                        <label className="label" htmlFor="salaryRange">Salary Range:</label>
                        <input type="number" {...register("salaryRange", { required: true })}  id="salaryRange" />
                        {submitted && errors.jobId && <span className="error">Salary Range is required</span>}
                    </div>

                    <div>
                        <label className="label" htmlFor="experience">Experience:</label>
                        <input {...register("experience", { required: true })} id="experience" />
                        {submitted && errors.jobId && <span className="error">Experience is required</span>}
                    </div>
                </div>

                <div className="registration_form_description">
                    <label className="label" htmlFor="jobDescription">Job Description:</label>
                    <textarea className="registration_form_description_input" {...register("jobDescription", { required: true })} id="jobDescription" />
                    {submitted && errors.jobId && <span className="error">Description is required</span>}
                </div>

                <div className="registration_form_button">
                    <button className="registration_form_button_border" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="registration_form_button_orange">Submit</button>
                </div>
            </form>
        </>
    );
};

export default RegistrationForm;
