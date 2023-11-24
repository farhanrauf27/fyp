import JobDetails from "./JobDetails";

export default function List({details}){
    return(
        <>
         {
            details ? details.map((j)=>(
                <JobDetails
                id={j.id}
                title={j.title}
                company={j.company}
                city={j.city}
                type={j.type}
                experience={j.experience}
                salary={j.salary}
                pic={j.pic}></JobDetails>
            )): null
        }
        </>
    )
}