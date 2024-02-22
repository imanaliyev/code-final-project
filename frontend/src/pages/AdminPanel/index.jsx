
import { Link } from 'react-router-dom'
import './adminPanel.scss'

function AdminPanel() {
  
    return (
       <section id='admin-panel'>

        <div className="container">
           <Link to={'/userAdminPanel'}> <div className="user">
                <h2>Users   </h2>
                <div className="line">

                </div>

            </div></Link>
           <Link to={'/productAdminPanel'}>
           <div className="product">
                <h2>Products    </h2>
                <div className="line">
                    
                    </div>

            </div></Link>
        </div>






       </section>
    )
}

export default AdminPanel