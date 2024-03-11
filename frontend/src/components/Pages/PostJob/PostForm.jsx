import PostFormModel1 from "./PostFormModels/PostFormModel1";
import PostFormModel2 from "./PostFormModels/PostFormModel2";
import PostFormModelChoose from "./PostFormModels/PostFormModelChoose";
import PostFormCompanyLogo from "./PostFormCompanyLogo";
import PostFormTypeInfo from "./PostFormTypeInfo";

import { useState } from 'react';
import useForm from "../../../hooks/useForm";

const initialValues = {
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
    // TODO ADD ONSUBMIT
    const formSubmitHandler = () => {;
        console.log(values);
    }
    const { values, onChange, onSubmit } = useForm(formSubmitHandler, initialValues);
    
    const onClickModelChoose = (model) => {
        // Created To Change between Models Template
        setTempModel(model);
    }


    return(
        <form action="#" onSubmit={onSubmit}>
            <PostFormCompanyLogo />

            <input type="text" placeholder="Job Title" />

            <PostFormTypeInfo formValues={values} onChangeHandler={onChange} />

            <PostFormModelChoose onClickModelChoose={onClickModelChoose} />

            {tempModel == 'model1' && <PostFormModel1 formValues={values} onChangeHandler={onChange} />}
            {tempModel == 'model2' && <PostFormModel2 formValues={values} onChangeHandler={onChange} />}

            <input className="submit-btn" type="submit" value="Post a Job" />
        </form>
    );
}