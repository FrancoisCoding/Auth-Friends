import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => getData(), []);
  function getData() {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }
  console.log("list of friends", friends);
  return (
    <div>
      <h1>Friends</h1>
      <AddFriend />
    </div>
  );
};

export default Friends;
