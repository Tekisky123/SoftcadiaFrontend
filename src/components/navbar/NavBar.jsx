
// import { Link, useNavigate } from 'react-router-dom'
// import './NavBar.css';
// import { useState } from 'react';

// const NavBar = () => {

//    const [dropdownVisible, setDropdownVisible] = useState({
//       institutions: false,
//       services: false,
//       careers: false,
//       industries: false,
//     });
  
//     const handleDropdownClick = (dropdownName) => {
//       setDropdownVisible((prev) => ({
//         ...prev,
//         [dropdownName]: !prev[dropdownName],
//       }));
  
//       // If you want to close the dropdown after selecting an option, uncomment the line below
//       // setDropdownVisible((prev) => ({ ...prev, [dropdownName]: false }));
//     };
  
//     const closeDropdown = () => {
//       setDropdownVisible({
//         institutions: false,
//         services: false,
//         careers: false,
//         industries: false,
//       });
//     };
  
  
//    return (
//       <>
//          <nav>

//             <div className="wrapper">
//                <div className="logo"><Link to='/' onClick={closeDropdown}>Softcadia</Link></div>

//                <ul className='nav-links' >
//                   {/* for instructions */}
//                   <li >
//                      <Link onClick={() => handleDropdownClick('institutions')}>Institutions</Link>
//                      {dropdownVisible.institutions && (
//                      <div className={`mega-box ${dropdownVisible.institutions ? '' : 'hide'}`}>
//                         <div className="content">

//                            <div className="row">
//                               <img src="footerImg.jpg" alt="" />
//                            </div>
//                            <div className="row">
//                               {/* <header>design service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/AI" onClick={closeDropdown} >AI</Link></li>
//                                  <li ><Link to="/insurance" onClick={closeDropdown} >Interactive</Link></li>
//                                  <li><Link to="/blogs" onClick={closeDropdown} >Blogs</Link></li>
//                                  <li><Link to="/cloud" onClick={closeDropdown}  >Cloud</Link></li>
//                               </ul>
                              
//                            </div>
                       
//                            <div className="row">
//                               {/* <header>email service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/communicationmedia" onClick={closeDropdown}>Competitive Agility</Link></li>
//                                  <li><Link to="/health" onClick={closeDropdown}>Covid-19</Link></li>
//                                  <li><Link to="/customerexperience" onClick={closeDropdown}>Customer Experience</Link></li>
//                                  <li><Link to="/futureSystem" onClick={closeDropdown}>Future Systems</Link></li>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>security service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to='/futurework' onClick={closeDropdown}>Future Workforce</Link></li>
//                                  <li><Link to="/industry-x" onClick={closeDropdown}>Industry x</Link></li>
//                                  <li><Link to="itsecurity" onClick={closeDropdown}>IT Security</Link></li>
//                                  <li><Link to='/podcast' onClick={closeDropdown}>Podcasts</Link></li>
//                               </ul>
//                            </div>

//                         </div>
//                      </div>
//                        )}
//                   </li>
              

//                   {/* for services */}
//                   <li>
//                      <Link onClick={() => handleDropdownClick('services')} >Services</Link>
//                      {dropdownVisible.services && (
//                      <div  className={`mega-box ${dropdownVisible.services ? '' : 'hide'}`}>
//                         <div className="content">

//                            <div className="row">
//                               <img src="footerImg.jpg" alt="" />
//                            </div>
//                            <div className="row">
//                               {/* <header>design service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/application-service" onClick={closeDropdown} >Application Services</Link></li>
//                                  <li><Link to="/businesprocess-service" onClick={closeDropdown}>Buisness Process</Link></li>
//                                  <li><Link to="/businessstratgy-service" onClick={closeDropdown}>Buisness Strategy</Link></li>
//                                  <li><Link to="/managementchange-service" onClick={closeDropdown}>Change Management</Link></li>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>email service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/customerexp-service" onClick={closeDropdown}>Customer Experience</Link></li>
//                                  <li><Link to="/analyst-service" onClick={closeDropdown}>Data and Analytics</Link></li>
//                                  <li><Link to="/ecosystem-service" onClick={closeDropdown} >Ecosystem Partners</Link></li>
//                                  <li><Link to="/finance-service" onClick={closeDropdown}>Finance Consulting</Link></li>
//                               </ul>
//                            </div>

//                         </div>
//                      </div>
//                       )}
//                   </li>

//                   {/* for industries */}
                 
//                   <li >
//                      <Link onClick={() => handleDropdownClick('careers')} >Careers</Link>
//                      {dropdownVisible.careers && (
//                      <ul className={`drop-down ${dropdownVisible.careers ? '' : 'hide'}`}  >
//                         <li><Link to="/jobscar" onClick={closeDropdown} >Jobs</Link></li>
//                         <li><Link to="/trainingscar" onClick={closeDropdown} >Training</Link></li>
//                      </ul>
//                        )}
//                   </li>
                
//                   <li>
//                      <Link onClick={() => handleDropdownClick('industries')} >Industries</Link>
//                      {dropdownVisible.industries && (
//                      <div className={`mega-box ${dropdownVisible.industries ? '' : 'hide'}`}>
//                         <div className="content">

//                            <div className="row">
//                               <img src="footerImg.jpg" alt="" />
//                            </div>
                          
//                            <div className="row" >
//                               {/* <header>design service</header> */}
//                               <ul className="mega-links">
//                                  <div className="dropdown-content">
//                                  <li><Link to="/Aerospace-and-defence" onClick={closeDropdown} >Aerospace & Deffence</Link></li>
//                                  <li><Link to="/automotive" onClick={closeDropdown}>Automotive</Link></li>
//                                  <li><Link to="/banking" onClick={closeDropdown} >Banking</Link></li>
//                                  <li><Link to='/capitalmarket' onClick={closeDropdown} >Capital Markets</Link></li>
//                                  <li><Link to="/chemical" onClick={closeDropdown} >Chemicals</Link></li>
//                                  <li><Link to="/communicationmedia" onClick={closeDropdown}>Communication & Media</Link></li>
//                                  </div>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>email service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/customergoods&service" onClick={closeDropdown}>Customer goods & services</Link></li>
//                                  <li><Link to="/energy" onClick={closeDropdown}>Energy</Link></li>
//                                  <li><Link to="/health" onClick={closeDropdown}>Health</Link></li>
//                                  <li><Link to="/hightech" onClick={closeDropdown}>High Tech x</Link></li>
//                                  <li><Link to="/industrialEquipment" onClick={closeDropdown}>Industrial Equipment</Link></li>
//                                  <li><Link to="/insurance"  onClick={closeDropdown}>Insurance</Link></li>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>security service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/lifescience" onClick={closeDropdown}>Life Sciences</Link></li>
//                                  <li><Link to="/naturalresources" onClick={closeDropdown}>Natural Resources</Link></li>
//                                  <li><Link to="/publicservice" onClick={closeDropdown}>Public Services</Link></li>
//                                  <li><Link to="/cloud" onClick={closeDropdown}>Cloud Service</Link></li>
//                                  <li><Link to="/softwarePlatforms" onClick={closeDropdown}>Software and platforms</Link></li>
//                                  <li><Link to="/travel" onClick={closeDropdown}>Travel</Link></li>
//                               </ul>
//                            </div>

//                         </div>
//                      </div>
//                       )}
//                   </li>

//                   <li><Link to='/aboutus'>Who we are</Link>
//                   </li>
//                </ul>
//             </div>
//          </nav>
//       </>
//    )
// }

// export default NavBar;




// import { Link, useNavigate } from 'react-router-dom'
// import './NavBar.css';
// import { useState } from 'react';

// const NavBar = () => {

//    const [dropdownVisible, setDropdownVisible] = useState({
//       institutions: false,
//       services: false,
//       careers: false,
//       industries: false,
//     });
  
//     const handleDropdownClick = (dropdownName) => {
//       setDropdownVisible((prev) => ({
//         ...prev,
//         [dropdownName]: !prev[dropdownName],
//       }));
  
//       // If you want to close the dropdown after selecting an option, uncomment the line below
//       // setDropdownVisible((prev) => ({ ...prev, [dropdownName]: false }));
//     };
  
//     const closeDropdown = () => {
//       setDropdownVisible({
//         institutions: false,
//         services: false,
//         careers: false,
//         industries: false,
//       });
//     };


//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleToggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };
  
  
//    return (
//       <>
//          <nav>

//          {/* <div className="wrapper">
//                     <div className="logo">
//                         <Link to='/'>Softcadia</Link>
//                     </div>

//                     <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
//                         <div className="bar"></div>
//                         <div className="bar"></div>
//                         <div className="bar"></div>
//                     </div>

//                     <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                      
//                     </ul>
//                 </div> */}

//             <div className="wrapper">
//                <div className="logo"><Link to='/' onClick={closeDropdown}>Softcadia</Link></div>

//                <ul className='nav-links' >
//                   {/* for instructions */}
//                   <li >
//                      <Link onClick={() => handleDropdownClick('institutions')}>Institutions</Link>
//                      {dropdownVisible.institutions && (
//                      <div className={`mega-box ${dropdownVisible.institutions ? '' : 'hide'}`}>
//                         <div className="content">

//                            <div className="row">
//                               <img src="footerImg.jpg" alt="" />
//                            </div>
//                            <div className="row">
//                               {/* <header>design service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/AI" onClick={closeDropdown} >AI</Link></li>
//                                  <li ><Link to="/insurance" onClick={closeDropdown} >Interactive</Link></li>
//                                  <li><Link to="/blogs" onClick={closeDropdown} >Blogs</Link></li>
//                                  <li><Link to="/cloud" onClick={closeDropdown}  >Cloud</Link></li>
//                               </ul>
                              
//                            </div>
                       
//                            <div className="row">
//                               {/* <header>email service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/communicationmedia" onClick={closeDropdown}>Competitive Agility</Link></li>
//                                  <li><Link to="/health" onClick={closeDropdown}>Covid-19</Link></li>
//                                  <li><Link to="/customerexperience" onClick={closeDropdown}>Customer Experience</Link></li>
//                                  <li><Link to="/futureSystem" onClick={closeDropdown}>Future Systems</Link></li>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>security service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to='/futurework' onClick={closeDropdown}>Future Workforce</Link></li>
//                                  <li><Link to="/industry-x" onClick={closeDropdown}>Industry x</Link></li>
//                                  <li><Link to="itsecurity" onClick={closeDropdown}>IT Security</Link></li>
//                                  <li><Link to='/podcast' onClick={closeDropdown}>Podcasts</Link></li>
//                               </ul>
//                            </div>

//                         </div>
//                      </div>
//                        )}
//                   </li>
              

//                   {/* for services */}
//                   <li>
//                      <Link onClick={() => handleDropdownClick('services')} >Services</Link>
//                      {dropdownVisible.services && (
//                      <div  className={`mega-box ${dropdownVisible.services ? '' : 'hide'}`}>
//                         <div className="content">

//                            <div className="row">
//                               <img src="footerImg.jpg" alt="" />
//                            </div>
//                            <div className="row">
//                               {/* <header>design service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/application-service" onClick={closeDropdown} >Application Services</Link></li>
//                                  <li><Link to="/businesprocess-service" onClick={closeDropdown}>Buisness Process</Link></li>
//                                  <li><Link to="/businessstratgy-service" onClick={closeDropdown}>Buisness Strategy</Link></li>
//                                  <li><Link to="/managementchange-service" onClick={closeDropdown}>Change Management</Link></li>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>email service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/customerexp-service" onClick={closeDropdown}>Customer Experience</Link></li>
//                                  <li><Link to="/analyst-service" onClick={closeDropdown}>Data and Analytics</Link></li>
//                                  <li><Link to="/ecosystem-service" onClick={closeDropdown} >Ecosystem Partners</Link></li>
//                                  <li><Link to="/finance-service" onClick={closeDropdown}>Finance Consulting</Link></li>
//                               </ul>
//                            </div>

//                         </div>
//                      </div>
//                       )}
//                   </li>

//                   {/* for industries */}
                 
//                   <li >
//                      <Link onClick={() => handleDropdownClick('careers')} >Careers</Link>
//                      {dropdownVisible.careers && (
//                      <ul className={`drop-down ${dropdownVisible.careers ? '' : 'hide'}`}  >
//                         <li><Link to="/jobscar" onClick={closeDropdown} >Jobs</Link></li>
//                         <li><Link to="/trainingscar" onClick={closeDropdown} >Training</Link></li>
//                      </ul>
//                        )}
//                   </li>
                
//                   <li>
//                      <Link onClick={() => handleDropdownClick('industries')} >Industries</Link>
//                      {dropdownVisible.industries && (
//                      <div className={`mega-box ${dropdownVisible.industries ? '' : 'hide'}`}>
//                         <div className="content">

//                            <div className="row">
//                               <img src="footerImg.jpg" alt="" />
//                            </div>
                          
//                            <div className="row" >
//                               {/* <header>design service</header> */}
//                               <ul className="mega-links">
//                                  <div className="dropdown-content">
//                                  <li><Link to="/Aerospace-and-defence" onClick={closeDropdown} >Aerospace & Deffence</Link></li>
//                                  <li><Link to="/automotive" onClick={closeDropdown}>Automotive</Link></li>
//                                  <li><Link to="/banking" onClick={closeDropdown} >Banking</Link></li>
//                                  <li><Link to='/capitalmarket' onClick={closeDropdown} >Capital Markets</Link></li>
//                                  <li><Link to="/chemical" onClick={closeDropdown} >Chemicals</Link></li>
//                                  <li><Link to="/communicationmedia" onClick={closeDropdown}>Communication & Media</Link></li>
//                                  </div>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>email service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/customergoods&service" onClick={closeDropdown}>Customer goods & services</Link></li>
//                                  <li><Link to="/energy" onClick={closeDropdown}>Energy</Link></li>
//                                  <li><Link to="/health" onClick={closeDropdown}>Health</Link></li>
//                                  <li><Link to="/hightech" onClick={closeDropdown}>High Tech x</Link></li>
//                                  <li><Link to="/industrialEquipment" onClick={closeDropdown}>Industrial Equipment</Link></li>
//                                  <li><Link to="/insurance"  onClick={closeDropdown}>Insurance</Link></li>
//                               </ul>
//                            </div>

//                            <div className="row">
//                               {/* <header>security service</header> */}
//                               <ul className="mega-links">
//                                  <li><Link to="/lifescience" onClick={closeDropdown}>Life Sciences</Link></li>
//                                  <li><Link to="/naturalresources" onClick={closeDropdown}>Natural Resources</Link></li>
//                                  <li><Link to="/publicservice" onClick={closeDropdown}>Public Services</Link></li>
//                                  <li><Link to="/cloud" onClick={closeDropdown}>Cloud Service</Link></li>
//                                  <li><Link to="/softwarePlatforms" onClick={closeDropdown}>Software and platforms</Link></li>
//                                  <li><Link to="/travel" onClick={closeDropdown}>Travel</Link></li>
//                               </ul>
//                            </div>

//                         </div>
//                      </div>
//                       )}
//                   </li>

//                   <li><Link to='/aboutus'>Who we are</Link>
//                   </li>
//                </ul>
//             </div>
//          </nav>
//       </>
//    )
// }

// export default NavBar;




import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

const NavBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState({
        institutions: false,
        services: false,
        careers: false,
        industries: false,
    });

    const handleDropdownClick = (dropdownName) => {
        setDropdownVisible((prev) => ({
            ...prev,
            [dropdownName]: !prev[dropdownName],
        }));

        // If you want to close the dropdown after selecting an option, uncomment the line below
        // setDropdownVisible((prev) => ({ ...prev, [dropdownName]: false }));
    };

    const closeDropdown = () => {
        setDropdownVisible({
            institutions: false,
            services: false,
            careers: false,
            industries: false,
        });
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <Link to='/' onClick={closeDropdown}>Softcadia</Link>
                    </div>

                    <button className="hamburger-menu" onClick={handleToggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>

                    <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                        {/* for instructions */}
                        <li>
                            <Link onClick={() => handleDropdownClick('institutions')}>Institutions</Link>
                            {dropdownVisible.institutions && (
                                <div className={`mega-box ${dropdownVisible.institutions ? '' : 'hide'}`}>
                                    <div className="content">
                                        <div className="row">
                                            <img src="footerImg.jpg" alt="" />
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to="/AI" onClick={closeDropdown} >AI</Link></li>
                                                <li><Link to="/insurance" onClick={closeDropdown} >Interactive</Link></li>
                                                <li><Link to="/blogs" onClick={closeDropdown} >Blogs</Link></li>
                                                <li><Link to="/cloud" onClick={closeDropdown}  >Cloud</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to="/communicationmedia" onClick={closeDropdown}>Competitive Agility</Link></li>
                                                <li><Link to="/health" onClick={closeDropdown}>Covid-19</Link></li>
                                                <li><Link to="/customerexperience" onClick={closeDropdown}>Customer Experience</Link></li>
                                                <li><Link to="/futureSystem" onClick={closeDropdown}>Future Systems</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to='/futurework' onClick={closeDropdown}>Future Workforce</Link></li>
                                                <li><Link to="/industry-x" onClick={closeDropdown}>Industry x</Link></li>
                                                <li><Link to="itsecurity" onClick={closeDropdown}>IT Security</Link></li>
                                                <li><Link to='/podcast' onClick={closeDropdown}>Podcasts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* for services */}
                        <li>
                            <Link onClick={() => handleDropdownClick('services')} >Services</Link>
                            {dropdownVisible.services && (
                                <div className={`mega-box ${dropdownVisible.services ? '' : 'hide'}`}>
                                    <div className="content">
                                        <div className="row">
                                            <img src="footerImg.jpg" alt="" />
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to="/application-service" onClick={closeDropdown} >Application Services</Link></li>
                                                <li><Link to="/businesprocess-service" onClick={closeDropdown}>Buisness Process</Link></li>
                                                <li><Link to="/businessstratgy-service" onClick={closeDropdown}>Buisness Strategy</Link></li>
                                                <li><Link to="/managementchange-service" onClick={closeDropdown}>Change Management</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to="/customerexp-service" onClick={closeDropdown}>Customer Experience</Link></li>
                                                <li><Link to="/analyst-service" onClick={closeDropdown}>Data and Analytics</Link></li>
                                                <li><Link to="/ecosystem-service" onClick={closeDropdown} >Ecosystem Partners</Link></li>
                                                <li><Link to="/finance-service" onClick={closeDropdown}>Finance Consulting</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* for careers */}
                        <li >
                            <Link onClick={() => handleDropdownClick('careers')} >Careers</Link>
                            {dropdownVisible.careers && (
                                <ul className={`drop-down ${dropdownVisible.careers ? '' : 'hide'}`}  >
                                    <li><Link to="/jobscar" onClick={closeDropdown} >Jobs</Link></li>
                                    <li><Link to="/trainingscar" onClick={closeDropdown} >Training</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* for industries */}
                        <li>
                            <Link onClick={() => handleDropdownClick('industries')} >Industries</Link>
                            {dropdownVisible.industries && (
                                <div className={`mega-box ${dropdownVisible.industries ? '' : 'hide'}`}>
                                    <div className="content">
                                        <div className="row">
                                            <img src="footerImg.jpg" alt="" />
                                        </div>
                                        <div className="row" >
                                            <ul className="mega-links">
                                                <div className="dropdown-content">
                                                    <li><Link to="/Aerospace-and-defence" onClick={closeDropdown} >Aerospace & Deffence</Link></li>
                                                    <li><Link to="/automotive" onClick={closeDropdown}>Automotive</Link></li>
                                                    <li><Link to="/banking" onClick={closeDropdown} >Banking</Link></li>
                                                    <li><Link to='/capitalmarket' onClick={closeDropdown} >Capital Markets</Link></li>
                                                    <li><Link to="/chemical" onClick={closeDropdown} >Chemicals</Link></li>
                                                    <li><Link to="/communicationmedia" onClick={closeDropdown}>Communication & Media</Link></li>
                                                </div>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to="/customergoods&service" onClick={closeDropdown}>Customer goods & services</Link></li>
                                                <li><Link to="/energy" onClick={closeDropdown}>Energy</Link></li>
                                                <li><Link to="/health" onClick={closeDropdown}>Health</Link></li>
                                                <li><Link to="/hightech" onClick={closeDropdown}>High Tech x</Link></li>
                                                <li><Link to="/industrialEquipment" onClick={closeDropdown}>Industrial Equipment</Link></li>
                                                <li><Link to="/insurance" onClick={closeDropdown}>Insurance</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <ul className="mega-links">
                                                <li><Link to="/lifescience" onClick={closeDropdown}>Life Sciences</Link></li>
                                                <li><Link to="/naturalresources" onClick={closeDropdown}>Natural Resources</Link></li>
                                                <li><Link to="/publicservice" onClick={closeDropdown}>Public Services</Link></li>
                                                <li><Link to="/cloud" onClick={closeDropdown}>Cloud Service</Link></li>
                                                <li><Link to="/softwarePlatforms" onClick={closeDropdown}>Software and platforms</Link></li>
                                                <li><Link to="/travel" onClick={closeDropdown}>Travel</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li><Link to='/aboutus'>Who we are</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;