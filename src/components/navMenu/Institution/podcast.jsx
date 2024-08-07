
import './podcast.css'

export const Podcast=()=>{

    return(
        <>
          <div className="podcastcontainer container">
      <div className="textpodcast-container">
        <h1>Editor’s pick</h1>
        <h2> Built for Change</h2>
        <p>
        Organizations have long struggled to foster strong working connections among their employees – even before COVID-19 hit. Now, with constant technological and societal changes in play, business leaders must listen to their employees and innovate entirely new ways of working.
        <br /><br />
        In this episode, we explore the ever-evolving future of work alongside leaders who are shaking up the status quo and embracing transformative change from the top down.


        </p>
      </div>
      <div className="imagepodcast-container">
        <img style={{height:"300px",marginLeft:"150px"}} src="podcast1.jpg" alt="Your Image" />
      </div>
    </div>

        

    <div className="podcastcontainer2 container">
    <div className="imagepodcast-container">
        <img style={{height:"300px"}} src="podcast2.webp" alt="Your Image" />
      </div>
      <div className="textpodcast-container">
        <h1>Trending talk</h1>
        <h2> Change Conversations</h2>
        <p>
        Unpack the power of the personal narrative, and how it can be used to cultivate strong, authentic leadership.
        <br /><br />
        Learn how we’re pushing the boundaries of technology, enabling Accenture to run more cost-effectively, securely and sustainably—all while fostering innovation among our people and propelling growth.

        </p>
      </div> 
    </div>



    <div className="podcast">
      {/* <img src="formimg2.jpg" alt="" /> */}
        <h2>Key topics</h2>
    <div className="podcastcontainer3">
        
      <div className="p1">
   <h3>AI leaders </h3>
    <p>Hear Accenture's chief marketing & communications officer, Jill Kramer, share the role data and automation will play in the future of marketing.</p>
  
      </div>

      <div className="p1">
      <h3>Walk in the Cloud</h3>
      <p>Tune in for no-nonsense views from seasoned experts on how to power business transformation through cloud. </p>
      </div>
      
      <div className="p1">
      <h3>Building sustainable futures</h3>
      <p>Listen to experts, influencers, and innovators share sensible advice – and sometimes surprising solutions – that can help businesses be more sustainable.</p>
      </div>
      
    </div>
    </div>




    <div className="podcast" >
        <h2>Industry focus</h2>
    <div className="podcastcontainer3" >
        
      <div className="p1">
   <h3>Driving Digital in Biopharma </h3>
    <p>Listen to the latest episode about the building blocks and historic obstacles to a successful digital transformation in biopharma.</p>
  
      </div>

      <div className="p1">
      <h3>Retail's Responsible Reset</h3>
      <p>Hear our hosts discuss insights with special industry guests on the forever-changing retail market. </p>
      </div>
      
      <div className="p1">
      <h3>Embark: Travel, Tech and Trust</h3>
      <p>Tune in as experts share how to reinvigorate traveler confidence, build resilience and innovate in the new era.</p>
      </div>
      
    </div>
    </div>
        </>
    )
}