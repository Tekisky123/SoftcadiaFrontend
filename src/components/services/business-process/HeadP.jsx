import "./Headp.css"
import { useSpring, animated } from 'react-spring';

export const HeadBusinesProcess = () => {
    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
      });
    return(
        <>

<animated.div style={animationProps} className="fancy-image-container">
      <img
        className="responsive-image"
        src="image7.avif"
        alt="Fancy Image"
      />
      <div className="overlay-text"><h1 >Business Process Outsourcing—value-first outcomes</h1>
      <p>In a world of dynamic change, business process services can reinvent business performance, delivering sustainable value through optimizing operations.</p>
      </div>
    </animated.div>
    <div className="responsive-containerapp2">
    <div className="image-containerapp2">
          <img src="image6.avif" alt="Your Image" />
        </div>
        <div className="text-contentapp2">
          <h2>Access a new performance frontier</h2>
          <p>Being ability to lead value is critical in periods of significant change. Business process functions, such as finance, supply chain, procurement, human resources, marketing, sales, and customer operations, as well as industry-specific services, like banking, health insurance, and insurance, have been severely disrupted in the wake of recent societal, industry, and technological disruption.</p>
          <p>It appears that the operating model is crucial. In addition to embracing change, it can also change to support the business plan, resulting in increased competitive advantage, agility, resilience, and improved business results. Reinvention is made possible for clients by Accenture's strategic managed services for operations, which optimise and restructure business processes. </p>
        </div>
        
      </div>

      <div className="text-contentapp3">
          <h2>Managed services for operations: what are they?</h2>
          <p>Business process outsourcing (BPO) has developed into an operations-focused strategic managed service. 
          A new operating model that is focused on the client and powered by data and intelligence to provide extraordinary experiences and results is necessary for sustainable growth.
         Organisations must accelerate operations maturity in order to access the new performance frontier.  The essential components—talent, data, applied intelligence, cloud, and ecosystem of partnerships—need to be addressed.
          For executives who need it most, activating data and intelligence on the digital core to alter operations is frequently out of reach. In this situation, strategic managed service capabilities can help shorten the time to value and offer insights for improved decision-making.
         Strategic managed services of today encompass much more than just conventional BPO.  They lower risk and expenses, are revolutionary,</p>
        </div>
        

       

      
   
        </>
    )
}