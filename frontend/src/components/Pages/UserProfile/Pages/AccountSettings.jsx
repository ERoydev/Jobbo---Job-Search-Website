import { useEffect } from "react"
import useForm from "../../../../hooks/useForm"

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  country: '',
  city: '',

}


export default function AccountSettings() {
  const submitHandler = () => {

  }
  const { values, onChange, onSubmit } = useForm(submitHandler, initialValues)

  useEffect(() => {
    
  }, [])

  return (

    <section>
      <header>
        <h1>Account Settings</h1>
      </header>

      <div className="information">
        <div className="container">
          <div className="card">
            <div className="card-info">
              <div className="media">
                <img src="images/img2.jpg" alt="" />
              </div>
              <div>
                <p>Emil Roydev</p>
                <p className="view-profile">
                  <a href="#">View Profile</a>
                </p>
              </div>
            </div>
            <div>
              <a href="#" className="auth-btn">
                Upload
              </a>
            </div>
          </div>
          <div className="form-field">
            <form action="#">
              <div>
                <input type="text" name="firstName" placeholder="First name" value={values.firstName} onChange={onChange}/>
                <input type="text" name="lastName" placeholder="Last name" value={values.lastName} onChange={onChange}/>
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" value={values.email} onChange={onChange} />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={values.phoneNumber}
                  onChange={onChange}
                />
              </div>
              <input type="text" name="address" placeholder="Address" value={values.address} onChange={onChange} />
              <div>
                <input type="text" name="country" placeholder="Country" value={values.country} onChange={onChange} />
                <input type="text" name="city" placeholder="City" value={values.city} onChange={onChange} />
              </div>
            </form>
          </div>
          <div className="user-buttons">
            <a href="#" className="userprofile-btn">
              Cancel
            </a>
            <a href="#" className="auth-btn">
              Save
            </a>
          </div>
          <div className="card deactivate">
            <div>
              <p className="title">Deactivate account</p>
              <p className="info">
                Once you delete your account, there is no going back. Please be
                certain
              </p>
            </div>
            <a href="#" className="delete-btn">
              Deactivate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
    
}