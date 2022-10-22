import { useState } from "react"
import data from "../data"
import female from "../images/female.jpg"
import male from "../images/male.jpg"


export default function Content() {
    const [employees, setEmployees] = useState(data)


    return (
        <main className="container-fluid">
            <div className="row d-flex justify-content-center g-2">
                {
                    employees &&
                    employees.length > 0 &&
                    employees.map(employee => {
                        return (
                            <div className="card m-2 col-md-3 " style={{ "width": "16rem" }} key={employee.id}>
                                {(employee.gender === "female") ?
                                    <img src={female} class="card-img-top img-fluid" alt="..." /> :
                                    <img src={male} class="card-img-top img-fluid" alt="..." />
                                }
                                <div className="card-body">
                                    <h5 className="card-title">{employee.fullName}</h5>
                                    <p className="card-text">Role: {employee.designation}</p>
                                    <p className="card-text">Gender: {employee.gender}</p>
                                    <p className="card-text">Team: {employee.teamName}</p>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </main>
    )
}