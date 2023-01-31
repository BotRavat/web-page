import Card from "./Card";
import Sdata from "./Sdata";
import './service.css'

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 style={{textAlign:'center'}}>Our Services</h1>
      </div>

   
        <div className="cards_container">
             
                {Sdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.imgsrc} title={val.title} path={val.path} />
                  );
                })}
              </div>


           
       
    </>
  );
};

export default Service;
