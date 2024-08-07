import { Link } from 'react-router-dom'
import './ClientCollaboration.css'


export const ClientCollaboration=()=>{

    return(
        <>
        <br />
         <section className="success-story">
      <h1 class="sec-heading">Client Collabrations</h1>

      <div class="slider">
        <div class="col-6 slide-text">
          <div className='cntnt4'>
            <h5  >We serve a broad variety of customers in the health sciences, consumer goods,
                 and retail sectors as trusted advisors. Our commitment to excellent customer 
                 service and providing the best solutions has won us the highest client satisfaction rating in the 
                 business.</h5><br/><br/>
          
                 <button className='clientbtn'><Link to="/customerexperience">Read more</Link></button>
                 {/* <Link to="/customerexperience"> <button type='submit' className='btn '> Read more</button></Link> */}
          </div>
        </div>
        <div class="col-6 slide-img">
          <img
            src="Team work-amico.png"
            alt="World Travel App Development"
            title="World Travel Protection"
          />
        </div>
      </div>
    </section>
<br />
<br />
    

    <section className="highlights">
      <h1 class="sec-heading">Execution Testing</h1>

      <div class="slider">
        <div class="col-6 slide-text">
          <div className='cntnt4'>
            <h5>In today's interconnected world, a single technological breakdown
                 may create  cascade of problems for your company. Softcadia testing
                  development and execution services ensure that your landscape maintains a constant 
                  level of technical excellence.</h5><br/><br/>
           
           <button className='clientbtn'><Link to="/automotive">See more</Link></button>
           {/* <Link to="/automotive"> <button type='submit' className='btn '> See more</button></Link> */}
          </div>
        </div>
        <div class="col-6 slide-img">
          <img
            src="wallpaperbetter.jpg"
            alt="Team Work in Los Angeles"
            title="Company Team Work"
          />
        </div>
      </div>
    </section>
{/* <h1 style={{backgroundL:"red"}}>gvjnbv mh</h1> */}
    
        </>
    )

}