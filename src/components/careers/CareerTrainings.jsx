import "./CareerTrainings.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import {Base_Url} from '../../API'
import { MdOutlineAccessTime } from "react-icons/md";

const CareerTraining = () => {
  const [data, setData] = useState([]);
  const [selectedcategories, setSelectedcategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .get(`${Base_Url}/softcadia/training/trainingList`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const subtractDays = (createdDate) => {
    const postedDate = new Date(createdDate);
    const currentDate = new Date();

    const differenceInDays = Math.floor(
      (currentDate - postedDate) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 0) {
      return "today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else {
      return `${differenceInDays} days ago`;
    }
  };


  

  const handlecheckboxchange = (category) => {
    if (searchItem) {
      setSearchItem("");
    }

    if (selectedcategories.includes(category)) {
      setSelectedcategories(selectedcategories.filter((c) => c !== category));
    } else {
      setSelectedcategories([...selectedcategories, category]);
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
          item.offered.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.details.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.location.toLowerCase().includes(searchItem.toLowerCase())
      );

  return (
    <>
      <div className="carrier" >
        <div className="rightcarrier">
          <div className="carrierinput container">
          <div className="carrierinput container">
              <img className='jobapplybigimg' src="ani2.jpg" alt="" style={{height:"10vh",marginLeft:"-10px"}} />
            <input
            style={{marginTop:"-40px"}}
              type="text"
              placeholder="Title / Offered / Location"
              value={searchItem}
              onChange={handlesearchchange}
            />
          </div>
          </div>
          <div className="extra"></div>
          {filterdata.map((val, indx) => {
            const postedDateText = subtractDays(val.createdDate);

            return (
              <div className="cardjob" style={{ width: "60%" }}>
                <Link to={`/trainingdetails/${val.trainingId}`}>
                  <div className="cmpnyimg">
                    <img src="logo.jpg" alt="" />
                  </div>
                  <h3>{val.title}</h3>
                  <div className="fulltime">
                    <h6>Offered By : {val.offered}</h6>
                  </div>

                  {/* <p>{val.offered}  </p> */}
                  <div className="skillsdiv">
                    {" "}
                    <p className="skills">{val.summary} </p>
                  </div>
                  <p className="summary">{val.details} </p>
                  <p className="summary">{val.duration} </p>
                  <hr />
                  <div className="company">
                    <h6>
                      {" "}
                      <MdOutlineLocationOn style={{ color: "red" }} />
                      {val.location}{" "}
                    </h6>
                    <h6>
                      posted on :{" "}
                      <MdOutlineAccessTime style={{ color: "red" }} />{" "}
                       {postedDateText}{" "}
                    </h6>
                  </div>
                </Link>
              </div>
            );
          }).reverse()}
        </div>
      </div>
    </>
  );
};

export default CareerTraining;
