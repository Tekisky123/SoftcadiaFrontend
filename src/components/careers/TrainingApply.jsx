

import './Apply.css'

import p2 from '/public/logo.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask'
// import { formatDistanceToNow } from 'date-fns';
import {Base_Url} from '../../API'
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiArrowSmLeft } from 'react-icons/hi';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const ApplyTraining = () => {

const [formdata, setFormData] = useState([]);
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const { trainingId } = useParams();
  const navi = useNavigate();
  const navigate = () => {
    navi(-1);
  };
  const OpenModel = () => {
    setIsModelOpen(!IsModelOpen);
  };

  const CloseModel = () => {
    setIsModelOpen(!IsModelOpen);
    reset();
  };
 

  const calculateTimeDifference = (createdDate) => {
    const currentDate = new Date();
    const trainingDate = new Date(createdDate);
    const differenceInMilliseconds = currentDate - trainingDate;
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 0) {
      return "today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else {
      return `${differenceInDays} days ago`;
    }
  };

  const areFieldsFilled = () => {
    // Check if all the required fields have values
    const {
      fname,
      lname,
      email,
      mobile,
      // uploadresume
    } = watch();

    return (
      !!fname && !!lname && !!email && !!mobile
      // !!uploadresume
    );
  };

  const [trainingDetails, setTrainingDetails] = useState({});

  console.log(trainingDetails);

  useEffect(() => {
    axios
      .get(`${Base_Url}/softcadia/training/trainingbyid/${trainingId}`)
      .then((res) => {
        setTrainingDetails(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);


  const submit = async (data) => {
    try {
      const payload = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        mobile: data.mobile,
        _id: trainingDetails._id
      };
      
      const formData = new URLSearchParams(payload);

      const response = await axios.post(
        `${Base_Url}/softcadia/trainingapply/applyuser`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbm9AZ21haWwuY29tIiwiaWF0IjoxNzA2NDUxMzExfQ.uuZMAf4IVF1Zvg3ZCsyuFalBhxS5C0HafSWW9qDWAZY",
          },
        }
      );

      if (response.data) {
        setFormData([...formdata, response.data]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${trainingDetails.title} Training Applied`,
          showConfirmButton: false,
          timer: 2000
        });

      setTimeout(()=>{
        navigate("/trainingscar");
      }, 2000)
        
        
      } else {
        console.error("No data received in the response");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };

  return (
    <>
 <div style={{position:"fixed", top:"12%" , left:"20px"}}>
    <button className='backbtn' onClick={navigate} >Back</button>
    </div>
    
<div className="trainingmaindiv " style={{width:"60%",position:"relative",left:"18%"}}>
    <div className="trainingmain">
    <div className='mainJobapply'>
        <div className="rightcarrier1">
      
            <div className='cardjobapply'> 
            <div className='cmpnyimg1'><img src={p2} alt="" /></div>
            <h3>{trainingDetails.title}</h3>
            <div className='fulltime1'>
            
            </div>
            
            <p>{trainingDetails.offered} </p>
            <p>{trainingDetails.summary} </p>
            <p>{trainingDetails.details} </p>
            <p>{trainingDetails.duration} </p>
           
            <hr />
           <div className='company1'>
           
           <h6> <MdOutlineLocationOn style={{color:"red"}}/>{trainingDetails.location}</h6>
            <h6> postedon:{' '}<MdOutlineAccessTime style={{color:"red"}}/> {calculateTimeDifference(trainingDetails.createdDate)} </h6>

            {IsModelOpen && <Pop Show={CloseModel} isOpen={IsModelOpen} handleSubmit={handleSubmit} submit={submit} register={register} areFieldsFilled={areFieldsFilled}  errors={errors} />}
           <button className='applynowbtn2' onClick={OpenModel} >Apply Now</button>
           {/* <button className='applynowbtn2' onClick={navigate}>Back</button> */}
           </div>
        </div> 

        <div className="detailsapplyjob">
             
        <div>
             
             <p>Title : <span>{trainingDetails.title}</span></p>
             <p>Offered : <span>{trainingDetails.offered}</span></p>
             <p>Training Location : <span>{trainingDetails.location}</span></p>
             <p>Duration : <span>{trainingDetails.duration}</span></p>  
             <p>Details : <span>{trainingDetails.details}</span></p>
             <p>Details : <span> {trainingDetails.date}</span></p>
             <p>Details : <span>{trainingDetails.summary}</span></p>
             <p>Details : <span>{trainingDetails.trainingdetail}</span></p>

             </div>
             {trainingDetails.date}
            </div>
        </div>
       </div>
       </div>
        </div>     
        </>
    )
}


function Pop({
  register,
  handleSubmit,
  submit,
  areFieldsFilled,
  onToast,
  errors,
  isOpen,
  Show,
}) {
  return (
    <>
      <div className={`blurred-modal ${isOpen ? "open" : ""}`}>
      {/* <ToastContainer /> */}
        <div className="formcontainer">
          <div className="close-btn" onClick={Show}>
            <RxCrossCircled className="wrongicon" />
          </div>
          <form
            action="/softcadia/trainingapply/applyuser"
            method="post"
            encType="multipart/form-data"
            style={{ paddingTop: "20vh" }}
            onSubmit={handleSubmit(submit)}
          >
            <h2>Softcadia</h2>
            <div className="formcontent">
              <div className="inputform-box">
                <label>
                  First Name
                  <sup
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "800",
                    }}
                  >
                    *
                  </sup>
                </label>
                <input
                style={{width:"95%"}}
                  type="text"
                  placeholder="Enter first name"
                  {...register("fname", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                />
                <p style={{ color: "red" }}>{errors?.fname?.message}</p>
              </div>
              <div className="inputform-box">
                <label>
                  Last Name
                  <sup
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "800",
                    }}
                  >
                    *
                  </sup>
                </label>
                <input
                style={{width:"95%"}}
                  type="text"
                  placeholder="Enter Last name"
                  {...register("lname", {
                    required: { value: true, message: "Last name is required" },
                  })}
                />
                <p style={{ color: "red" }}>{errors?.lname?.message}</p>
              </div>

              <div className="inputform-box">
                <label>
                  Email
                  <sup
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "800",
                    }}
                  >
                    *
                  </sup>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                      message: "Enter Valid Email",
                    },
                  })}
                />
                <p style={{ color: "red" }}>{errors?.email?.message}</p>
              </div>

              <div className="inputform-box">
                <label>
                  Mobile Number
                  <sup
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontWeight: "800",
                    }}
                  >
                    *
                  </sup>
                </label>
                <InputMask
                 list="mobileOptions"
                  mask="9999999999999" 
                  maskChar=""
                  placeholder="Enter Mobile Number"
                  {...register("mobile", 
                    { required: { value: true, message: "Mobile number is required" } }
                  )}
                />
                <p style={{ color: "red" }}>{errors?.mobile?.message} </p>
               
              </div>

             
            </div>
            <div className="buttonform-container">
              <button
                type="submit"
                // onClick={onToast}
              >
                Submit
              </button>
            </div>
          </form>
         
        </div>
      </div>
   
    </>
  );
}




