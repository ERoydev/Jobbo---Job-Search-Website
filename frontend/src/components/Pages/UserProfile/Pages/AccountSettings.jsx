import { useContext, useEffect, useState } from "react"

import useForm from "../../../../hooks/useForm"
import * as UserService from '../../../../services/UserService.js'
import AuthContext from '../../../../contexts/AuthContext.jsx'

const initialValues = {
  email: '',
  role: '',
  country: '',
  city: '',
  phone_number: '',
  universal_name: '',
  street: '',
}


export default function AccountSettings() {
  const [userInformation, setUserInformation] = useState(initialValues);
  const { userId } = useContext(AuthContext)


  useEffect(() => {
    UserService.getUser(userId)
      .then(result => {
        setUserInformation(result)
      })
    }, [])

  
  const onChange = (e) => {
    setUserInformation(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  // TODO Structure it better
  const submitHandler = async (e) => {
    e.preventDefault();
  
    const result = await UserService.saveUser(userInformation, userId)
    setUserInformation(result);
  }

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
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
              </div>
              <div>
                <p>Emil Roydev</p>
                <p className="view-profile">
                  <a href="#">View Profile</a>
                </p>
              </div>
            </div>

            <div>
              <input type="file" name="profile_picture" id="file" className="inputfile"/>
              <label htmlFor="file" className="auth-btn">Upload</label>
            </div>
          </div>

          <div className="form-field">
            <form action="#" onSubmit={submitHandler}>
              <div>
                <input type="text" name="universal_name" placeholder="Company name" value={userInformation.universal_name} onChange={onChange}/>
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" value={userInformation.email} onChange={onChange} />
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone number"
                  value={userInformation.phone_number}
                  onChange={onChange}
                />
              </div>
              <input type="text" name="street" placeholder="Street" value={userInformation.street} onChange={onChange} />
              <div>
                <input type="text" name="country" placeholder="Country" value={userInformation.country} onChange={onChange} />
                <input type="text" name="city" placeholder="City" value={userInformation.city} onChange={onChange} />
              </div>
            </form>
          </div>

          <div className="user-buttons">
            <a href="#" className="auth-btn" onClick={submitHandler}>
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