import { Link } from 'react-router-dom';
import './Clients.css'
export const Clients=()=>{
    const customStyle = { '--delay':'-1;'};
    const customStyle2 = {"--delay":"0"};
    const customStyle3 = { "--delay":"1"};
    const customStyle4 = { "--delay":"2"};
    return(
        <>
        <div className="bodyclient">
<h2>Happy Clients, Highly satisfyed by..</h2>
<div className="clientwrapper">

    <div className="clientcard" style={customStyle}>
        <div className="clientcontent">
            <div className="imgclient">
                <img src="jessica.jpg" alt="" />
            </div>
            <div className="clientdetail">
            <span className='clientspan'></span>
         <p style={{color:"black"}}>DR.Jessica</p>
            </div>

        </div>
        <Link>follow</Link>
    </div>


    <div className="clientcard" style={customStyle2}>
        <div className="clientcontent">
            <div className="imgclient">
                <img src="jasmin.jpg" alt="" />
            </div>
            <div className="clientdetail">
            <span className='clientspan'></span>
         <p style={{color:"black"}}>DR.Jasmin</p>
            </div>

        </div>
        <Link>follow</Link>
    </div>



    <div className="clientcard" style={customStyle3}>
        <div className="clientcontent">
            <div className="imgclient">
                <img src="christie.jpg" alt="" />
            </div>
            <div className="clientdetail">
            <span className='clientspan'></span>
         <p style={{color:"black"}}>DR.Christie</p>
            </div>

        </div>
        <Link>follow</Link>
    </div>




    <div className="clientcard" style={customStyle4}>
        <div className="clientcontent">
            <div className="imgclient">
                <img src="garland.jpg" alt="" />
            </div>
            <div className="clientdetail">
            <span className='clientspan'></span>
         <p style={{color:"black"}}>DR.Garland</p>
            </div>

        </div>
        <Link>follow</Link>
    </div>



    <div className="clientcard" style={customStyle4}>
        <div className="clientcontent">
            <div className="imgclient">
                <img src="lamere.jpg" alt="" />
            </div>
            <div className="clientdetail">
            <span className='clientspan'></span>
         <p style={{color:"black"}}>DR.Lamere</p>
            </div>

        </div>
        <Link>follow</Link>
    </div>
    </div>
</div>



        </>
    )
}