import "./EcoBody.css";

const BodyEcosystemService = () => {
  return (
    <>
      <div className="responsive-containereco1">
        <div className="text-contenteco1">
          <h2>Rising to the challenge</h2>
          <p>
            From strategy to execution our portfolio of services is designed to
            help you tackle your greatest sustainability challenges and realize
            the competitive advantage and impact at scale that sustainability
            brings:
          </p>
          <p>
            The European Green Deal is a growth engine for new markets, new
            products and new services. Businesses that develop the capabilities
            to transform now will unlock opportunities for growth, through
            developing new business models, new collaborations and gaining
            capital for green projects and more transparent supply chains. Data
            will be the backbone of tomorrow's economy—enabling strategic
            analysis, performance and impact measurement, efficiency, and
            innovative business models.
          </p>
        </div>
        <div className="image-containereco1">
          <img src="pexelseco.jpg" alt="Your Image" />
        </div>
      </div>

      <div className="containereco">
        <video autoPlay loop muted playsInline className="responsive-videoeco">
          <source src="pexelvid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlayeco">
          <h1> Sustainability Services</h1>
          <p>
            Together with our partners, we help our clients reinvent their
            businesses at scale, creating business value and sustainable impact
            for all stakeholders.
          </p>
        </div>
      </div>
      <div className="responsive-divchng">
        {/* Your text content goes here */}

        <h2>A new way to think about energy efficiency</h2>
        <p>
          Energy efficiency represents the biggest short-term opportunity for
          businesses and individuals to cope with the mounting energy cost
          pressures triggered by current economic and geopolitical forces while
          helping to create a more sustainable, affordable, reliable, and secure
          energy future for all.
        </p>
        <p>
          Advancements in technologies, such as data and analytics, can deliver
          significant cost savings in ways that weren’t possible a decade ago,
          making energy efficiency one of the fastest and most cost-effective
          actions to reduce energy costs while advancing progress towards global
          climate targets.
        </p>
        <p>
          Every business leader can take action today to reduce the amount of
          energy their organization consumes and also influence behavior change
          in individuals. And although there are a number of areas where
          efficiency improvements can be made, quick wins can be achieved by
          focusing on where the greatest short-term potential lies, for example,
          in buildings, transport, or industrial processes.
        </p>
      </div>
    </>
  );
};

export default BodyEcosystemService;
