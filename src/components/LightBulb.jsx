import React, { useRef, useState } from "react";
import "./LightBulb.css";

const LightBulb = () => {
  const [inputSet, setInputSet] = useState(" ");
  const [focus, setFocus] = useState(false);
  let body = document.querySelector("body");


  const handleOnFocus = () => {
        console.log("something's coming up");
        body.classList.toggle("on");
  };


  return (
    <div className="light">
      <div className="wire"></div>

      <div className="bulb">
        <span></span>
        <span></span>
      </div>

      <form>
        <div className="switch">
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => {
              setInputSet(e.target.value);
            }}
            onFocus={() => {
                if(focus !== true){
                    handleOnFocus();
                    setFocus(false);
                }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default LightBulb;
