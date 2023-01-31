import { NavLink } from "react-router-dom";



const Card=(props)=>{
    return(<>
   
    
    <div className="cards">
      <div className="card-img">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="card-body">
      <h5 className="card_title" style={{fontSize:'30px', textAlign:'center'}}>{props.title}</h5>
                    <p className="card_text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
      </div>
      <div className="card-footer">
       <NavLink className="card-button" to={props.path}> Get Started</NavLink>
      </div>
    </div>
    

  
    </>);

}

export default Card;