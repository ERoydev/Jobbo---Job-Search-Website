import PostFormModel1 from "./PostFormModels/PostFormModel1";
import PostFormModel2 from "./PostFormModels/PostFormModel2";
import PostFormModelChoose from "./PostFormModels/PostFormModelChoose";
import PostFormCompanyLogo from "./PostFormCompanyLogo";
import PostFormTypeInfo from "./PostFormTypeInfo";

import { useState } from 'react';

const initialFormValues = {
    category: 'Category',
    jobType: 'Job Type',
    employmentLocation: 'Employment Location',
    country: '',
    city: '',
    street: '',
    salary: '',
    jobDescription: '',
    companyOverview: '',
    keyResponsibilities: '',
    qualifications: '',
    preferredSkills: '',
}

export default function PostForm() {
    const [tempModel, setTempModel] = useState(false);
    const [formValues, setFormValues] = useState(initialFormValues);

    const onClickModelChoose = (model) => {
        // Created To Change between Models Template
        setTempModel(model);
    }

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return(
        <form action="#" onSubmit={formSubmitHandler}>
            <PostFormCompanyLogo />

            <input type="text" placeholder="Job Title" />

            <PostFormTypeInfo formValues={formValues} onChangeHandler={onChangeHandler} />

            <PostFormModelChoose onClickModelChoose={onClickModelChoose} />

            {tempModel == 'model1' && <PostFormModel1 formValues={formValues} onChangeHandler={onChangeHandler} />}
            {tempModel == 'model2' && <PostFormModel2 formValues={formValues} onChangeHandler={onChangeHandler} />}

            <input className="submit-btn" type="submit" value="Post a Job" />
        </form>

    );
}