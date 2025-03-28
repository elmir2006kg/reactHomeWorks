import React, { useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import Button from "../UI/Button";

const Header = ({ setheaderBool }) => {
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
      <Button onClick={setheaderBool}>Rduce userList</Button>
      <h1 style={{ marginLeft: "300px" }}>Render users</h1>
      {data?.map((item, index) => (
        <HeaderItem {...item} key={index}></HeaderItem>
      ))}
    </div>
  );
};

export default Header;
