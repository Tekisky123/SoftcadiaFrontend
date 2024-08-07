import './FinanceBody.css'


const FinanceBodyService = () => {
    return(
        <>
        
        <div className="containerfi">
      <video autoPlay loop muted playsInline className="responsive-videofi" >
        <source src="pexelvid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlayfi">
        <h1> CFO and Enterprise Value</h1>
        <p>Helping finance and risk leaders navigate disruption and drive enterprise value</p>
      </div>
    </div>


    <div className="responsive-divfi">
        {/* Your text content goes here */}
        
        <h2>Our finance & risk capabilities
How we empower CFOs to architect change for 360° value.

​</h2>
        <p>
        Softcadia has extensive experience and know-how across the entire finance transformation journey. Our ability to predict outcomes with confidence empowers finance and risk executives to rapidly evaluate opportunities and drive the right changes across the enterprise. This leads to 360° value, benefitting customers, employees, shareholders, communities, and the environment.
        </p>
        <p>
          People's connections with work have been prompted to reevaluate by
          global change, disruption, the well-being revolution, and a new
          generation of workers. However, leaders tend to underestimate how much
          their people are related, often overestimating it by a factor of two.
        </p>
        <p>
            <b>360 Value creation</b>
            Deliver positive outcomes from core functions to field operations and extend finance’s impact across your enterprise by evaluating opportunities that benefit customers, employees, shareholders, communities, and the environment.</p>
      </div>


      <div className="responsive-containerfi">
        <div className="text-contentfi">
          <h2>Future-ready transformation journey</h2>
          <p>Accelerate the transformation of talent, operations, and platforms to your desired future-ready state by knowing what changes to make and how to make them ahead of time so you can choose the most direct path to your future-ready organization.</p>
          <p><b>Predictive view</b>
See beyond your company’s horizon with harmonized data platforms and advanced scenario modeling to quickly guide your organization amid changing market dynamics and answer critical ‘what if’ questions with confidence.</p>
        </div>
        <div className="image-containerfi">
          <img src="pixaby1.jpg" alt="Your Image" />
        </div>
      </div>
        </>
    )
}


export default FinanceBodyService