import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";
export const Login =()=>{
    const[user, setuser] = useState({
        email:"",
        password: "",
    })

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();
    
const handleinput =(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setuser({
        ...user,
        [name]: value
    })
}

const handlesubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });

    const res_data = await response.json();
    console.log("login response", res_data);
    if (response.ok) {
     storeTokenInLS(res_data.token)
      toast("Login successful");
      setuser({ email: "", password: "" });
      navigate("/");
    } 
    else{
      toast("invalid credentials")
    }

  } catch (error) {
    console.log("login error", error);
    alert("An error occurred. Please try again later.");
  }
}


    return <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt=""
                  width="400"
                  height="500"
                />
              </div>

              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />

                <form onSubmit={handlesubmit}>


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
                  <button type="submit" className="btn btn-submit">login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
}
