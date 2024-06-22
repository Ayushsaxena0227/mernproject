import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
export const Register = () => {
    const [user, Setuser] = useState({
        username:"",
        email: "",
        phone: "",
        password: "",
    });

    const navigate =  useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleinput =(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    Setuser({...user,
        [name]:value}
    );
}

//handling form submission
const handlesubmit =async (e)=>{
    e.preventDefault();
    console.log(user);
    try{
    const response = await fetch(`http://localhost:5000/api/auth/register` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const res_data = await response.json();
    console.log("response from server" , res_data.message);

    if(response.ok){
      // collecting token 
      // const res_data = await response.json();
      // console.log("response from server" , res_data);
      // store token in local storage
      storeTokenInLS(res_data.token);
      // localStorage.setItem("token" , res_data.token);
      Setuser({ username:"",
      email: "",
      phone: "",
      password: "",})
      navigate("/login")
    }

    else{
      alert(res_data.extradetails)
    }

    console.log(response);
  }
  catch(error){
    console.log("register" , error);
  }
}
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="girl trying to do registration form"
                  width="400"
                  height="500"
                />
              </div>

              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />

                <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="username"
                      name="username"
                      placeholder="enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleinput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleinput}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter your phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleinput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleinput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
