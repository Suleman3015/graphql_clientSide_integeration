import React, { useState,useEffect } from 'react'
import "./component.css"
import {useQuery} from "@apollo/client"
import {LOAD_USER} from "../graphql/queries"


function GetUser() {
    const {error , loading , data} = useQuery(LOAD_USER)
    const [user, setUser] = useState([])

    useEffect(() => {
        if(data){
           setUser(data.getAllUser)
        //    integ
        }
    }, [data])
    console.log(typeof user)   
  return (
    <div className='rooot' >
        <div className='branch' >
        <h1>User List</h1>
        <div>
            {user.map((val)=>{
                return <h1>{val.first_name}</h1>
            })}
        </div>

  </div>
     </div>
  )
}

export default GetUser