import './JobsForm.css'
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Base_Url } from '../../../API'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const JobsPage = ({
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
  errors
}) => {


  const submit = (userdata) => {
    if (edit === false) {

      axios.post(`${Base_Url}/softcadia/job/addnewjob`, userdata)
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
            title: ` Job Added Successfully!`,
            showConfirmButton: false,
            timer: 2000
                })
          reset();
        });
    }
    if (edit === true) {

      axios
        .post(
          `${Base_Url}/softcadia/job/jobedit/${userdata._id}`,
          userdata
        )
        .then((res) => {
          if (res) {
            setEdit(res.userdata);
            // setRefetch(!refetch)

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
            title: ` Job Edit Successfully!`,
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
    const {
      title,
      remote,
      employee,
      skills,
      company,
      joblocation,
      summary,
      details,
    } = watch();

    return (
      !!title &&
      !!remote &&
      !!employee &&
      !!skills &&
      !!company &&
      !!joblocation &&
      !!summary &&
      !!details
    );
  };
  return (
    <>
      <div className="jobform container">
        <h3>JOBS FORM</h3>
        <div>
          <form onSubmit={handleSubmit(submit)} className='.form'>
            <label>Title<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> : </label>
            <input type="text"
              {...register("title", {
                required: { value: true, message: "title is required" },
              })} />
            {/* <p style={{ color: "white" }}>{errors?.title?.message}</p> */}
            <br />
            <label>Skills<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> : </label>
            <input type="text"
              name="skills"
              {...register("skills")} />
            <br />

            <label>Company<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> : </label>
            <input type="text" name="company"
              {...register("company")} />
            <br />

            <label>Job Location<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> : </label>
            <input type="text"
              name="joblocation"
              {...register("joblocation")} />
            <br />
            <br />
            <h5>Remote Options : </h5>
            <div className="formremote">
              <input type="radio" name="remote"
                value="Remote Only"
                {...register("remote")} />
              <label>Remote Only</label>

              <br />

              <input type="radio" name="remote"
                value="Exclude Remote"
                {...register("remote")} />
              <label>Exclude Remote</label>
              <br />

              <input type="radio" name="remote"
                value="Work From Home Available"
                {...register("remote")} />
              <label>Work From Home Available</label>
              <br />
            </div>
            <br />
            <h5>Employement Type : </h5>
            <div className="formremote">

              <input type="radio" name="employee"
                value="Full-time"
                {...register("employee")} />
              <label>Full Time</label>
              <br />

              <input type="radio" name="emloyee"
                value="Part-time"
                {...register("employee")} />
              <label>Part Time</label>
              <br />

              <input type="radio" name="employee"
                value="Contract" />
              <label>Contract</label>
              <br />
              <input type="radio" name="employee"
                value="Third Party"
                {...register("employee")} />
              <label>Third Party</label>
              <br />
            </div>
            <br />
            <label>Summary<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> : </label>
            <textarea cols="50" rows="5"
              {...register("summary")}></textarea>
            <br />
            <label>Details<sup style={{ color: 'red', fontSize: '15px', fontWeight: "800" }}>*</sup> : </label>
            <textarea cols="50" rows="5"
              name="details"
              {...register("details")}></textarea>
            <br />

            <button className='formbutton1'
              type="submit"
              disabled={!areFieldsFilled()}
            >Submit</button>
            <button
              style={{ background: "red", color: "white", padding: "10px 15px", borderRadius: "10px" }}
              onClick={cancel}>Cancel</button>

          </form>
        </div>
      </div>
   
    </>
  )
}


export default JobsPage;



