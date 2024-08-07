import './HeadAnalyst.css'

export const HeadAnalyst = () => {
    return(
        <>
          <div className="containeranalyst">
      <video autoPlay loop muted playsInline className="responsive-analyst" >
        <source src="pexelvideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlayanalyst">
        <h1> Data and analytics services</h1>
        <p>Unlock powerful insights by tapping into data you didn’t even know you had.</p>
      </div>
    </div>


    <div className="responsive-containeranalyst">
    <div className="image-containeranalyst">
          <img src="pexels14.jpeg" alt="Your Image" />
          
        </div>
        <div className="text-contentanalyst">
          <h2>Discover your data's destiny</h2>
          <p>Imagine a steady stream of insights to help you make better business decisions. Data, analytics and AI have opened the door to entirely new possibilities.</p>
          <p>But if your organization’s data is fragmented or low quality, it can’t be mobilized. You need to reimagine existing processes to ensure data is transparent, trustworthy and accessible at speed. Only then can data be used to maximize your technology and AI investments.</p>
          <p>Softcadia’s analytics services and solutions can help any organization grow and differentiate themselves against competition. We identify use cases that can deliver against your business priorities and create analytics solutions with the right talent and technologies to suit your needs. Your data’s destiny is one that can be leveraged to lift performance, resilience, and growth for years to come.</p>
        </div>
        
      </div>

        </>
    )
}