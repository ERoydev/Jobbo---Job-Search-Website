import { useContext, useState } from 'react';
import useForm from "../../../hooks/useForm";

import PostFormModel1 from "./PostFormModels/PostFormModel1";
import PostFormModel2 from "./PostFormModels/PostFormModel2";
import PostFormModelChoose from "./PostFormModels/PostFormModelChoose";
import PostFormCompanyLogo from "./PostFormCompanyLogo";
import PostFormTypeInfo from "./PostFormTypeInfo";

import * as jobsService from "../../../services/JobsService";
import AuthContext from '../../../contexts/AuthContext';


const initialValues = {
    job_title: '',
    job_category: 'Category',
    job_type: 'Job Type',
    job_employment_type: 'Employment Location',
    job_country: '',
    job_city: '',
    job_street: '',
    job_salary: '',
    company_overview: '',
    key_responsibilities: '',
    qualifications: '',
    preferred_skills: '',
    job_description: '',
}

export default function PostForm() {
    const [tempModel, setTempModel] = useState(false);
    const { userId } = useContext(AuthContext);

    // TODO ADD ONSUBMIT
    const formSubmitHandler = async () => {;
        const result = await jobsService.postJob(values, userId)

        console.log(result)
    }
    
    const { values, onChange, onSubmit } = useForm(formSubmitHandler, initialValues);
    
    const onClickModelChoose = (model) => {
        // Created To Change between Models Template
        setTempModel(model);
    }

    return(
        <form action="#" onSubmit={onSubmit}>
            <PostFormCompanyLogo />

            <input type="text" placeholder="Job Title" name="job_title" value={values.job_title} onChange={onChange} />

            <PostFormTypeInfo formValues={values} onChangeHandler={onChange} />

            <PostFormModelChoose onClickModelChoose={onClickModelChoose} />

            {tempModel == 'model1' && <PostFormModel1 formValues={values} onChangeHandler={onChange} />}
            {tempModel == 'model2' && <PostFormModel2 formValues={values} onChangeHandler={onChange} />}

            <input className="submit-btn" type="submit" value="Post a Job" />
        </form>
    );
}