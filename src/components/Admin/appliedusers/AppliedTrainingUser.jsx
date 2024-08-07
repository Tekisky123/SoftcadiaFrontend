import { useEffect, useState } from "react";
import "./AppliedJobUser.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Base_Url } from '../../../API'

const AppliedTrainingUsers = () => {
  const [data, setData] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentpage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)


  function prePage(event) {
    event.preventDefault();
    if (currentpage !== 1) {
      setCurrentPage(currentpage - 1)
    }
  }

  function changeCPage(id, event) {
    event.preventDefault()
    setCurrentPage(id)
  }

  function nextPage(event) {
    event.preventDefault();
    if (currentpage < nPage) {
      setCurrentPage(currentpage + 1)
    }
  }

  useEffect(() => {
    axios
      .get(`${Base_Url}/softcadia/trainingapply/getuserinfo`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>

      <h2 style={{ color: "#2C5364", marginTop: "80px", textAlign: "center", textDecoration: "underline" }}>List of candidate applied for training...</h2>
      <div style={{ overflowY: "auto", height: "82vh", width: "100%" }}>


        <table className='abcde container'>

          <thead>
            <tr>
              <th>#</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Mobile no.</th>
              <th>Resume</th>
              <th>TrainingId</th>
              <th>Title</th>
              <th>Offered</th>
              {/* <th>JobLocation</th> */}
            </tr>
          </thead>
          <tbody>
            {records.map((value, index) => {
              const { fname, lname, email, mobile, uploadresume } = value.applicantdetail;
              const { trainingId, title, offered } = value.trainingdetail;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{fname} {lname}</td>
                  <td>{email}</td>
                  <td>{mobile}</td>
                  <td><a href={uploadresume}>{uploadresume}</a></td>
                  <td>{trainingId}</td>
                  <td>{title}</td>
                  <td>{offered}</td>
                  {/* <td>{joblocation}</td> */}
                </tr>
              );
            }).reverse()}
          </tbody>
        </table>
      </div>


      <div style={{ position: "relative", bottom: "0", marginTop: "40px", marginLeft: "100px" }}>
        <ul className='pagination'>
          <li className="page-item">
            <a href="" className='page-link' onClick={prePage}>prev</a>
          </li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentpage === n ? 'active' : ''}`} key={i}>
                <a href="" className="page-link" onClick={(e) => changeCPage(n, e)} >{n} </a>
              </li>
            ))
          }

          <li className="page-item">
            <a href="" className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </div>

    </>
  );
};

export default AppliedTrainingUsers;
