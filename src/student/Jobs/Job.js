import { GeoAlt, Cash, Briefcase, Award } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Job({ title, company, city, type, experience, salary, pic }) {
  return (
    <>
      <div className="card bg-light mx-2 col-12 col-lg-6 mb-4 mt-4" style={{ maxWidth: '25rem', borderRadius: '25px' }}>
        <div className="card-body">
          <div className="row">
            <div className="col-12 mb-3">
              <span>
                <img src={pic} style={{ borderRadius: '50%' }} width={50} alt="..." />
              </span>
              <h5 className="card-title mb-4" style={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '55px',marginTop:'-40px' }}>{title}</h5>
<p className="card-text text-left mb-3" style={{ marginLeft: '0px' }}>{company} , <span className="card-text">{city}</span> </p>            
</div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="card-text"><Briefcase /> {city} </p>
            </div>
            <div className="col-6">
              <p className="card-text"><GeoAlt />{type}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p className="card-text"><Award />{experience}</p>
            </div>
            <div className="col-6">
              <p className="card-text"><Cash /> {salary}</p>
            </div>
          </div>

          <div className="row mt-4" style={{ justifyContent: "flex-end" }}>
            <div className="col">
              <Link to='/jobDetails'><button className="btn btn-primary" style={{ borderRadius: '25px' }}>Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
