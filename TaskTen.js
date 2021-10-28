import React from "react";

const TaskTen = () =>{
    const [array,setArray]= useState([10,30,20,40,60,50]);

    return(
        <div>
            {array.map((item)=>{
                return <div>{item}</div>
            })}
            <button onClick={()=>
                setArray([...array,array.sort()]) }>update </button>
        </div>
    );
}
export default TaskTen;