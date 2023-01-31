
import './contact.css';


const Contact = () => {
  return (
    <>
     
     <div className='contact-page'>
     <div className='page-img'>
      <img src='https://source.unsplash.com/350x400' alt=''/>
     </div>
      <div className="form">
       <h1 style={{ textAlign: "center" }}> Contact Us</h1>
          
            <label className='label'> Name</label>
            <input type="text" placeholder="Enter your full name" />
          
          
            <label className='label'> Phone</label>
            <input type="tel" placeholder="Enter Mobile Number" />
          
          
            <label className='label'> Email</label>
            <input type="email" placeholder="Enter your email" />
          
          
            <label className='label'> Message</label>
            <input type="textarea" placeholder="Drop your message here 😊"    wrap="hard" />
        
           <button>Submit</button>
          </div>

      </div>
       

      {/* <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="containter contact_div">
        <div className="row">
          <div className="col-md-6 col-10  d-flex justify-content-center  ">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile Number                            "
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Drop your message here 😊
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
