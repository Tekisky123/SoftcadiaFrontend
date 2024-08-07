import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./views/Home";
import Job from "./components/Admin/jobs/JobsPage";
import Login from "./components/Admin/login/login";
import TrainingPage from "./components/Admin/trainings/TrainingPage";
import CareerJobs from "./components/careers/CareerJobs";

import CareerTraining from "./components/careers/CareerTrainings";
import { ApplyJob } from "./components/careers/JobApply";
import { ReadMore } from "./components/careers/Readmore";
import ApplicationServices from "./views/ApplicationServices";
import { ApplyTraining } from "./components/careers/TrainingApply";
import BusinessProcessService from "./views/BusinesProcessService";
import BusinessStratgy from "./views/BusinessStratgy";
import AppliedJobUsers from "./components/Admin/appliedusers/AppliedJobUser";
import ManagementChangeService from "./views/ManagementChangeService";
import AppliedTrainingUsers from "./components/Admin/appliedusers/AppliedTrainingUser";
import CustomerExperienceService from "./views/CustomerExperienceService";
import DataAnalystService from "./views/DataAnalystservice";
import EcosystemPartnerService from "./views/EcosystemPartnersService";
import FinanceConsultingService from "./views/FinanceConsultingService";
import { Cloud } from "./components/navMenu/Institution/cloud";
import { ArtificialInteligence } from "./components/navMenu/Institution/AI";
import { Blogs } from "./components/navMenu/blogs";
import { CustomerExperienced } from "./components/navMenu/customerExperience";
import { Podcast } from "./components/navMenu/Institution/podcast";
import { FutureWork } from "./components/navMenu/Institution/FutureWorkForce";
import { ITsecurity } from "./components/navMenu/Institution/ITsecurity";
import { Banking } from "./components/navMenu/Industries/Banking";
import { CapitalMarket } from "./components/navMenu/Industries/CapitalMarket";
import { Insurance } from "./components/navMenu/Industries/Insurance";
import { LifeSci } from "./components/navMenu/Industries/LifeSci";
import { Hightech } from "./components/navMenu/Industries/Hightech";
import { Softwareplatforms } from "./components/navMenu/Institution/SoftwarePlatforms";
import { Travel } from "./components/navMenu/Industries/Travel";
import Health from "./components/navMenu/Industries/Health";
import CustomerGoodsAndService from "./components/navMenu/Industries/CustomerGoods";
import { Energy } from "./components/navMenu/Industries/Energy";
import { PublicService } from "./components/navMenu/Industries/PublicService";
import { CommunicationMedia } from "./components/navMenu/Industries/CommunicationMedia";
import { Chemical } from "./components/navMenu/Industries/Chemicals";
import { AeorospaceAndDefence } from "./components/navMenu/Industries/AerospaceDefence";
import Automotive from "./components/navMenu/Industries/Automotive";
import { NaturalResources } from "./components/navMenu/Industries/NaturalResources";
import { IndustrialEquipment } from "./components/navMenu/Industries/IndustrialEquipment";
import { IndustryX } from "./components/navMenu/Institution/IndustryX";
import { FutureSystem } from "./components/navMenu/Institution/FutureSystem";
import { Aboutus } from "./components/Aboutus/aboutUs";
import AdminNavbar from "./components/Admin/AdminNavBar";
// import AdminPannel from "./components/Admin/adminPannel";

// import { AuthProvider } from "./AuthContext";
import { Adminhome } from "./components/Admin/AdminHome";
import Protected from "./Protected";
import PageNotFound from "./views/PageNotFound";
import { useEffect } from "react";
import Userpage from "./components/Admin/UserDetails/UserPage";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;
  useEffect(() => {
    window.scrollTo({ top: 0, behvior: "smooth" });
  }, [location.pathname]);

  // Function to set the user type in local storage
  const handleSetUserType = (usertype) => {
    console.log("User Type in App.js:", usertype);
    localStorage.setItem("usertype", usertype);
  };
  const routesToHideHeader = ["/dashboard/login", "*"];

  // Retrieve the stored user type from local storage
  const storedUserType = localStorage.getItem("usertype");

  // Log the stored user type if available
  if (storedUserType) {
    console.log("User Type retrieved from local storage:", storedUserType);
    // Perform any additional actions with the stored user type if needed
  }

  return (
    <>
      {!routesToHideHeader.includes(currentRoute) &&
        (storedUserType === "Admin" ? <AdminNavbar /> : <NavBar />)}

      <Routes>
        {storedUserType === "Admin" ? (
          <>
           <Route
              path="/adminhome"
              element={
                <Protected>
                  <Adminhome />
                </Protected>
              }
            />
            <Route
              path="/jobss"
              element={
                <Protected>
                  <Job />
                </Protected>
              }
            />
            <Route
              path="/trainings"
              element={
                <Protected>
                  <TrainingPage />
                </Protected>
              }
            />
            <Route
              path="/appliedjobs"
              element={
                <Protected>
                  <AppliedJobUsers />
                </Protected>
              }
            />
            <Route
              path="/appliedtraining"
              element={
                <Protected>
                  <AppliedTrainingUsers />
                </Protected>
              }
            />
          </>
        ) : (
          ""
        )}

        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard/login"
          element={<Login setUserType={handleSetUserType} />}
        />
        <Route path="/signup" element={<Userpage/>} />

        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/jobscar" element={<CareerJobs/>}/>
        <Route path="/trainingscar" element={<CareerTraining />} />
        {/* <Route path="/usersignup" element={<UserSignUp />} /> */}
        {/* <Route path="/usersignin" element={<UserSignIn />} /> */}
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/jobdetails/:jobId" element={<ApplyJob />} />
        <Route
          path="/trainingdetails/:trainingId"
          element={<ApplyTraining />}
        />
        <Route path="/application-service" element={<ApplicationServices />} />
        <Route
          path="/businesprocess-service"
          element={<BusinessProcessService />}
        />
        <Route path="/businessstratgy-service" element={<BusinessStratgy />} />
        <Route
          path="/managementchange-service"
          element={<ManagementChangeService />}
        />
        <Route
          path="/customerexp-service"
          element={<CustomerExperienceService />}
        />
        <Route path="/analyst-service" element={<DataAnalystService />} />
        <Route
          path="/ecosystem-service"
          element={<EcosystemPartnerService />}
        />
        <Route path="/finance-service" element={<FinanceConsultingService />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/AI" element={<ArtificialInteligence />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/customerexperience" element={<CustomerExperienced />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/futurework" element={<FutureWork />} />
        <Route path="/itsecurity" element={<ITsecurity />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/capitalmarket" element={<CapitalMarket />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/lifescience" element={<LifeSci />} />
        <Route path="/hightech" element={<Hightech />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/health" element={<Health />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/communicationmedia" element={<CommunicationMedia />} />
        <Route path="/publicservice" element={<PublicService />} />
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/industry-x" element={<IndustryX />} />
        <Route path="/futureSystem" element={<FutureSystem />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/industrialEquipment" element={<IndustrialEquipment />} />
        <Route path="/naturalresources" element={<NaturalResources />} />
        <Route
          path="/Aerospace-and-defence"
          element={<AeorospaceAndDefence />}
        />
        <Route
          path="/customergoods&service"
          element={<CustomerGoodsAndService />}
        />
        <Route path="/softwarePlatforms" element={<Softwareplatforms />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* </AuthProvider> */}

      {currentRoute === "/appliedtraining" ||
      currentRoute === "/appliedjobs" ||
      currentRoute === "/dashboard/login" ||
      currentRoute === "/signup" ||
      currentRoute === "/jobss" ||
      currentRoute === "/trainings" || currentRoute === "/adminhome"? (
        <></>
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
