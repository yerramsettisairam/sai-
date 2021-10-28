import React from "react";

const FormDisplay = (props) => {
    const { data } = props;
    console.log(data);


    return (
        <div>
            <br />
            {data.map(term => {
                return (
                    <div>
                        <p> empolyee Data </p>
                        <p> Name: {term.name} </p>
                        <p> Age: {term.age} </p>
                        <p> Contact Number: {term.contactNum} </p>
                        <p>  Designation: {term.designation} </p>
                    </div>
                )
            })}
        </div>
    )
}
export default FormDisplay;