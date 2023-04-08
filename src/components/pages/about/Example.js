import React, { useEffect, useState } from "react";

function Child() {
  const [count, setCount] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: "Dummy Name",
    login: "Dummy Username",
  });

  useEffect(() => {
    console.log("child-useEffect without []");

    return () => {
      console.log("child-useEffect return without []");
    };
  });
  // no dependency array passed, so will be called after every render (including after initial render)

  useEffect(() => {
    console.log("child-useEffect with [] before api call");
    getUserInfo();
    console.log("child-useEffect with [] after api call");

    return () => {
      console.log("child-useEffect return with []");
    };
  }, []);
  // dependecy array passed, so will be called just once after the initial render

  useEffect(() => {
    console.log("child-useEffect with [count]");
  }, [count]);
  // dependency array passed with a state, so will be called after inital render + every state (count) update

  const getUserInfo = async () => {
    console.log("async function before api call");
    const data = await fetch("https://api.github.com/users/arnavb25");
    const json = await data.json();

    setUserInfo(json);

    console.log("async function after api call");
  };

  console.log("child-render");

  return (
    <button onClick={() => setCount(count + 1)}>Change Count: {count}</button>
  );
}

function Example() {
  console.log("parent-render");

  useEffect(() => {
    console.log("parent-useEffect without []");
  });

  useEffect(() => {
    console.log("parent-useEffect with []");
  });

  return <Child />;
}

export default Example;
