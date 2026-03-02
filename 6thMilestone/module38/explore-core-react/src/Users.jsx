import { use } from "react"

export default function Users({fetchUsers}) {
//   const name = 'John Doe';
//   const age = 30;
 
    const users = use(fetchUsers);      
    console.log(users);
  
  return(
    <div className="card">
      <h2>Users: {users.length} </h2>
    </div>

    )

}