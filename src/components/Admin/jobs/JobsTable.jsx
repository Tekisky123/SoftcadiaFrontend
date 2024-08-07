import './JobsTable.css'
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {Base_Url} from '../../../API'


 const TableJobs=({
    data,
    setData,
    setEdit,
    reset,
    setShow,
    refetch,
    setRefetch,
  })=>{
   
  const [currentpage,setCurrentPage]=useState(1);
  const recordsPerPage=20;
  const lastIndex=currentpage * recordsPerPage;
  const firstIndex=lastIndex - recordsPerPage;
  const records=data.slice(firstIndex, lastIndex);
  const nPage=Math.ceil(data.length / recordsPerPage);
  const numbers=[...Array(nPage + 1).keys()].slice(1)


  function prePage(event){
    event.preventDefault();
    if(currentpage !== 1){
     setCurrentPage(currentpage -1)
    }
   }
   
   function changeCPage(id,event){
    event.preventDefault()
   setCurrentPage(id)
   }
   
   function nextPage(event){
    event.preventDefault();
    if(currentpage < nPage){
     setCurrentPage(currentpage + 1)
    }
   }


    useEffect(() => {
    
        //setLoading(true);
        axios
          .get(`${Base_Url}/softcadia/job/joblist`)
          .then((res) => {
            setData(res.data);
            setRefetch(!refetch)
            
            //setLoading(false);
          })
          .catch((err) => {
            alert(err);
          });
      }, [refetch]);
    
      const onEdit = (value) => {
        reset(value);
        setEdit(true);
      };
    
      const onDelete = (id) => {
        axios
          .delete(`${Base_Url}/softcadia/job/jobdelete/${id}`)
          .then((res) => {
            if (res) {
              return setRefetch((prevRefetch) => !prevRefetch);
            }
          })
          .catch((error) => {
            alert(error);
          });
      };
    

    const memoizedTable = useMemo(() => {
        return (
        
         <>
         <div className='loadertable' style={{overflowY:"auto",height:"70vh",width:"100%"}}>
    <table className='abcde container'>
   
      <tr>
        <th>#</th>
        <th>JobId</th>
        <th>Title</th>
        <th>Remote</th>
        <th>employee Type</th>
        <th>Skills</th>
        <th>Summary</th> 
        <th>Company</th>
        <th>JobLocation</th>
        <th>Actions</th>
      </tr>
   
  
      {records.map((value, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{value?.jobId || "N/A"} </td>
          <td>{value?.title || "N/A"}</td>
          <td>{value?.remote || "N/A"}</td>
          <td>{value?.employee || "N/A"}</td>
          <td>{value?.skills || "N/A"}</td>
          <td>{value?.summary || "N/A"}</td>
          <td>{value?.company || "N/A"}</td>
          <td>{value?.joblocation || "N/A"}</td>
          <td colSpan={2}>
            {" "}
           <button style={{width:"50px",margin:"5px",background:"lightblue"}}> <FiEdit
              variant="primary"
              onClick={() => {
                setShow(true);
                onEdit(value);
                window.scrollTo({top:0 , behavior:"smooth"}) 
              }}
            /></button>
            {" "}
           <button style={{width:"50px",margin:"5px",background:"rgb(237, 44, 44)"}}> <MdDeleteOutline
              variant="primary"
              onClick={() => {
                onDelete(value?._id)
                window.scrollTo({top:0 , behavior:"smooth"})
              }}
            /></button>
              
          </td>
        </tr>
      )).reverse()}
  
  </table>
 
  </div>    


  <div style={{position:"relative",bottom:"0",marginTop:"40px",marginLeft:"60px"}}>
    <ul className='pagination'>
   <li className="page-item">
    <a href="" className='page-link' onClick={prePage}>prev</a>
   </li>
   {
    numbers.map((n, i)=>(
      <li className={`page-item ${currentpage === n ? 'active' : ''}`} key={i}>
     <a href="" className="page-link" onClick={(e)=>changeCPage(n,e)} >{n} </a>
      </li>
    ))
  }
   
   <li className="page-item">
    <a href="" className='page-link' onClick={nextPage}>Next</a>
   </li>
    </ul>
    </div>
  
  </>
         
);



}, [data, setShow, onEdit, onDelete]);



return (
<>
  <div >
    <div >{memoizedTable}</div>
  </div>
</>
);
};

export default  TableJobs;













