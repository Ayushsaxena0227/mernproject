import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      console.log("Fetching users data...");
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
          'Content-Type': 'application/json',
        },
      });

      // Check the status of the response
      if (!response.ok) {
        console.error(`Failed to fetch users data: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      console.log("Fetched users data:", data);

      // Ensure data.msg is defined and convert it to an array if it's not already
      const usersArray = Array.isArray(data.msg) ? data.msg : [data.msg];
      console.log("Setting users data...", usersArray);
      setUsers(usersArray);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    console.log("Running useEffect to fetch users data...");
    getAllUsersData();
  }, []); // Make sure to only run on component mount

  return (
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin Users Data</h1>
      </div>
      <div className="container admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((curUser,index) => (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                  <td>
                    {/* Add link or button for update */}
                  </td>
                  <td>
                    <button className="btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};



// import { useEffect, useState } from "react";
// import { useAuth } from "../store/auth";

// export const AdminUsers = () => {
//   const [users, setUsers] = useState([]);

//   const { authorizationToken ,API } = useAuth();

//   const getAllUsersData = async () => {
//     // try {
//     //   const response = await fetch(`${API}/api/admin/users`, {
//     //     method: "GET",
//     //     headers: {
//     //       Authorization: authorizationToken,
//     //     },
//     //   });
//       try {
//         const response = await fetch(`${API}/api/admin/users`, {
//           method: "GET",
//           headers: {
//             Authorization: authorizationToken,
//             'Content-Type': 'application/json',
//           },
//         });
//       const data = await response.json();
//       console.log(`users data ${data}`);
//       setUsers(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   delelte the user on delete button

//   useEffect(() => {
//     getAllUsersData();
//   }, []);
//   return (
//     <>
//       <section className="admin-users-section">
//         <div className="container">
//           <h1>Admin Users Data </h1>
//         </div>
//         <div className="container  admin-users">
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Update</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((curUser, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{curUser.username}</td>
//                     <td>{curUser.email}</td>
//                     <td>{curUser.phone}</td>
//                     <td>
//                       {/* <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link> */}
//                     </td>
//                     <td>
//                       <button
//                         className="btn"
//                         // onClick={() => deleteUser(curUser._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };