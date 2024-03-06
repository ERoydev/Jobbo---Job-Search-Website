import PostFormModel1 from "./PostFormModels/PostFormModel1";
import PostFormModel2 from "./PostFormModels/PostFormModel2";
import PostFormModelChoose from "./PostFormModels/PostFormModelChoose";
import PostFormCompanyLogo from "./PostFormCompanyLogo";
import PostFormTypeInfo from "./PostFormTypeInfo";

import { useState } from 'react';

export default function PostForm() {
    const [tempModel, setTempModel] = useState(false);

    const onClickModelChoose = (model) => {
        setTempModel(model);
    }

    return(
        <form action="#">
            <PostFormCompanyLogo />

            <input type="text" placeholder="Job Title" />

            <PostFormTypeInfo />

            <PostFormModelChoose onClickModelChoose={onClickModelChoose} />

            {tempModel == 'model1' && <PostFormModel1 />}
            {tempModel == 'model2' && <PostFormModel2 />}


            <input className="submit-btn" type="submit" value="Post a Job" />
        </form>

    );
}