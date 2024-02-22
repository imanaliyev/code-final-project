import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import './userAdminPanel.scss'
function UserAdminPanel() {
    const {token,decoded} = useContext(UserContext)
    const [users, setUsers] = useState(null)



    async function getFetch() {
        const data = await fetch("http://localhost:8080/user/",{ headers: {Authorization: `Bearer ${token}`}});
        const res = await data.json();
        setUsers(res);
      }

     
    useEffect(()   => {


          getFetch()


    }, [])


const deleteUser =(user) =>{
    fetch(`http://localhost:8080/user/${user._id}`  , {
      method: 'DELETE',
      headers: {Authorization: `Bearer ${token}`}
      
})
getFetch()


}
  return (
    <section id='user-admin-panel'>

    <table>
        <thead>
            <tr>
                <th></th>
                <th>image</th>
                <th>username</th>
                <th>email</th>
                <th>role</th>
                <th></th>
      

            </tr>
        </thead>
        <tbody>
            {
                users && users.map(x => (

                    <tr>
                        <td></td>
                        <td><img src={x.image} alt="" /></td>
                        <td>{x.username}</td>
                        <td>{x.email}</td>
                        <td>{x.role}</td>
                        <td> <button onClick={()=>deleteUser(x)}>delete</button> </td>
                       

                    </tr>
                ))


            }
        </tbody>

    </table>
   


</section>
  )
}

export default UserAdminPanel