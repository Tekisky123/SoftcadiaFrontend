
const CustomerGoodsAndService = () => {
    return (
      <div className="containerhealth">
        <div className="imagehealth-container container" style={{display:"flex",justifyContent:"space-evenly"}}>
          {/* Your image goes here */}
          <img style={{width:"100%",height:"50vh"}} src="cu4.jpeg" alt="Background" />
          <img style={{width:"100%",height:"50vh"}} src="c2.jpeg" alt="Background" />
          <img style={{width:"100%",height:"50vh"}} src="cu2.jpeg" alt="Background" />
        </div>
        <div className="contenthealth-container">
          <h1>Welcome to Our Website</h1>
          <div className="cardhealth-container">
            {/* Card 1 */}
            <div className="cardhealth">
              <h3>Momentum Metropolitan Life uses chatbots to improve CX</h3>
              <p>South African insurer Momentum Metropolitan Life had a large backlog of service requests during the pandemic, as staff were unable to attend to customer requests.
The insurer wanted to make its staff available to perform complex tasks and automate simpler ones.
The South African insurer worked with softcadia to transform its service center operations using the softcadia conversational artificial intelligence (AI) platform.</p>
            </div>
  
            {/* Card 2 */}
            <div className="cardhealth">
              <h3>The unstoppable rise and future of incredible wearables</h3>
              <p>Wearable technology refers to electronic devices worn as accessories such as watches or jewelry.  These wearables are powered by microprocessors and can send and receive data via the Internet. That is why they are also at the forefront of the Internet of Things.</p>
            </div>
  
            {/* Card 3 */}
            <div className="cardhealth">
              <h3>Kautex drives safe, sustainable mobility with digitalization</h3>
              <p>Kautex, one of the top 100 automotive suppliers globally, is committed to pioneering safe and sustainable mobility solutions.
The German company partnered with softcadia to kickstart its in-house automotive software development journey.
The partnership helped Kautex set up an automated, reusable framework to accelerate the software development process.</p>
            </div>
  
            {/* Card 4 */}
            <div className="cardhealth">
              <h3>Colruyt’s algorithmic pricing advantage</h3>
              <p>A brand built on guaranteeing the lowest price was having problems coping with volumes and complexity
The Next-Gen Pricing Engine, an algorithmic, near real-time, intelligent system automated the deployment of the pricing strategy
A real time mobile app was launched to boost productivity and accuracy</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomerGoodsAndService;