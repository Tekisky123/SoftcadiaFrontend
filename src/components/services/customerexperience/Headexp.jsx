import "./Headexp.css";

export const HeadExpService = () => {
  return (
    <>
      <div className="image-containerexp">
        <img className="responsive-imageexp" src="pexels5.jpg" alt="" />
        <div className="image-overlayexp">
          <h2 className="image-titleexp">
            CUSTOMER EXPERIENCE IS ONLY THE BEGINNING
          </h2>
          <p className="image-descriptionexp">
            Success today depends on how relevant you can be to your customers
            and employees at any given moment. We create growth through
            relevance at the speed of life.
          </p>
        </div>
      </div>

      <div className="responsive-divexp">
        {/* Your text content goes here */}

        <h2>Create an always-on state of innovation and growth.​</h2>
        <p>
          Outside forces are disrupting the enterprise agenda, and customers are
          raising their expectations for the products and services they buy.
          Customers are keeping businesses accountable in new ways, and
          businesses have to increase their learning velocity to adapt.
        </p>
        <p>
          People's connections with work have been prompted to reevaluate by
          global change, disruption, the well-being revolution, and a new
          generation of workers. However, leaders tend to underestimate how much
          their people are related, often overestimating it by a factor of two.
        </p>
        <p style={{lineHeight:"30px"}}>
          <b>Now more than ever, growth is discovered, not planned. </b>
          Companies need to adapt to meet customers’ constantly changing needs,
          respond to disruption and drive new areas of growth and relevance. In
          short, they need to become life-centric. Life-centric businesses are
          deeply attuned to the changing world and how it affects their
          customers. They have a fundamentally different approach to Growth &
          Product Innovation as well. They are focused on discovering the new
          needs and problems customers face, creating life-centric experiences,
          products, or businesses to address those needs, and building a
          responsive business capability for talent and capital deployment to
          maximize outcomes and value creation. More than ever, maintaining
          relevance requires a proven, holistic approach grounded in a strong
          and extensible purpose. We help organizations create a state of
          always-on growth and responsive relevance to life-centric customer
          needs and we can empower your company to embark on that journey
          today.​
        </p>
      </div>

      <div className="responsive-containerexp1">
        <div className="text-contentexp1">
          <h2>Application services driven by innovation</h2>
          <p>
            Most businesses find that their complex application landscapes,
            which combine digital, SaaS, and legacy systems, take up an
            excessive amount of IT resources and limit their capacity to spur
            growth.
          </p>
          <p>
            With the speed and agility of our application services, you can
            quickly and easily reinvent your application environment while
            consistently innovating to realise commercial value.
          </p>
        </div>
        <div className="image-containerexp1">
          <img src="pexels4.jpg" alt="Your Image" />
        </div>
      </div>
    </>
  );
};
