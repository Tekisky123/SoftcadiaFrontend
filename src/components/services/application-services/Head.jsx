import './Head.css'

export const HeadApplication = () => {
    return(
        <>
        <div className="hero1">
            <div className="overlay"></div>
        <video autoPlay loop muted playsInline className='back-video'>
            <source src='blueBgVid.mp4' type='video/mp4' />
        </video>
        <div className="contentv">
            <p>Technology</p>
            <h1>Enterprice Application Service</h1>
            <p className='content-p'>Softcadia’s innovation-led enterprise application services reinvent digital application portfolios with speed and agility, enabling 360° value at scale</p>
        </div>
        </div>
        <div className='mainmid'>
            <div className="mid1">

            </div>
            {/* <div className="midimg">
                <img src="image2.jpg" alt="" />
            </div> */}
        </div>
        </>
    )
}