import React, { useState } from "react";
const WorkTwo = () => {
  const [items, setItems] = useState([
    {
      firstName: "sai",
      age: 22,
      salary: "20000",
      id: 1,
      lastName: "ram",
    },
    {
      firstName: "siva",
      age: 23,
      salary: "30,000",
      id: 2,
      lastName: "venkat",
    },
  ]);

  return (
    // jsx
    <div>
      {items.map((info) => {
        return (
          <div>
            <p>The Name of the empolyee is {info.firstName}</p>
            <p>The salary of the empolyee is {info.salary}</p>
            <button
              onClick={() =>
                setItems(
                  items.map((items) => {
                    return items.id === 1
                      ? { ...items, salary: "50000", firstName: "raja" }
                      : items;
                  })
                )
              }>  Update </button>
          </div>
        );
      })}
    </div>
  );
};
export default WorkTwo;