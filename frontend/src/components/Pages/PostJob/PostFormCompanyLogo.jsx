export default function PostFormCompanyLogo() {
    return (
        <div className="company-logo">
            <img
            className="post-img"
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
            />
            <input type="file" src="image.png" name="companyImage"/>
        </div>
    );
}