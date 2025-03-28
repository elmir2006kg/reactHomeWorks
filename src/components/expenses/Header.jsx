import React, { useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("render");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => setData(data));

    return () => {
      console.log("удаление");
    };
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: "300px" }}>Render users</h1>
      {data?.map((item, index) => (
        <HeaderItem {...item} key={index}></HeaderItem>
      ))}
    </div>
  );
};

export default Header;
