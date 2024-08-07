import './whySoftcadia.css'


export const WhySoftcadia = () => {
    return (
        <>
            <section className='about'>
                <h1 className="heading"><span className='s'>WHY</span> SOFTCADIA </h1>

                <div className="row1">
                    <div className="video-contain">
                        {/* <img src="keyboard.avif" alt="" /> */}
                        {/* <video autoPlay loop muted >
            <source  src="blueBgVid.mp4" type="video/mp4" />
        </video> */}
                        <video src="dev.mp4" loop autoPlay muted></video>
                        {/* <h3>bst flower seller</h3> */}

                    </div>

                    <div className="content2" >
                        <h3>why choose us?</h3>
                        <p className='para'> Softcadia has a long history of providing outstanding customer support. We   offer low-cost, high-impact technology solutions and business transformation via an onshore strategy that guarantees a highly responsive and consistent experience for our customers in a market driven by service providers racing to the bottom.
                            People in our Organization Our individuals help define us. Our capacity to always surpass our clients' expectations is made possible by their commitment. We are problem solvers and industry specialists, and we are truly engaged in your success.
                            Softcadia has a long history of providing outstanding customer support. We offer low-cost, high-impact technology solutions and business transformation via an onshore strategy that guarantees a highly responsive and consistent experience for our customers in a market driven by service providers racing to the bottom.
                        </p>
                        {/* <button className='b'>learn more</button> */}
                    </div>

                </div>
            </section>
        </>
    )
}