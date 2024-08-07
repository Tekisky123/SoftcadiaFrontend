
import './CommunicationMedia.css'

export const CommunicationMedia = () => {
    return( 
     <>
   
   <div className="mediaimg">
      <img className='cmbgimg' src="m1.jpeg" alt="" />
      <div className="cmbigdiv">
 
 <div className="content1 " >
     <h1 className='h1 anim ' style={{color:"white" , textShadow:"4px 0px 4px black"}}>Curating digital experiences</h1>
     <p className='p anim' style={{color:"white" , textShadow:"4px 0px 4px black"}}>We help you tap value beyond the boundaries.</p>

     <h1 className='h1 anim' style={{color:"white" , textShadow:"4px 0px 4px black"}}>Our solutions help you serve your customer better.</h1>
    
 </div>
 </div>
 
 {/* <img src="L1.jpeg" alt="" className='life-img anim' /> */}
        </div>
 
        <div className="capital123 container">
      <h2>Innovate to excite</h2>
      <p>The digital revolution has dramatically altered the consumption of data, content, and information. In order to keep up with today's consumer, communications, media, and information services (CMI) companies have to move up the value chain to become custodians of digital experiences. For telecom companies, this means ensuring secure and resilient communications while creating ecosystems for bundling products and services. Media companies need to engage and inspire consumers through captivating content delivered anytime, anywhere. And information services firms need to find ways to uncover deep insights from data. 
</p>
      <hr className='chr' />
 
      <h2>Equifax rewrites its growth story with softcadia and Google Cloud.</h2>
      <p>One of the largest credit referencing agencies and a global data, analytics, and technology company, Equifax wanted to modernise its legacy applications and move to Google Cloud. As part of this global initiative, Equifax UK sought to rebuild its identity, verification, and assurance platform to accelerate business growth. This company chose Softcadia, its IT strategy partner for a decade and a half, to transform the existing platform and move to the cloud.</p>
      <hr className='chr' /><br />


      <h2>Equifax UK wanted to modernise its identity, verification, and assurance platform.</h2>
      <p>Over the past decade, a leap in technology advancements has propelled digital transformation across industries. However, there are many companies that still use legacy platforms. This is particularly problematic in today’s fast-changing global economy where new threats emerge rather quickly. Equifax UK wanted to leverage the cloud technology to shorten the time to market and improve its growth and revenue potential.

Recognising this need, the company sought a multi-dimensional identity verification, and assurance platform with advanced analytics and data orchestration to shield potential pitfalls and move to a sustainable way of working. This would also help Equifax UK meet their environment, sustainability, and governance (ESG) goals and realise their net-zero vision by 2040.
</p>
      <hr className='chr' /> <br />
        </div>





        <div className='blogsdiv'>
        <div className="cardblog">

         <div className="cardblog-content">
            <h1 className='cardblog-title'>Equifax UK uses Google Cloud to future-proof its business </h1>
            <p className='cardblog-description'>
            Equifax UK, a leading data, analytics, and technology provider, needed to rebuild its on-premise legacy systems to drive growth and enhance customer experience and security.
The company embarked on a digital transformation journey and designed a multi-dimensional identity, verification, and assurance platform on Google Cloud.
softcadia helped the credit referencing giant complete a successful migration to Google Cloud.
            </p>
            {/* <button className='cardblog-button'>Read more..</button> */}
         </div>     
         </div>


         <div className="cardblog">
         <div className="cardblog-content">
         <h1 className='cardblog-title'>Digital audio advertising: Winning the customers' attention</h1>
        <p className='cardblog-description'>
        Digital audio advertising creates value for advertisers and publishers looking to maximize their marketing dollars.   
However, advertisers need to leverage digital technologies such as advanced machine learning methodologies with census and third-party data to realize its full potential. 
Brands that deepen their investments wisely in this space will be best positioned to capture the attention of consumers and gain competitive advantage.
        </p>
       {/* <button className='cardblog-button'>Read more..</button> */}
         </div>
       </div>


       <div className="cardblog">

<div className="cardblog-content">
   <h1 className='cardblog-title'>The need for a data-driven content strategy for media firms</h1>
   <p className='cardblog-description'>
   For media and entertainment companies, contextual content translates into reduction in costs, increase in customer acquisitions, and increase the average revenue per user (ARPU).
Timely access to data is vital to measuring the ROI on content.
The complexities around ROI measurement necessitate dedicated applications to store, search, and retrieve granular details such as their rights usage, avails, as-run, generated ad revenue, consumer profiles, and so on.
   </p>
   {/* <button className='cardblog-button'>Read more..</button> */}
</div>     
</div>


<div className="cardblog">

<div className="cardblog-content">
   <h1 className='cardblog-title'>Winning the 5G race with SDN in microwave backhaul</h1>
   <p className='cardblog-description'>
   5G technology has been holding sway over telcos’ fortunes. Still, it has faced many challenges, such as late spectrum allocation and its high cost, issues surrounding the right of way (ROW) rules in fiber laying, fuel costs, and low user charges.
To increase profitability and deliver superlative customer experiences, communications service providers (CSPs) must roll out 5G services quickly, and the trusted microwave technology can be of immense help here.
   </p>
   {/* <button className='cardblog-button'>Read more..</button> */}
</div>     
</div>

</div>
<br /> <br /> <br /> <br />
       </>
    )
 }