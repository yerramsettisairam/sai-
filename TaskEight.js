import react from "react";

const TaskEight = (props) => {
    const { employeeData } = props;
    return (
        <div>
            {employeeData.map(val => {
                return (
                    <div>
                        {val.employeeName}
                        <p>  {val.age}</p>
                        <p> {val.id}</p>
                        {val.salary}
                    </div>
                )

            })}

        </div>
    )
}
export default TaskEight;