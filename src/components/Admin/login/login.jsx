
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import vid from '/public/bglogin4.mp4'
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import './login.css';
import { useAuth } from '../../../Auth'
import {Base_Url} from '../../../API'


export default function Login({setUserType}) {

  const auth = useAuth();
  const [isPassShow, setIsPassShow] = useState(false);
  const [userdata, setuserdata] = useState([])
  const { register, handleSubmit, formState, reset } = useForm()
  // const [isloading,setisLoading]=useState(false)
  const { errors } = formState
  // console.log(errors);
  const navigate = useNavigate()

 

  const submit = (data) => {
    console.log(data);

    axios.post(`${Base_Url}/softcadia/logincheck`, data).then((res) => {
     
      // console.log(res);
      if (res.status === 200) {
        localStorage.setItem("usertype",res.data.usertype)
        localStorage.setItem("accessToken",res?.data?.token)
        
        localStorage.setItem("login",true)
        setUserType(res.data.usertype)
        setTimeout(() => {
          res.data.usertype === "Admin" ?  navigate('/adminhome') :""
        }, 1000);
       
      }
    })
      .catch((e) => alert(e))

  }


  return (


    <div className="loginimg">

      <div className="bodylogin">

        <div className='videodiv'>
          <video src={vid} loop autoPlay muted></video>
        </div>

        <div className="mainlogin">
          <div className="signup container">
            {/* <ToastContainer /> */}
            <form className='loginform' onSubmit={handleSubmit(submit)}>
              <label className='label'>Login</label>
              <h5 style={{ color: "red", textAlign: "center" }}>{errors?.email?.message || errors?.password?.message}</h5>


              <input className='inputlogin' type="text" placeholder='Enter Email' {...register("email", {
                required: { value: true, message: "Email is required" }
              })} />

              <input className='inputlogin' placeholder='Enter Password'{...register("password", {
                required: { value: true, message: "password is required" },
                minLength: { value: 6, message: 'passwrd must be greater than 6 charachter only' },
                maxLength: { value: 12, message: 'passwrd must be less than 12 charachter' },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/,
                  message: "password must be 6-16 and special character"
                }
              })}
                autoComplete="off" type={isPassShow ? "text" : "password"} />
              <button
                 className='buttonpassword'
                type="button"
                onClick={() => setIsPassShow(!isPassShow)}
              >

                {isPassShow ? <IoEyeSharp /> : <BsEyeSlashFill />}
              </button>

              <button type='submit' className='loginbtn'>
                {/* {isloading && (
                    <Spinner
                      className="me-2"
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )} */}
                Login</button>
            </form>
            {/* <h6 style={{ color: "whitesmoke", textAlign: "center" }} > Click here for <Link to='/signup'>Sign up</Link></h6> */}

          </div>
        </div>
      </div>
    </div>
  )
}
















// import { useForm } from "react-hook-form"
// import style from "./login.module.css"
// import { Button } from "react-bootstrap";
// import {Link, useNavigate} from 'react-router-dom'
// import axios from 'axios'

// const Login = () => {






  

// //   useEffect(() => {
// //     let login = localStorage.getItem("login");
// //     navigate("/");
// //     if (!login) {
// //       navigate("/");
// //     }
// //   }, [navigate]);

// const {register , handleSubmit , formState , reset}=useForm("")
// const {errors} = formState;
// const navi = useNavigate()
// const submit = (data) => {
//         axios.post("http://localhost:5000/softcadia/logincheck" , data).then((res)=>{
//             if(res){
//                 navi('/dashboard')

//             }
//         }).catch((err)=>{
//             alert(err)
//         });
// }
// // "http://localhost:5000/softcadia/login"
// return (
//     <>
//     {/* <h1>Login</h1>
//      <form onSubmit={handleSubmit(submit)}>
//         <label htmlFor="">User Name :</label>
//         <input type="email" name="" id="" {...register("username" , {required : {value:true , message:"this field is required"}})} />
//         <p style={{color:"red"}}>{errors?.username?.message}</p>
//         <br />
//         <br />
//         <label htmlFor="">Password :</label>
//         <input type="password" name="" id=""  {...register("password" , {required : {value:true , message:"this field is required"}})}/>
//         <p style={{color:"red"}}>{errors?.password?.message}</p>
//         <br />
//         <br />
//         <button type="submit">Login</button>
//      </form> */}

//      <div className={style.bgcolor}>
//         <div className={style.heading}>
//             <h4 >Welcome to SoftCadia Admin Console</h4>
//             <p>{errors?.email?.message || errors?.password?.message} </p>
//             <h3>Please Sign-In</h3>
//         </div>
//         <div className={style.form}>
//             <form onSubmit={handleSubmit(submit)} >
//                 <input type="email" placeholder='Enter Your Email'  {...register("email" , {required : {value:true , message:"username is required"},pattern: {
//               value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
//               message: "Enter Valid Email",
//             }})} />
//                 <br />
//                 <br />
//                 <input type="password" placeholder='Enter Your Password' {...register("password" , {required : {value:true , message:"please enter your password"}
//             ,
//             pattern: {
//               value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
//               message: "password must be 6-16 and special character",
//             }})} />
//                 <br />
//                 <Button type="submit">Sign in</Button>

//             </form>

//             <p>Or <br />
//             Click here for <Link to="/signup">Sign-Up</Link>
//             </p>
//         </div>
//      </div>
//     </>
// )
// }

// export default Login


// const submit = async (data) => {
  //   try {
  //     setisLoading(true);
  //     if (userdata.username && userdata.email && userdata.password) {
  //       const res = await axios.post('http://localhost:5000/softcadia/login', data);
  //       console.log("hii", res);

  //       if (res.data) {
  //         setisLoading(false);
  //         toast.success("signup successful");
  //       }
  //       navigate('/dashboard/adminhome');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('wrong signup');
  //   }
  // }
