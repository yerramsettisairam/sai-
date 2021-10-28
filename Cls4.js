import React,{ useState } from "react";

//by using of function component update the state variables
const Cls4 = ( ) => {
    const  [firstName, setFirstName ] = useState('sai');
    const  [lastName, setLastName ] = useState('ram');
 
    return(
        <div>
           <p> {firstName} {lastName}{place} </p>
        </div>
    )
}
export default Cls4;