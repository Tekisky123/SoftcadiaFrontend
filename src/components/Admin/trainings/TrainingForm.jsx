import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {Base_Url} from '../../../API'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const Training = ({
  register,
  handleSubmit,
  reset,
  setData,
  data,
  setShow,
  show,
  edit,
  setEdit,
  watch,
  errors,


}) => {


  const submit = (userdata) => {


    if (edit === false) {

      axios.post(`${Base_Url}/softcadia/training/addnewtraining`, userdata)
        .then((res) => {
          if (res) {
            setData([...data, res.userdata]);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setShow(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: ` Taraining Added Successfully!`,
            showConfirmButton: false,
            timer: 2000
                });   
          reset();
        });
    }
    if (edit === true) {

      axios
        .post(
          `${Base_Url}softcadia/training/trainingedit/${userdata._id}`,
          userdata
        )
        .then((res) => {
          if (res) {
            setEdit(res.userdata);
          }

        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setShow(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: ` Training Edit Successfully!`,
            showConfirmButton: false,
            timer: 2000
                });
          reset([]);
        });
    }
    setEdit(false);

  };
  const cancel = () => {
    setShow(!show);
    reset();
  };

  const areFieldsFilled = () => {
    // Check if all the required fields have values
    const { title, offered, location, duration, details, date, summary, trainingdetail
    } = watch();

    return !!title && !!offered && !!location && !!duration && !!details && !!date && !!summary && !!trainingdetail;
  };

  return ( 
    <>
      <div className="jobform container">
        <div>
          {/* <h2 style={{textAlign:"center"}}>Add New</h2> */}
          
          <div className='trainingform container' style={{marginTop:"50px"}}>
            <form action="" onSubmit={handleSubmit(submit)}>
              <div >
                <label htmlFor="">
                  Title<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
                </label>
                <input type="text" {...register("title", { required: { value: true, message: "title is required" } })} />
                <p style={{ color: "red" }}>{errors?.title?.message}</p>
              </div>
              <label htmlFor="">
                Training offerred By<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
              </label>

              <div>
                <input
                  type="text"
                  name="offered"
                  {...register("offered")}
                />


              </div>
              <br />

              <label htmlFor="" >
                Training Location<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :{" "}
              </label>
              <div >
                <input
                  type="text"
                  name="location"


                  {...register("location")}
                />

              </div>
              <div >
                <label htmlFor="">
                  Duration<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
                </label>
                <input
                  type="text"
                  name="duration"

                  {...register("duration")}
                />
              </div>
              <br />
              <br />
              <div >
                <label htmlFor="" >
                  Trainer Details<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
                </label>
                <input
                  type="text"
                  name="details"

                  {...register("details")}
                />
              </div>
              <br />
              <br />
              <div >
                <label htmlFor="" >
                  Training Start date<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
                </label>
                <input
                  type="text"
                  name="date"

                  {...register("date")}
                />
              </div>
              <br />
              <br />
              <div >
                <label>
                  Summary<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
                </label>
                <br />
                <textarea
                  name="summary"
                  cols="70"
                  rows="4"

                  {...register("summary")}
                ></textarea>
              </div>
              <br />
              <br />
              <div >
                <label >
                  Details of Training<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> :
                </label>
                <br />
                <textarea
                  name="trainingdetail"
                  cols="70"
                  rows="4"

                  {...register("trainingdetail")}
                ></textarea>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <button
                  type="submit"
                  disabled={!areFieldsFilled()}
                  style={{ padding: "10px 15px",  borderRadius: "10px",border:"2px solid black",background:"#2C5364",color:"#fff"  }}

                >
                  Submit
                </button>{" "}

                <button
                   style={{ background: "red", color: "white", padding: "10px 15px",  borderRadius: "10px" }}
                  onClick={cancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Training;