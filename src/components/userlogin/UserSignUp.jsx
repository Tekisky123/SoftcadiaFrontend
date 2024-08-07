import { Link, useNavigate } from 'react-router-dom';
import style from './UserSignUp.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserSignUp = () => {
    const {register , handleSubmit , formState , reset} = useForm();
    const {errors} = formState;
    const navi = useNavigate()
    const submit = (data) => {
        axios.post("http://localhost:5000/softcadia/user/signup" , data).then((res)=>{
            if(res){
                navi('/')

            }
        }).catch((err)=>{
            alert(err)
        });
}
    return(
        <>
        
        <div className={style.bg}>
            <div className={style.heading}>
                <h2>Welcome to SoftCadia</h2>
            <h3>Make the most of your professional life</h3>
            </div>
            <div className={style.formdiv}>
                <form onSubmit={handleSubmit(submit)} >
                    <label >First name</label>
                    <br />
                    <input type="text" name="" {...register("firstname" , {required : {value:true, message:"please enter your first name"}})} />
                    <p style={{color:"red"}}>{errors?.firstname?.message}</p>
                    <br />
                    <label >Last name</label>
                    <br />
                    <input type="text" name=""  {...register("lastname" , {required : {value:true, message:"please enter your last name"}})} />
                    <p style={{color:"red"}}>{errors?.lastname?.message}</p>
                    <br />
                    <label >Email</label>
                    <br />
                    <input type="text" name=""   {...register("email" , {required : {value:true, message:"please enter your email"},pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Enter Valid Email",
            }})} />
            <p style={{color:"red"}}>{errors?.email?.message}</p>
                    <br />
                    <label >Password</label>
                    <br />
                    <input type="text" name=""   {...register("password" , {required : {value:true, message:"please enter your password"}
                 ,
                 pattern: {
                   value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                   message: "password must be 6-16 and special character",
                 }})} />
                 <p style={{color:"red"}}>{errors?.password?.message}</p>
                    <br />
                    <p>By Clicking Join now, you agree to SoftCadia's User Agreement, Privacy Policy, and Cookie Policy</p>
                    <br />
                    <button type="submit">Join Now</button>
                    <br />
                    <p>_________ or ________</p>
                    <button type="submit">Continue with Google</button>
                    <br />
                    <p>Already on SoftCadia? <Link>Sign in</Link></p>

                </form>
                <br />
                <p>Copy Rights 2021 - All Rights Reserverd SoftCadia</p>
            </div>
        </div>
        </>
    );
};

export default UserSignUp;