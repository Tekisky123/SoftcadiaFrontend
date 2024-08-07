

import './AI.css'

export const ArtificialInteligence=()=>{
    const ClientDetails=[
        {
        img:"ai1.webp",name:"From AI compliance to competitive advantage",desc:"Explore organizations' attitudes towards AI regulation and their readiness to embrace it.⭐⭐"
       },
       {
        img:"ai2.webp",name:"Synthetic data for speed, security and scale",desc:"Synthetic data is poised to revolutionize the way the world uses and benefits from its data.⭐⭐⭐"
    
       },
       {
        img:"ai3.webp",name:"A new era of generative AI for everyone",desc:"The technology underpinning ChatGPT will transform work and reinvent business.⭐⭐"
    
       },
       {
        img:"ai4.webp",name:"Cloud data: A new dawn for dormant data",desc:"As the data landscape grows more complex, companies can unleash its intrinsic value by first building a modern data platform on cloud.⭐⭐⭐"
    
       },
       {
        img:"ai5.webp",name:"Scaling AI: Giving data its due",desc:"Solving tomorrow’s business challenges means understanding the value of your data today.⭐⭐"
    
       }
       
    ]
   return(

    <>
    <div className="aibody">
    <div className="aidiv">
         <img className='aibgimg' src="formimg3.jpg" alt="" />

         <div className="aibigdiv">
        <h1>Artificial Intelligence</h1>
        {/* <p>Get up to speed on artificial intelligence and learn how it can help you drive business value with our <br /> curated collection of insights, reports and guides.</p> */}

       <div className="bg">

<div className="bg2">
    {/* <img className='comma' src="comma.png" alt="" /> */}
<h1 className='hd'>Join the community of our satisfied job seekers... </h1>
</div>

<div className="wrp">

    {ClientDetails.map((val)=>{
        return(
            
          <>
           
            <div className="itm2">
            <img src={val.img} alt="" />
             <h4 className="name">{val.name}</h4>
             <p className="desc3">{val.desc} </p>
         </div>
          </>
            
        )
    })}
   
   
</div> 
</div>
    
   <div className="aibenefits ">
   <h2>The benefits of AI</h2>
    <p>
    End-to-end efficiency: <span>
    AI eliminates friction and improves analytics and resource utilization across your organization, resulting in significant cost reductions. It can also automate complex processes and minimize downtime by predicting maintenance needs.
    </span>
    </p>


    <p>
    Improved accuracy and decision-making : <span>
    AI augments human intelligence with rich analytics and pattern prediction capabilities to improve the quality, effectiveness, and creativity of employee decisions.
    </span>
    </p>

    <p>
    IIntelligent offerings : <span>
    Because machines think differently from humans, they can uncover gaps and opportunities in the market more quickly, helping you introduce new products, services, channels and business models with a level of speed and quality that wasn’t possible before.
    </span>
    </p>


    <p>
    Empowered employees : <span>
    AI can tackle mundane activities while employees spend time on more fulfilling high-value tasks. By fundamentally changing the way work is done and reinforcing the role of people to drive growth, AI is projected to boost labor productivity. Using AI can also unlock the incredible potential of talent with disabilities, while helping all workers thrive.
    </span>
    </p>
   </div>
   </div>
   </div>
    </div>
    </>
   )
}