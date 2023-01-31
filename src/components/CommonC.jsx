import { NavLink } from "react-router-dom";
import './commonC.css';

const CommonC = (props) => {
  return (
    <>
      <section id="header" className=" ">
       
          <div className=" main-div">

          <div className="wel-message">
            <h1>
              {props.msg}
              <strong className="brand-name"> {props.brand}</strong>
            </h1>
            <h2 className="my-3">
              We are the team of talented developer making websites
            </h2>


            <div className="mt-3">
              <NavLink to={props.visit} className="btn-get-started">
                {props.btname}
              </NavLink>
            </div>
            </div>

            <div className="header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="" />
            </div>


          </div>
        
      </section>
    </>
  );
};

export default CommonC;
