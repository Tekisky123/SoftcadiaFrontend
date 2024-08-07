export const Aboutus = () => {
  return (
    <>
      <div className="clouddiv">
        <div className="cloudvid">
          <video src="in.mp4" loop autoPlay muted></video>
          <h1>About Softcadia</h1>
          <p>Taking technology to the grassroots</p>
        </div>
      </div>

      <div className="podcastcontainer container">
        <div className="textpodcast-container">
          <h2>CORPORATE SOCIAL RESPONSIBILITY In it for good</h2>
          <p>
            We believe in building greater futures by connecting people to
            opportunities in the digital economy. It is an ethos in keeping with
            the values of our parent company, the Tata group. The work we do is
            driven toward creating a fairer and more equitable world for all.
          </p>
        </div>
        <div className="imagepodcast-container">
          <img
            style={{ height: "250px", marginLeft: "150px" }}
            src="in1.jpeg"
            alt="Your Image"
          />
        </div>
      </div>

      <div className="podcastcontainer2 container">
        <div className="imagepodcast-container">
          <img src="in2.jpeg" alt="Your Image" />
        </div>
        <div className="textpodcast-container">
          {/* <h1>Trending </h1> */}
          <h2> Why we run</h2>
          <p>
            Sports sponsorship is aligned with our conviction to be a true
            transformation partner for our clients, our communities, and the
            ecosystems we live and work within. Sports that promote wellbeing,
            like endurance running and all-electric motorsport, are natural
            partners for us. Every Softcadia sports sponsorship story emerges
            from the following pillars: Purpose, Technology, Sustainability.
          </p>
        </div>
      </div>

      <div className="podcast">
        <h2>Key topics</h2>
        <div className="podcastcontainer3">
          <div className="p1">
            <h3>Engineering, construction, real estate services </h3>
            <p>
              Contractors, construction products, capital projects,
              infrastructure, property and facility management.
            </p>
          </div>

          <div className="p1">
            <h3>Consumer durables</h3>
            <p>
              Consumer products that do not have to be purchased frequently as
              they are made to last.{" "}
            </p>
          </div>

          <div className="p1">
            <h3>Industrial and electrical equipment</h3>
            <p>
              Manufacturers of industrial machinery and industrial products
              primarily sold to other B2B manufacturers.
            </p>
          </div>
        </div>
      </div>

     
      {/* </div> */}

      <div className="capital container">
        <hr className="chr" />

        <h2>Accelerate growth with digital-enabled change</h2>
        <p>
          While moving through a period of likely heightened volatility, the
          longer-term outlook for the global capital markets should be
          healthier. The rise of retail investors, the need to finance the
          transition to low-carbon economies globally and investments into
          infrastructure in growing markets should benefit this industry that is
          the world’s steward of capital.
        </p>
        <p>
          However, technology-led innovation, evolving digital value chains, and
          an industry reshaping at the core will continue to challenge the
          business and operating models of every capital markets firm in the
          years ahead.
        </p>
        <p>
          Leveraging global strategies and data-driven insights, our capital
          markets practice aims to help firms rethink their business models,
          accelerate growth, improve operational efficiency, manage risks,
          redefine talent strategies, integrate sustainability at the core of
          businesses and more. Discover how we can help you embrace
          digital-enabled transformation now.
        </p>
        <hr className="chr" />

        <h2>Market Research and Analysis</h2>
        <p>
          Conduct comprehensive market research to understand the dynamics of
          the IT industry. Analyze market trends, customer behavior, and
          competitor strategies.Develop and refine the brand positioning for IT
          companies. Identify unique selling propositions (USPs) and competitive
          advantages.Define and target specific customer segments within the IT
          industry. Tailor marketing strategies to address the needs and
          preferences of the target audience.
        </p>
        <hr className="chr" />
        <br />
      </div>

      <div className="banking">
        <div className="cardBanking">
          <img src="t2.jpeg" alt="" className="cardBanking-image" />
          <div className="cardbanking-content">
            <h3 className="cardbanking-title">
              Softcadia Development Partnerships
            </h3>
            <p className="cardbanking-description">
              We're using our global capabilities and experience to improve
              lives in the developing world.
            </p>
          </div>
        </div>

        <div className="cardBanking">
          <img src="e5.webp" alt="" className="cardBanking-image" />
          <div className="cardbanking-content">
            <h3 className="cardbanking-title">Skills to Succeed</h3>
            <p className="cardbanking-description">
              We're helping people gain the skills to get a job or build a
              business.
            </p>
          </div>
        </div>

        <div className="cardBanking">
          <img src="ch3.jpeg" alt="" className="cardBanking-image" />
          <div className="cardbanking-content">
            <h3 className="cardbanking-title">Our Focus on the Environment</h3>
            <p className="cardbanking-description">
              explore explore Our Focus on the Environment We're committed to
              playing a leading role in the change to a low-carbon economy.
            </p>
          </div>
        </div>

        <div className="cardBanking">
          <img src="e1.webp" alt="" className="cardBanking-image" />
          <div className="cardbanking-content">
            <h3 className="cardbanking-title">Sustainability Value Promise</h3>
            <p className="cardbanking-description">
              We're working to build a future of shared success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
