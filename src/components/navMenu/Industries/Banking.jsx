import './Banking.css'
// import imageSrc from 'public/computer.jpg'

export const Banking = () => {
    return (
<>
    <div className="bankingvid">
    <video src="bankingvid.mp4" loop autoPlay muted></video>
    <h1> Banking</h1>
    <p>We help banks challenge their conventions; capitalize on the full potential of technology, their people and emerging opportunities; and become better at change.</p>
    </div>

    <div className="banking">
      <div className="cardBanking">
        <img src="b1.avif" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Customer Experience</h3>
          <p className="cardbanking-description">We help banks reinvent their customer experience and reinforce trust and purpose.</p>
        </div>
      </div>


      <div className="cardBanking">
        <img src="b2.avif" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Digital Risk & Compliance</h3>
          <p className="cardbanking-description">Helping banks navigate compliance; cyber risk; fraud & financial crime; and analytics & technology.</p>
        </div>
      </div>


      <div className="cardBanking">
        <img src="b3.avif" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Banking Operations</h3>
          <p className="cardbanking-description">We revamp bank operating models using smart tech to cut costs, improve outcomes and deliver new experiences.</p>
        </div>
      </div>



      <div className="cardBanking">
        <img src="f3.webp" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Banking Cloud</h3>
          <p className="cardbanking-description">We help unlock cloud’s true benefits with the right strategy, people and tools to migrate it, operate it and secure it.</p>
        </div>
      </div>

      </div>





      {/* 2nd card */}
      <div className="banking">
      <div className="cardBanking">
        <img src="f1.jpeg" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Auto Finance</h3>
          <p className="cardbanking-description">We help banks and captive automotive finance companies go fully digital to meet the needs of customers and dealers—without the bumpy ride.</p>
        </div>
      </div>


      <div className="cardBanking">
        <img src="f4.webp" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Equipment Finance</h3>
          <p className="cardbanking-description">We help banks and captive equipment finance companies equip themselves with future-ready digital lending operations.</p>
        </div>
      </div>


      <div className="cardBanking">
        <img src="f5.webp" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Sustainable Banking</h3>
          <p className="cardbanking-description">We help banks visualize and execute their sustainability agendas for first-mover advantage.</p>
        </div>
      </div>



      <div className="cardBanking">
        <img src="f6.webp" alt="" className="cardBanking-image" />
        <div className="cardbanking-content">
          <h3 className="cardbanking-title">Core Banking</h3>
          <p className="cardbanking-description">We build intelligent, connected and flexible core banking systems fit for the future.</p>
        </div>
      </div>

      </div>
      </>
    );
  };
  