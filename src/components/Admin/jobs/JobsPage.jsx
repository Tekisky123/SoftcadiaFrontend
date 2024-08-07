import { useState } from "react";
import JobsPage from "./JobsForm";
import TableJobs from "./JobsTable";
import { useForm } from "react-hook-form";


const Job = () => {
  const { register, handleSubmit, reset , formState , watch} = useForm("");
  const {errors }  = formState;
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [edit , setEdit] = useState(false);
  const [refetch , setRefetch] = useState(false)
 
  const Show = () => {
    if (show == false) {
      setShow(true);
    } else if (show == true) {
      setShow(false);
    }
  };
  
  return (
    <>
     <div style={{marginTop:"80px"}}>
     <h2 style={{textAlign:"center" , color:"#2C5364" , paddingTop:"5px"}}>Job Details...</h2>
      <button
        type="button"
        onClick={Show}
        style={{
          background: "#2C5364",
          color: "white",
          height: "40px",
          width:"10%",
          border: "transparent",
          padding: "5px",
          borderRadius: "8px",
          float: "right",
          marginRight: "7%",
          fontWeight:"500",
          marginTop:"-20px"
          // margin:"600px",
        }}
      >
        Add new job
      </button>
     
      </div>
      <br />
      <br />
      {show == true && (
        <JobsPage
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          setData={setData}
          data={data}
          setShow={setShow}
          show={show}
          edit={edit} setEdit={setEdit}
          refetch={refetch}
          setRefetch={setRefetch}
         
          errors={errors}
          watch={watch} 
        />
      )}

      <TableJobs data={data} setData={setData} edit={edit} setEdit={setEdit}  register={register}
          handleSubmit={handleSubmit}
          reset={reset} setShow={setShow} show={show}  refetch={refetch}
          setRefetch={setRefetch} />
{/* <Outlet/> */}
    </>
  );
};
export default Job;
