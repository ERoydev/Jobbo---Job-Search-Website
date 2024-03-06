import PostFormModel1 from "./PostFormModels/PostFormModel1";
import PostFormModel2 from "./PostFormModels/PostFormModel2";
import PostFormModelChoose from "./PostFormModels/PostFormModelChoose";
import PostFormCompanyLogo from "./PostFormCompanyLogo";
import PostFormTypeInfo from "./PostFormTypeInfo";

export default function PostForm() {
    const [tempModel, setTempModel] = useState();
    return(
        <form action="#">
            <PostFormCompanyLogo />

            <input type="text" placeholder="Job Title" />

            <PostFormTypeInfo />

            <PostFormModelChoose />

            <PostFormModel1 />

            <PostFormModel2 />
            
            <input className="submit-btn" type="submit" value="Post a Job" />
        </form>

    );
}