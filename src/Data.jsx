import React from "react";
export default function Data(props){
    
    const data=props.object;

    return(
        <div  className="data--container">
        <div>Name : {data.name}</div>
        <div>Username : {data.username}</div>
        <div>Email :{data.email}</div>
        <div>phone : {data.phone}</div>
        <div>company : {data.company.name}</div>
        </div>
    );
}