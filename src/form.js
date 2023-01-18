import React, { useState } from "react";
import "./form.css"




export default function Form() {
    let [user, setUser] = React.useState(
        {
            userName: "",
            lastName: "",
            email: ""

        }
    )

   let [record, setRecord] = React.useState([])
    function handleSubmit(e) {
        e.preventDefault();

        const newUser = {...user, id: new Date().getTime().toString()}
        
        setRecord([ ...record, newUser])
        setUser({userName: "", lastName:"", email:""})

    }
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value })

    }
      


    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-input">

                    <input value={user.userName} type="text" placeholder="First Name" onChange={handleChange}
                        autoComplete="off" name="userName" id="userName"/>
                </div>
                <div className="form-input">

                    <input value={user.lastName} type="text" placeholder="Last Name" autoComplete="off"
                        name="lastName" onChange={handleChange} id="lastName"/>
                </div>
                <div className="form-input">

                    <input value={user.email} type="email" placeholder="Email" autoComplete="off" name="email" onChange={handleChange} id="email"/>
                </div>
                <div>
                    <button className='btn'>Submit</button>
                </div>
            </form>
            <div >
                {
                    record.map((ele)=>{
                        const {id,userName , lastName, email} = ele
                                return (
                                    <div key={ele.id} className="info">
                                        <p>{userName}</p>
                                        <p>{lastName}</p>
                                        <p>{email}</p>
                                    </div>
                                )
                    })
                }
            </div>

        </>
    )
}