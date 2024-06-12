import React, { useState, useContext } from 'react';
import { Box } from '@mui/material';
import Textfield from '../../common/Textfield/Textfield';
import { BUTTON_TEXT, COMPANY_REQUIREMENT, DISCRIPTION, EXPERIENCE, LOCATION, NUMBER_OF_POSITION, POSITION_TITLE, QUALIFICATION, SECOND_BUTTON_TEXT, SKILLS } from '../../constants/Constants';
import FormStyles from './ApplicationStyles.module.scss';
import CommonButton from '../../common/Button/CommonButton';
/**
 * Author: Manjusha
 * @returns an Application form and it will call the components related to fields
 */
import SecondCommonButton from '../../common/Button/SecondCommonButton';
import axios from 'axios';
import { projectContext } from '../../Project';

function ApplicationForm() {
    const jobsData = useContext(projectContext);
    console.log(jobsData.projects)
    const [formData, setFormData] = useState({
        jobId: 0,
        jobTitle: '',
        jobPositions: '',
        location: '',
        higherQualification: '',
        experience: '',
        skills: '',
        jobDescription: '',
        salary: ''
    });

    const api_url = "https://incredibles.divami.com/be/incredibles";

    const handleChange = (event) => {
        console.log(event, "values");
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        console.log(formData);
    };
    const handleSubmit = async (event) => {
        formData.jobId = jobsData.projects.length;
        formData.jobTitle = event.target.element.jobTitle.value;
        formData.jobPositions = event.target.element.jobPositions.value;
        formData.location = event.target.element.location.value;
        formData.higherQualification = event.target.element.higherQualification.value;
        formData.experience = event.target.element.experience.value;
        formData.skills = event.target.element.skills.value;
        formData.jobDescription = event.target.element.jobDescription.value;
        formData.salary = 25000;
        console.log(formData, "data is")
        event.preventDefault();
        try {
            const response = await axios.post(api_url, formData);
            console.log('Form data submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };

    return (
        <Box>
            <h3 className={FormStyles.heading}>{COMPANY_REQUIREMENT}</h3>
            <form onSubmit={() => handleSubmit()}>
                <Box className={FormStyles.form}>
                    <Box className={FormStyles.form_fields}>
                        <Box>
                            <label htmlFor="jobTitle" className={FormStyles.form_label}>{POSITION_TITLE}</label>
                            <Textfield id="jobTitle" label={"Enter the Job Title"} name="jobTitle" value={formData.jobTitle} onChange={handleChange} className={FormStyles.form_title} />
                        </Box>
                        <Box>
                            <label htmlFor="jobPositions">{NUMBER_OF_POSITION}</label>
                            <Textfield id="jobPositions" label={"Enter the No. of Position"} name="jobPositions" value={formData.jobPositions} onChange={handleChange} />
                        </Box>
                    </Box>
                    <Box className={FormStyles.form_fields}>
                        <Box>
                            <label htmlFor="location">{LOCATION}</label>
                            <Textfield id="location" label={"Enter the location"} name="location" value={formData.location} onChange={handleChange} />
                        </Box>
                        <Box>
                            <label htmlFor="higherQualification">{QUALIFICATION}</label>
                            <Textfield id="higherQualification" label={"Enter the Qualification"} name="higherQualification" value={formData.higherQualification} onChange={handleChange} />
                        </Box>
                    </Box>
                    <Box className={FormStyles.form_fields}>
                        <Box>
                            <label htmlFor="experience">{EXPERIENCE}</label>
                            <Textfield id="experience" label={"Enter the experience"} name="experience" value={formData.experience} onChange={handleChange} />
                        </Box>
                        <Box>
                            <label htmlFor="skills">{SKILLS}</label>
                            <Textfield id="skills" label={"Enter the Skill"} name="skills" value={formData.skills} onChange={handleChange} />
                        </Box>
                    </Box>
                    <Box className={FormStyles.form_fields_description}>
                        <label htmlFor="jobDescription">{DISCRIPTION}</label>
                        <Textfield id="jobDescription" label={"Enter the jobDescription"} name="jobDescription" value={formData.jobDescription} onChange={handleChange} />
                    </Box>
                    <Box className={FormStyles.form_button}>
                        <CommonButton type="submit" buttonText={BUTTON_TEXT} />
                        <SecondCommonButton secondButtonText={SECOND_BUTTON_TEXT} />
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default ApplicationForm;
