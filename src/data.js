import { useState,useEffect } from "react";
import DataItem from "./dataItem";
// let data = [1,2,3,4,5,6]
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
    const [transactions, settransactions] =  useState([]) // inital value is data. data has a datatype
    // transactions == []  ==> settransactions(transactions)
    useEffect(()=>{
        // fetch from localhost endpoint
        fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => settransactions(data))
        // transactions === data
    },[])
    
    return(

        <>
            {transactions.map(transaction=>(
                <DataItem key={transaction.id} date={transaction.date} description = {transaction.description} amount = {transaction.amount} category = {transaction.category} />
            ))}
        </>
            
      
    )
}

export default Data;