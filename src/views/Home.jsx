import { ClientCollaboration } from "../components/home/ClientCollaboration";
import { Clients } from "../components/home/Clients";
import { Services } from "../components/home/Services";
import { TextAnimation } from "../components/home/TextAnimantion";
import { WhySoftcadia } from "../components/home/WhySoftcadia";


const Home = () => {
    return(
        <>
           <TextAnimation/>
           <WhySoftcadia/>
           <Services/>
           <ClientCollaboration/>
           <Clients/>
        </>
    )
};
export default Home;