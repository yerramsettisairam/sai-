import React from 'react';

const Task6 = (props) => {
    console.log(props.Data);
    //destructuring of object
    const { Data } = props;
    return (
        <div>
            {Data.map(info => {
                return (
                    <div>
                       <p> {info.employeeName}</p>
                       <p> {info.salary}</p>
                       <p> {info.age}</p>
                       <p> {info.id}</p>
                    </div>
                );
            })
            }
        </div>
    )
}

export default Task6;
