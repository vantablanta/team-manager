import { useState } from "react"
import data from "../data"


export default function Content() {
    const [employees, setEmployees] = useState([data])
    console.log(employees)


    return (
        <main>
            <h1>Content</h1>
        </main>
    )
}