import './JobButton.css'

export const JobButton=()=>{
const jobarray=["Remote only","Exclude Remote","Work From Home Available","Full-time",
"Part-time","Contract","Third Party","Frontend","Backend","Fullstack developer","MERN stack"
]
    return(
        <>
        <div className="jbtn container">
      {jobarray.map((val)=><button className='jbtn1'>{val}</button>
      )}
         </div>
        
        </>
    )
}