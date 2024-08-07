
import "./Apply.css";

import p2 from "/public/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { HiArrowSmLeft } from "react-icons/hi";
import {Base_Url} from '../../API'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



export const ApplyJob = () => {
  const [formdata, setFormData] = useState([]);
  const { register, handleSubmit, formState, watch, reset } = useForm();
  const { errors } = formState;
  console.log(formState)
 console.log(errors)
  const [jobDetails, setJobDetails] = useState({});
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const navi = useNavigate();
  const navigate = () => {
    navi(-1);
  };
  const { jobId } = useParams();
  const OpenModel = () => {
    setIsModelOpen(!IsModelOpen);
  };

  const CloseModel = () => {
    setIsModelOpen(!IsModelOpen);
    reset()
  };

  const onToast = () => {
    
  };

  const calculateTimeDifference = (createdDate) => {
    const currentDate = new Date();
    const jobDate = new Date(createdDate);
    const differenceInMilliseconds = currentDate - jobDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    if (differenceInDays === 0) {
      return 'today';
    } else if (differenceInDays === 1) {
      return '1 day ago';
    } else {
      return `${differenceInDays} days ago`;
    }
  };


  useEffect(() => {
    axios
      .get(`${Base_Url}/softcadia/job/jobbyid/${jobId}`)
      .then((res) => {
        setJobDetails(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);


  const submit = async (data) => {
    const formData = new FormData();

    formData.append("_id", jobDetails._id);
    formData.append("fname", data.fname);
    formData.append("lname", data.lname);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    if (data.uploadresume && data.uploadresume.length > 0) {
      formData.append("file", data.uploadresume[0]);
    } else {
      console.error("No file selected");
      return;
    }

    axios
      .post(`${Base_Url}/softcadia/jobapply/applyuser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response) {
          setFormData([...formdata, response.data]);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${jobDetails.title} Job Applied`,
            showConfirmButton: false,
            timer: 2000
          });
  
        setTimeout(()=>{
          navigate("/jobscar")
        }, 2000)
          
          reset();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const areFieldsFilled = () => {
    // Check if all the required fields have values
    const { fname, lname, email, mobile, uploadresume } = watch();

    return (
      !!fname &&
      !!lname &&
      !!email &&
      !!mobile &&
      !!uploadresume
    );
  };

  return (
    <>
    <div style={{position:"fixed", top:"12%" , left:"20px"}}>
    <button className='backbtn' onClick={navigate} >Back</button>
    </div>
    
    <div className="mainrelateddiv" style={{display:"flex" , justifyContent:"center"}}  >
      <div className="mainJobapply" style={{width:"55%"}}>
        <div className="rightcarrier1">
          <div className="cardjobapply">
            <div className="cmpnyimg1">
              <img src={p2} alt="" />
            </div>
            <h3>{jobDetails.title}</h3>
            <div className="fulltime1">
              <h6>
                <span>
                  <PiSuitcaseSimpleBold style={{ color: "red" }} />
                </span>{" "}
                {jobDetails.remote}{" "}
              </h6>
              <h6>Job type : {jobDetails.employee}</h6>
            </div>

            <p>{jobDetails.skills} </p>
            <hr />
            <div className="company1">
              <h6>
                {" "}
                <MdOutlineLocationOn style={{ color: "red" }} />
                {jobDetails.joblocation}{" "}
              </h6>
              <h6>
                posted on : <MdOutlineAccessTime style={{ color: "red" }} /> {calculateTimeDifference(jobDetails.createdDate)}
              </h6>

              {IsModelOpen && (
                <Pop
                  Show={CloseModel}
                  isOpen={IsModelOpen}
                  handleSubmit={handleSubmit}
                  submit={submit}
                  register={register}
                  areFieldsFilled={areFieldsFilled}
                  onToast={onToast}
                  errors={errors}
                />
              )}  
              <button className="applynowbtn2" onClick={OpenModel} style={{marginRight:"10px"}}>
                Apply Now
              </button>
              {/* <button className="applynowbtn2" onClick={navigate}>
                Back
              </button> */}
            </div>
          </div>

          <div className="detailsapplyjob">
            <div>
              <p>
                Title : <span>{jobDetails.title}</span>
              </p>
              <p>
                Remote : <span>{jobDetails.remote}</span>
              </p>
              <p>
                Employement Type : <span>{jobDetails.employee}</span>
              </p>
              <p>
                Skills : <span>{jobDetails.skills}</span>
              </p>
              <p>
                Job Location : <span>{jobDetails.company}</span>
              </p>
              <p>
                Summary : <span>{jobDetails.joblocation}</span>
              </p>
              <p>
                Details : <span>{jobDetails.details}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

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
      
        <div className="formcontainer">
          <div className="close-btn" onClick={Show}>
            <RxCrossCircled className="wrongicon" />
          </div>
          <form
            action="/softcadia/jobapply/applyuser"
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
                {/* <datalist id="mobileOptions">
                <option value="+1 (USA)"> </option>
                  <option value="+44  (UK)"></option>
                  <option value="+91 (India)"></option>
                  <option value="+33 (France)"></option>
                  <option value="+81 (Japan)"></option>
                  <option value="+61 (Australia)"></option>
                  <option value="+49 (Germany)"></option>
                  <option value="+86 (China)"></option>
                  <option value="+7 (Russia)"></option>
                  <option value="+44  (UK)"></option>
                  <option value="+91 (India)"></option>
                  <option value="+33 (France)"></option>
                  <option value="+81 (Japan)"></option>
                  <option value="+61 (Australia)"></option>
                </datalist> */}
              </div>

              <div className="inputform-box">
                <label>
                  Upload Your CV
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
                  type="file"
                  className="fileresume"
                  {...register("uploadresume", {
                    required: { value: true, message: "please upload resume " },
                  })}
                />
                <p style={{ color: "red" }}>{errors?.uploadresume?.message}</p>
              </div>
            </div>
            <div className="buttonform-container">
              <button
                type="submit"
                // disabled={!areFieldsFilled()}
                onClick={onToast}
              >
                Submit
              </button>
            </div>
          </form>
         
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
