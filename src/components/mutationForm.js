import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useMutation} from "@apollo/client"
import {mutation } from "../graphql/mutation"

function MutationForm() {
  const [first_name,setFirstName] = useState("")
  const [email,setEmail] = useState("")
  const [last_name,setLastName] = useState("")
  const [gender,setGender] = useState("")
  const [ip_address,setIpAddress] = useState("")

  const [createUser,{error}] = useMutation(mutation)


  const Clicked = (e) => {
    e.preventDefault()
    createUser({
      variables:{
        first_name:first_name,
        last_name:last_name,
        email:email,
        gender:gender,
        ip_address:ip_address
      }
    })
    if(error){
      console.log(error)
    }

  };

  return (
    <div>
      <form method="POST" className="hero">
        <div class=" form-group">
          <label for="exampleInputEmail1">name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
       
            name="first_name"
            placeholder="name"
          />
        </div>
        <div class=" form-group">
          <label for="exampleInputEmail1">last name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

            onChange={(e) => setLastName(e.target.value)}
            value={last_name}
            name="last_name"
            placeholder="last name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="email"
            autoComplete="0ff"
          />
        </div>

        <div class=" form-group">
          <label for="exampleInputEmail1">gender</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

            onChange={(e) => setGender(e.target.value)}
            value={gender}
            name="gender"
            placeholder="gender"
          />
        </div>

        <div class=" form-group">
          <label for="exampleInputEmail1">Ip address</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setIpAddress(e.target.value)}
            value={ip_address}
            name="ip_address"
            placeholder="ip address"
          />
        </div>

        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="register"
            onClick={Clicked}
          />
        </div>
      </form>
    </div>
  );
}

export default MutationForm;
