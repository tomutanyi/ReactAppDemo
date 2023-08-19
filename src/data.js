import { useState,useEffect } from "react";
import DataItem from "./dataItem";
let data = [1,2,3,4,5,6]
// useState and useeffect
// import useState
// const [state,setState] = useState(initalValue)
    // state = initial value
        // state => variable
        //setState => function
        // ------------------
        // initial value
 // map(func)
 // useEffect 
   //  => useEffect(() => {
    // logic 
   //},[])

    // let name = 'Dan'
    // console.log(name)
    // name = "Belza"
    // console.log(name)

// Steps of implementing props
        // identify the data
        // assigning then to the child.

const Data = () =>{
    const [companies, setCompanies] =  useState([]) // inital value is data. data has a datatype
    // companies == []  ==> setCompanies(companies)
    useEffect(()=>{
        // fetch from localhost endpoint
        fetch('http://localhost:8000/companies')
        .then(response => response.json())
        .then(data => setCompanies(data))
        // companies === data
    },[])
    
    return(

        <>
            {companies.map(company=>(
                <DataItem key={company.id} name={company.name} net = {company.netWorth} employees = {company.employees}/>
            ))}
        </>
            
      
    )
}

export default Data;