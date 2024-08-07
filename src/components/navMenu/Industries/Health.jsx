


import './Health.css'


const Health = () => {
    return (
      <div className="containerhealth">
        <div className="imagehealth-container">
          {/* Your image goes here */}
          <img src="h1.jpeg" alt="Background" />
        </div>
        <div className="contenthealth-container">
          {/* <h1>Welcome to Our Website</h1> */}
          <div className="cardhealth-container" style={{marginTop:"70px"}}>
            {/* Card 1 */}
            <div className="cardhealth">
              <h3>Boots enhances customer experience with competitive pricing</h3>
              <p>With their 170-year heritage a big draw, Boots continuously innovates to keep their customers happy and satisfied. Using SAP Promotion Management for Retail, built on SAP CAR in Microsoft Azure, Boots deployed their retail prices and promotions into multiple channels cycle across several promotion types. The regular sales plan, loyalty program, and customer campaigns also carried these offerings.</p>
            </div>
  
            {/* Card 2 */}
            <div className="cardhealth">
              <h3>The unstoppable rise and future of incredible wearables</h3>
              <p>Wearable technology refers to electronic devices worn as accessories such as watches or jewelry.  These wearables are powered by microprocessors and can send and receive data via the Internet. That is why they are also at the forefront of the Internet of Things.</p>
            </div>
  
            {/* Card 3 */}
            <div className="cardhealth">
              <h3>Stamp-sized ultrasound imaging machines: not sci-fi but reality</h3>
              <p>Wearable ultrasound devices can be a part of an ecosystem that already includes fitness trackers and smartwatches. Moreover, wearable bio-sensors could become common in the years to come. AI and health technology will join hands to ensure a brighter future for everyone.</p>
            </div>
  
            {/* Card 4 */}
            <div className="cardhealth">
              <h3>Can the metaverse change the future of medicine?</h3>
              <p>The potential of healthcare solutions in the metaverse is immense. The core objective of the metaverse is to bring people closer by creating environments that simulate reality. This notion aligns with the needs and aspirations of every healthcare provider that wants to extend care and medicine with minimal logistical blockers.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Health;