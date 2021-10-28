import axios from "axios";
import React, { useEffect, useState } from "react";
 const AxOne = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {});
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data.slice(20, 27));
      })
      .catch((error) => {
        console.log(error);
      });
  };
 useEffect(() => {
    fetchData();
  }, []);
 return (
    <div style={{ backgroundColor: "Green" }}>
      <center>
        <h2> Fetch data using function based Component from API</h2>
        {post.map((info) => {
          return (
            <div>
              <p style={{backgroundColor: "Red" }}>
                {" "}
                Title: {info.title}
              </p>
            </div>
          );
        })}
      </center>
    </div>
  );
};
export default AxOne;