import React, {useState} from "react";

const TaskNine = () => {
    
    // create a variable which will have designation, salary, hobbies as properties and update salary when use click on a button
    const [salary, setSalary] = useState(20000);
    const [designation, setDesignation] = useState('UI developer');
    const [hobbies, setHobbies] = useState('cricket');
    //create a variable name and id and update it values task
    const [name,setName]=useState('jalahalli');
    const [id,setId]=useState(555);

    return (
        <div>
            {salary}
            <p>{designation}</p>
           <p> {hobbies}</p>
           <p>{name}</p>
           <p>{id}</p>
            <button onClick={() => setHobbies('chess')} > update the hobbies</button>
           <p> <button onClick={() => setName('dasarahalli')} > update the name</button></p>
            <button onClick={() => setId('999')} > update the id</button>
        </div>

    )
}
export default TaskNine;