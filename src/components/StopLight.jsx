import React, { useState } from "react";
import StopLightCSS from "./StopLight.module.css";
import LightCSS from "./Light.module.css";

const StopLight = () => {
  const [currColor, setCurrColor] = useState("red");

  setTimeout(updateLight, 3000);

  function updateLight() {
    if (currColor === "red") {
      setCurrColor("green");
    } else if (currColor === "green") {
      setCurrColor("yellow");
    } else if (currColor === "yellow") {
      setCurrColor("red");
    }
  }

  return (
    <div className={StopLightCSS.background}>
      <div className={StopLightCSS.light_box}>
        <Light
          onClassName={LightCSS.red_light_active}
          offClassName={LightCSS.red_light}
          isOn={currColor === "red"}
        />
        <Light
          onClassName={LightCSS.yellow_light_active}
          offClassName={LightCSS.yellow_light}
          isOn={currColor === "yellow"}
        />
        <Light
          onClassName={LightCSS.green_light_active}
          offClassName={LightCSS.green_light}
          isOn={currColor === "green"}
        />
      </div>
    </div>
  );
};

const Light = ({ isOn, onClassName, offClassName }) => {
  return (
    <div className={LightCSS.light_box}>
      <div className={isOn ? onClassName : offClassName}></div>
      <div className={LightCSS.light_top}></div>
    </div>
  );
};

export default StopLight;
