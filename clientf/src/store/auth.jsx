import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const API = "http://localhost:5000";
  // const API = "https://api.thapatechnical.site";
  // const API = import.meta.env.VITE_APP_URI_API;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIN ", isLoggedIn);

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION - to get the currently loggedIN user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data ", data.userdata);
        setUser(data.userdata);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  // to fetch the services data from the database
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  //please subs to thapa technical channel .. also world best js course is coming soon

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
// import { createContext, useContext, useEffect, useState } from "react";
// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const[user, setuser] = useState("");
//   const[services, Setservices] = useState("");
//   const authorizationtoken =  `Bearer ${token}`

//   const storeTokenInLS = (serverToken) => {
//     setToken(serverToken);
//     return localStorage.setItem("token", serverToken);
//   };

//   let isLoggedIn = !!token;
//   console.log("isLoggedIN ", isLoggedIn);

//   // tackling the logout functionality
//   const LogoutUser = () => {
//     setToken("");
//     return localStorage.removeItem("token");
//   };

//   //getting userdata to show their email and name at contact us page
//   const userauthentication = async()=>{
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/user", {
//         method: "GET",
//         headers: {
//           Authorization: authorizationtoken,
//         },
//       });

//       if(response.ok){
//         const data = await response.json();
//         console.log("users data", data.userdata);
//         setuser(data.userdata);

//       }
      
//     } catch (error) {
//       console.log("Error Fetching using data");
//     }
//   }

//   // to fetch the services data from backend
//   const getservice= async ()=>{
//     try {
//       const response = await fetch("http://localhost:5000/api/data/service", {
//         method: "GET",
//       });

//       if(response.ok){
//         const data = await response.json(); //data json m h pr we wont in object
//         console.log(data.msg);
//         Setservices(data.msg);  //ab jo data mila he vo mere services name k state m stored h and ab m use pass kar dunga provider m so taht i can use it in react service page


//       }
//     } catch (error) {
//       console.log(`services error ${error}`)
//     }
//   }
//   useEffect(()=>{
//     getservice();
//     userauthentication();
//   }, [])

//   return (
//     <AuthContext.Provider
//       value={{
//         storeTokenInLS,
//         LogoutUser,
//         isLoggedIn,
//         user,
//         services,
//         authorizationtoken,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const authContextValue = useContext(AuthContext);
//   if (!authContextValue) {
//     throw new Error("useAuth used outside of the Provider");
//   }
//   return authContextValue;
// };