import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './UserSignup.css';
import vid from '/public/bglogin4.mp4'
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import { Base_Url } from '../../../API'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { ToastContainer, toast } from "react-toastify";

function SignUp(
  {
    register,
    handleSubmit,
    reset,
    setData,
    data,
    setShow,
    show,
    edit,
    setEdit,
    watch,
    errors,
  }
) {

  // const [isloading,setisLoading]=useState(false)
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [isrePassShow, setIsrePassShow] = useState(false);
  const password = watch("password");
  const repassword = watch("repassword");


  const submit = (userdata) => {
    if (edit === false) {
      axios
        .post(`${Base_Url}/softcadia/login`, userdata)
        .then((res) => {
          // console.log(res,"sssss");
          if (res) {
            localStorage.setItem("accessToken", res?.data?.token);
            setData([...data, res.data]);
            // console.log(res.data,"jjjj");
            Swal.fire({
              position: "center",
              icon: "success",
              title: ` Admin Created Successfully!`,
              showConfirmButton: false,
              timer: 2000
            });
            // onToast();
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setShow(false);

          reset();
        });
    }
    if (edit === true) {
      axios
        .post(`${Base_Url}/softcadia/loginupdate`, {
          email: userdata.email,
          password: userdata.password,
        })
        .then((res) => {
          // console.log(res);
          if (res) {
            setEdit(res.userdata);
            setRefetch(!refetch)
            
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setShow(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: ` Admin Updated Successfully!`,
            showConfirmButton: false,
            timer: 2000
                });
          reset([]);
        });
    }
    setEdit(false);
  };

  const cancel = () => {
    setShow(!show);
    reset([]);
  };


  return (
    <>
      <div className="loginimg1">
        <div className="bodylogin1">
          {/* <div className='videodiv1'>
            <video src={vid} loop autoPlay muted></video>
          </div> */}
          <div className="mainlogin1">
            <div className="signup container">
              {/* <ToastContainer /> */}
              {resetSuccess ? (
                <p>Password reset successful. Check your email for further instructions.</p>
              ) : (
                <form className='loginform1' onSubmit={handleSubmit(submit)}>

                  <label className='label1'>Create Account</label>

                  <h5 style={{ color: "red", textAlign: "center" }}>{errors?.username?.message || errors?.email?.message || errors?.password?.message || errors?.repassword?.message || errors?.usertype?.message}</h5>

                  <select {...register("usertype", { required: { value: true, message: "required" } })}>
                    <option value="Admin">Admin</option>
                  </select>

                  <input className='inputlogin1' type="text" placeholder='Enter username' {...register("username", { required: { value: true, message: "Username is required" } })} />

                  <input className='inputlogin1' type="email" placeholder='Enter Email' {...register("email", { required: { value: true, message: "Email is required" }, pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Enter Valid Email" } })} />

                  <input className='inputlogin1' placeholder='Enter Password' {...register("password", {
                    required: { value: true, message: "Password is required" },
                    minLength: { value: 6, message: 'passwrd must be greater than 6 charachter only' },
                    maxLength: { value: 12, message: 'passwrd must be less than 12 charachter' },
                    pattern: {
                      value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/,
                      message: "password must be 6-16 and special character"
                    }
                  })} autoComplete="off" type={isPassShow ? "text" : "password"} />

                  <button className='buttonpassword1' type="button" onClick={() => setIsPassShow(!isPassShow)}>
                    {isPassShow ? <IoEyeSharp /> : <BsEyeSlashFill />}
                  </button>

                  <input className='inputlogin1' placeholder='Re-Password' {...register("repassword", { required: { value: true, message: "Please re-enter your password" }, validate: value => value === password || "Passwords do not match" })} autoComplete="off" type={isrePassShow ? "text" : "password"} />

                  <button className='buttonpassword1' type="button" onClick={() => setIsrePassShow(!isrePassShow)}>
                    {isrePassShow ? <IoEyeSharp /> : <BsEyeSlashFill />}
                  </button>

                  <button type='submit' className='loginbtn1'>
                   
                    Sign Up</button>
                </form>
              )}
              <h6 style={{ color: "whitesmoke", textAlign: "center" }}>  <Link onClick={cancel}>Back</Link></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SignUp





















