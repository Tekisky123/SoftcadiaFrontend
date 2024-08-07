import "./Bottom.css"
export const BottomApplication = () => {
    
const cardData = [
    {
      title: 'Agile transformation',
      content: 'Softcadia helps create a culture of innovation and brings Development and Operations together, fully harnessing the power of modern engineering techniques supported by coaching, advisory and training.Our seamless, end-to-end approach helps organzations provide high-quality software delivery and improve responsiveness to business and customer demands.We transition traditional delivery to Agile and DevOps for iterative and rapid releases.',
     
    },
    {
      title: 'Value-based application administration',
      content: 'Value-led Application Management is about ensuring that the management and maintenance of applications are not just IT-centric but are driven by the overarching goal of delivering tangible value to the business. It requires a strategic and holistic approach, considering factors such as business alignment, continuous improvement, cost efficiency, user satisfaction, agility, innovation, and risk management.',
      
    },
    {
      title: 'Architecture',
      content: 'At Softcadia, Technology Architects are at the heart of innovation to deliver the most technically and strategically complex and cutting-edge solutions to our clients.We help strategizing the future IT by assessing the existing, defining the enterprise technology vision and orchestrating the transformation. Technology rapidly evolves over time, with increase user and business expectations. We transform legacy systems in modern, flexible, Cloud-native one.',
      
    },
    {
        title: 'DevOps',
        content: 'DevOps makes this possible by bringing business, development and operation teams together and applying automated processes to streamline IT."The key to DevOps transformation is that there is no end-state—we must continuously evolve."Application delivery has shifted from large-scale, project-based implementations to a continuous evolution.Agile: Iterative and incremental development . Security: Greater resilience and fewer threats',
       
      },
    
  ];

        
  return (
    <>

<div className="text-contentapp">
          <h2>Full application lifecycle services</h2>
          <p>From the development of new applications, through modernization, management and maintenance, we cover all stages of the application lifecycle.</p>
          
        </div>
    <div className="fancy-cards-container">
      {cardData.map((card, index) => (
        <div className="fancy-card" key={index}>
          <div className="fancycard-content">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  
        </>
    )
}