import { Link } from 'react-router-dom'
import './TextAnimation.css'

export const TextAnimation = () => {

    return (

        <>
            <div className="hero">
                <img className='capitalbigimg' src="animBg.jpg" alt="" />
                <div className="capitalmrktbgdiv">
                    <div className="content1" style={{ marginLeft: "60px" }}>
                        <h1 className='h1 anim'>MAKE THE MOST OF <br /> YOUR PROFESSIONAL LIFE... </h1>
                        <p className='p anim'>Step into Softcadia, where innovation meets expertise. Welcome to a digital realm where ideas flourish, and solutions are crafted with precision.</p>

                        <Link to="/aboutus"> <button type='submit' className='btn anim'> Read More..</button></Link>
                    </div>
                </div>
                <img src="men2.png" alt="" className='feature-img anim' />

            </div>

        </>
    )
}