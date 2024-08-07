import { Link, NavLink, useNavigate } from 'react-router-dom';
import './AdminNavBar.css';
import f from '/public/footerImg.jpg'

 const AdminNavbar = () => {

   function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
  }
  const navigate = useNavigate()
  
  const handleLogout = () => {
   localStorage.clear();
   localStorage.setItem("login",false)
   
   navigate("/")
 };

   return(
      <>
    
      <nav>
      <div className="wrapper">
         <div className="logo"><span><Link to="/adminhome">Softcadia</Link></span></div>


         <ul className="nav-links">
          
         <li>
            <NavLink to="/jobss" >Jobs</NavLink>
            
         </li>

         <li>
            <NavLink to="/appliedjobs">Applied Jobs</NavLink>
         </li>
         
         <li>
            <NavLink to="/trainings">Trainings</NavLink>         
         </li>
         

         <li>
            <NavLink to="/appliedtraining">Applied Training</NavLink>
         </li>

         <li>
            <NavLink to="/signup">User</NavLink>
         </li>

         

         <li onClick={handleLogout}><Link>Logout</Link></li>
         </ul>
      </div>
      </nav>
      </>
   )
   }
{/* <li><Link to="/signup">Add User Admin</Link></li> */}
   export default AdminNavbar;