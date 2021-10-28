import React from "react";
import PropTypes from 'prop-types';

const WorkDisplay = (props) => {
    console.log(props);
    const { firstName,  lastName,age, salary, designation } = props;

    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{age}</p>
            <p>{salary}</p>
            <p>{designation}</p>
        </div>
    )
}

WorkDisplay.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    salary: PropTypes.number,
    designation: PropTypes.string,


  
}

WorkDisplay.defaultProps = {
    firstName: 'name',
    lastName: 'last',
    age: 20,
    salary: 50000,
    designation:'tester'

}


export default WorkDisplay;