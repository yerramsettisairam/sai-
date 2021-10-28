import React from 'react';

const SweetDisplay = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div>
            <h4>Data Display</h4>
            {data.map(info => {
                return (
                    <div>
                        <p>first name : {info.firstname}</p>
                        <p>age : {info.age}</p>
                        <p>email id : {info.emailid}</p>
                        <p>password : {info.password}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SweetDisplay;