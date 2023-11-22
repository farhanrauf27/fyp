// import pic from "./WhatsApp Image 2023-03-08 at 8.37.52 PM.jpeg"
import { GeoAlt,Cash,Briefcase,Award} from "react-bootstrap-icons";

export default function Job({title,company,city,type,experience,salary,pic}){
  return(
    <>
<div className="card bg-light mx-2 col col-lg-6 mb-4 mt-4" style={{width: '25rem', borderRadius: '25px'}}>
<div className="card-body">
  <div className="row">
    <div className="col-6">
      <span>
        <img src={pic} style={{borderRadius: '50%'}} width={50} alt="..." />
      </span>
    </div>
    <div className="col-6">
      <h5 className="card-title mb-4" style={{marginLeft: '-120px', marginTop: '5px',fontSize:'25px',fontWeight:'bold'}}>{title}</h5>
      <p className="card-text text-left mb-3" style={{marginLeft:'-180px'}}>{company} , <span className="card-text">{city}</span> </p>
    </div>
  </div>
  <div className="row">
    <div className="col-6">
    <p className="card-text"><Briefcase/> {city} </p>
    </div>
    <div className="col-6">
      <p className="card-text"><GeoAlt />{type}</p>
    </div>
  </div>

  <div className="row">
    <div className="col-6">
      <p className="card-text"><Award/>{experience}</p>
    </div>
    <div className="col-6">
      <p className="card-text"><Cash/> {salary}</p>
    </div>
  </div>

  <div className="row mt-4" style={{justifyContent:"flex-end"}}>
    <div className="col" >
      <button className="btn btn-primary" style={{borderRadius:'25px'}}>Details</button>
    </div>
  </div>
</div>
</div>

    </>
  )
}