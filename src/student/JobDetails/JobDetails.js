import Navbar from "../Navbar/Navbar"

export default function JobDetails({id, title, company, city,pic }) {
  function open(){
    alert(id)
}
  return (
    <>
    
      <div className="d-flex">
        <div className="card bg-light mx-2 col col-lg-6 mb-2 mt-4" onClick={open} style={{ width: '20rem' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <span>
                  <img src={pic} style={{ borderRadius: '50%' }} width={50} alt="..." />
                </span>
              </div>
              <div className="col-6">
                <h5 className="card-title " style={{ marginLeft: '-100px', marginTop: '5px', fontSize: '20px', fontWeight: 'bold' }}>{title}</h5>
                <p className="card-text text-left " style={{ marginLeft: '-95px' }}>{company} , <span className="card-text">{city}</span> </p>
              </div>
            </div>           
          </div>
        </div>
        <div className="vl" style={{border:'1px solid #ccc'}}></div> {/* Add a vertical line */}
      </div>  
    </>
  )
}
