import './CareerJobs.css'
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { formatDistanceToNow } from 'date-fns';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Base_Url } from '../../API'

import Loader from './Loader';


const CareerJobs = () => {



  const jobsArray = [
    "Remote Only",
    "Exclude Remote",
    "Work From Home Available",
  ]

  const jobsarray2 = [
    "Full-time",
    "Part-time",
    "Contract",
    "Third Party",]
  const [data, setData] = useState([]);
  const [selectedcategories, setSelectedcategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    axios
      .get(`${Base_Url}/softcadia/job/joblist`)
      .then((res) => {
        if (res) {
          setLoading(false)
        }
        setData(res.data);
        // setSelectedcategories(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  // window.scrollTo({ top: 0, behvior: "smooth" });

  const subtractDays = (createdDate) => {

    const postedDate = new Date(createdDate);
    const currentDate = new Date();

    const differenceInDays = Math.floor((currentDate - postedDate) / (1000 * 60 * 60 * 24));

    if (differenceInDays === 0) {
      return 'today';
    } else if (differenceInDays === 1) {
      return '1 day ago';
    } else {
      return `${differenceInDays} days ago`;
    }
  };
  const [isChecked, setChecked] = useState(false);
  const scrollContainerRef = useRef();

  const handlecheckboxchange = (category) => {
    if (searchItem) {
      setSearchItem("");
    }
    setChecked(!isChecked)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }



    if (selectedcategories.includes(category)) {
      setSelectedcategories(selectedcategories.filter((c) => c !== category));


    } else {
      setSelectedcategories([...selectedcategories, category]);
      // window.scrollTo({ top: 0, behvior: "smooth" });
    }

  };

  const handlesearchchange = (e) => {
    setSearchItem(e.target.value);

    setSelectedcategories([]);
  };

  const filterdata = selectedcategories.length
    ? data.filter(
      (item) =>
        selectedcategories.includes(item.remote) ||
        selectedcategories.includes(item.employee)
    )
    : data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.skills.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.company.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.joblocation.toLowerCase().includes(searchItem.toLowerCase())
    );

  return (
    <>

      {loading ? (
        <Loader />) : (
        <div className="carrier">


          <div className="leftcarrier ">
            <div className='bordr' >
              <div className="jobalert" >

                <h3>Finding a Job !</h3>
                <h6>Career ideas and guidance to pick the right role for you.</h6>
                {/* <h6 >The Secret of Getting ahead is getting started</h6> */}

              </div>

              <div className='options'>
                <h3>Remote Options</h3>

                <form action="">

                  {jobsArray.map((category) => (
                    <label key={category}>

                      <input
                        type="checkbox"
                        name="remote"
                        value={category}
                        checked={selectedcategories.includes(category)
                        }
                        onChange={() => handlecheckboxchange(category)}


                      />
                      {category}
                    </label>
                  ))}

                </form>


                <h3>Employment Type</h3>
                <form action="">

                  {jobsarray2.map((category) => (
                    <label key={category} >
                      <input
                        type="checkbox"
                        name="employee"
                        value={category}
                        checked={selectedcategories.includes(category)}
                        onChange={() => handlecheckboxchange(category)}
                      />
                      {category}
                    </label>
                  ))}

                </form>
              </div>
            </div>
          </div>

          {/* right div */}


          {/* ref={scrollContainerRef} */}
          <div className="rightcarrier" ref={scrollContainerRef} >
           
       
              <div className="carrierinput container">
              <img className='jobapplybigimg' src="ani2.jpg" alt="" style={{height:"10vh",marginLeft:"-10px"}} />
                <input style={{marginTop:"-40px"}} type="text" placeholder='Title / Skills / Company / Location' value={searchItem} onChange={handlesearchchange} />
            
            </div>
            <div className='extra'></div>
            {filterdata.map((val, indx) => {

              const postedDateText = subtractDays(val.createdDate);

              return (

                <div className='cardjob'>
                  <Link to={`/jobdetails/${val.jobId}`}>
                    <div className='cmpnyimg'><img src="logo.jpg" alt="" /></div>
                    <h3>{val.title}</h3>
                    <div className='fulltime'>
                      <h6><span><PiSuitcaseSimpleBold style={{ color: "red" }} /></span>  {val.remote} </h6>
                      <h6>Job type : {val.employee}</h6>
                    </div>

                    <div className='skillsdiv'> <p className='skills'>{val.skills}  </p></div>
                    <p className='summary'>{val.summary} </p>
                    <hr />
                    <div className='company'>
                      <h6>  <MdOutlineLocationOn style={{ color: "red" }} />{val.joblocation} </h6>
                      <h6>posted on : <MdOutlineAccessTime style={{ color: "red" }} />{" "}
                        {postedDateText} </h6>


                    </div>
                  </Link>
                </div>

              )
            }).reverse()}


          </div>


        </div>
      )}
    </>
  )

}

export default CareerJobs;
