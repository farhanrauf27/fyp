import Job from "./Job"
export default function jobList({jobList}){
    return(
        <>
         {
            jobList.map((j)=>(
                <Job title={j.title}
                company={j.company}
                city={j.city}
                type={j.type}
                experience={j.experience}
                salary={j.salary}
                pic={j.pic}></Job>
            ))
        }
        </>
    )
}
