import { Link } from "react-router-dom";
import Path from "../../../../Paths";
import UniversalLinks from "./UniversalLinks";

export default function EmployeeBar({
    onComponentChangeHandler,
}) {

    return (
    <aside>
        <nav className="profile-settings">
            <ul>

                <Link Link to={Path.EmployeeJobsApplied} onClick={onComponentChangeHandler}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <p>Jobs Applied</p>
                    </li>
                </Link>

                <Link Link to={Path.EmployeeDocuments} onClick={onComponentChangeHandler}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                        </svg>
                        <p>My Documents</p>
                    </li>
                </Link>
            </ul>
            <UniversalLinks onComponentChangeHandler={onComponentChangeHandler}/>
        </nav>
    </aside>
    );
}