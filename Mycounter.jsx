import React, { useState, useEffect, useRef } from "react";

const Mycounter = () => {
  const [counter, setcounter] = useState(0);
  const [check, setcheck] = useState();
  const timeRef = useRef(null);
  useEffect(() => {
    if (check) {
      timeRef.current = setInterval(() => {
        setcounter((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }
    return () => {
      clearInterval(timeRef.current);
    };
  }, [check]);

  const handlestart = () => {
    setcheck(true);
  };
  const handlestop = () => {
    setcheck(false);
  };

  return (
    <div>
      <p> Mycounter: {counter}</p>
      <button onClick={handlestart}>start</button>
      <button onClick={handlestop}>stop</button>
    </div>
  );
};

export default Mycounter;
