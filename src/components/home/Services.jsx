import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BiSolidUserRectangle } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import './Services.css'
import { Link } from "react-router-dom";

export const Services=()=>{

    return(
        <>
        <div className="imgs">

       <img className="homeserviceimg" src="webdesign.jpg" alt="" />
      {/* <h1 className="h">OUR SERVICES</h1> */}
      <div className="homeservicdiv">
    <div className="con2">
       <div className="box4" >
           <div className="cntnt2">
            <div className="icon"><BsFillFileBarGraphFill  style={{color: '#5b98eb'}} /></div>
            <div className="txt">
                <h3>Digital Marketing</h3>
                <p> From issue identification through project completion, we use our industry expertise and experience to assist our customers in achieving their strategic objectives. 
       </p>
                <Link to="/capitalmarket">read more</Link>
            </div>
           </div>
       </div>


       <div className="box4" >
           <div className="cntnt2">
            <div className="icon"><BiSolidUserRectangle style={{color: 'rgb(193, 108, 39)'}} /></div>
            <div className="txt">
                <h3> Client Collaborations</h3>
                <p> We serve a broad variety of customers in the consumer goods & retail sectors as trusted advisors.providing the best solutions.</p>
                <Link to="/customerexperience">read more</Link>
            </div>
           </div>
       </div>


       <div className="box4" >
           <div className="cntnt2">
            <div className="icon"><GrTechnology style={{color: '#5b98eb'}} /></div>
            <div className="txt">
                <h3>Technical Improvements</h3>
                <p>  We provide well-designed technical trade promotion management systems across broad variety of technologies.</p>
                <Link to="/automotive">read more</Link>
            </div>
           </div>
       </div>

       <div className="box4" >
           <div className="cntnt2">
            <div className="icon"><FaComputer style={{color: 'rgb(193, 108, 39)'}} /></div>
            <div className="txt">
                <h3>Graphic Design</h3>
                <p> Softcadia testing development and execution services ensure that your landscape maintains a constant level of technical excellence.</p>
                <Link to="/Aerospace-and-defence">read more</Link>
            </div>
           </div>
       </div>
       </div>
   
   
   </div>
   </div>
       </>
   )
} 