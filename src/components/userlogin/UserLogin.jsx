import { Link } from 'react-router-dom';
import style from './UserLogin.module.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserSignIn = () => {
    const {register , handleSubmit , formState , reset} = useForm();
    const {errors} = formState;
    const navi = useNavigate();

    const submit = (data) => {
        axios.post("http://localhost:5000/softcadia/user/signin" , data).then((res)=>{
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
            <p>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
            </div>
            <div className={style.formdiv}>
                <form onSubmit={handleSubmit(submit)} >
        
                    <label >Email</label>
                    <br />
                    <input type="email" name=""  {...register("email" , {required : {value:true, message:"please enter your email"},pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Enter Valid Email",
            }})} />
            <p style={{color:"red"}}>{errors?.email?.message}</p>
                    <br />
                    <label >Password</label>
                    <br />
                    <input type="password" name="" {...register("password" , {required : {value:true, message:"please enter your password"}
                 ,
                 pattern: {
                   value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                   message: "password must be 6-16 and special character",
                 }})} />
                 <p style={{color:"red"}}>{errors?.password?.message}</p>
                    <br />
                
                    <button type="submit">Sign in</button>
                    <br />
                    <h6>Forgot password?</h6>
                    <br />
                    <p>New to SoftCadia? <Link>Join now</Link></p>

                </form>
                <br />
                <p>Copy Rights 2021 - All Rights Reserverd SoftCadia</p>
            </div>
        </div>
        </>
    )
};

export default UserSignIn