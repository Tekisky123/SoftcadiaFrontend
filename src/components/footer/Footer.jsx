import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import './Footer.css'

export const Footer=()=>{
    return(
        <>
       
          
       <footer className='footer'>
            <div className="row5">

                <div className="colm2">
                    <img style={{height:'50px'}} src="logo.jpg" alt="" className='logo2' />
                    <p> Softcadia is your knowledge hub, where learning is a journey, and expertise is a destination. We build greater futures through innovation and collective knowledge. </p>
                </div>

                <div className="colm2">
                    <h3>Office <div className="underline"><span></span></div></h3>
                    <p className='email-id'>ITPL Road <br />whitefiled, benglore <br />karnataka,pin 23333, india <br  />
                    softcadiaUSA889@gmail.com</p>

                    {/* <p>whitefiled, benglore</p>
                    <p>karnataka,pin 23333, india</p> */}
                    {/* <p className='email-id'>softcadiaUSA889@gmail.com</p> */}
                    <h5>+91 - 098876658</h5>
                </div>
                
                <div className="colm2">
                    <h3>Links <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/businesprocess-service">service</Link></li>
                        <li><Link to="/aboutus">About us</Link></li>
                        
                        <li><Link to="/jobscar">Careers</Link> </li>
                    </ul>
                </div>

                <div className="colm2">
             <h3>Newsletter <div className="underline"><span></span></div></h3>
               <form className='frm' action="">
                <HiOutlineMail className='f1'/>
                <input type="email" placeholder='Enter your email id' />
                <button type='submit'><FaArrowRight className='f2'/></button>
               </form>

               <div className="social-icons">
                <RiFacebookCircleLine className='f3'/>
                <LuTwitter  className='f3'/>
                <BsWhatsapp  className='f3'/>
                <LuInstagram  className='f3'/>
               </div>
                </div>
            </div>
            <hr className='hr' />
            <p className='copyrit'>Softcadia &copy; 2021 - All Rights Reserver</p>
        </footer>
      

        
        </>
    )
}
export default Footer;