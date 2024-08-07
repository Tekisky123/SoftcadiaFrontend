

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
// import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {Base_Url} from '../../../API';
// import './signupTable.css'
import { MdDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const UserTable = ({
  data,
  setData,
  setEdit,
  reset,
  setShow,
  refetch,
  setRefetch,
}) => {

 
  useEffect(() => {

     
      axios
        .get(`${Base_Url}/softcadia/getloginuser`)
        .then((res) => {
          setData(res.data);
          setRefetch((prevRefetch) => !prevRefetch)
         
         
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
        .delete(`${Base_Url}/softcadia/userdelete/${id}`)
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

        <div className='loadertable' style={{overflowY:"auto",height:"90vh"}}>
  <table className='abcde container'>

    <tr>
      <th>#</th>
      <th>UserType</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>

    {data.map((value, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{value?.usertype }</td>
        <td>{value?.username }</td>
        <td>{value?.email }</td>

        <td colSpan={1}>
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
    ))}

</table>
</div>
);
}, [data, setShow, onEdit]);
return (
<>
<div >
  <div >{memoizedTable}</div>
</div>
</>
);
};

export default  UserTable;






