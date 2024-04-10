import { Link } from "react-router-dom";
import Path from "../../../../Paths";
import UniversalLinks from "./UniversalLinks";

export default function EmployerBar({
    onComponentChangeHandler
}) {

    return (
    <aside>
        <nav className="profile-settings">
            <ul>

                <Link to={Path.EmployerApplicants} onClick={onComponentChangeHandler} >
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p>Applicants</p>
                    </li>
                </Link>

                <Link to={Path.EmployerJobsPosted} onClick={onComponentChangeHandler}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                        </svg>
                        <p>JobsPosted</p>
                    </li>
                </Link>

            </ul>
            <UniversalLinks onComponentChangeHandler={onComponentChangeHandler}/>
        </nav>
    </aside>

    );
}