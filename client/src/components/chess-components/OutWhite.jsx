import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountDown from "../../CountDown";


export default function OutWhite() {
  const { outWhite,countDown } = useContext(MyContext);
  return (
    <div className="container-outwhite">
       <CountDown count={countDown[Object.keys(countDown)[0]]}/>
       <div className="outwhite">
      {outWhite.map((item) => {
        return (
          <div className="box-white">
            <div>
              {item.icon && (
                <FontAwesomeIcon
                  color={item.color ? item.color : null}
                  icon={item.icon}
                />
              )}
            </div>
          </div>
        );
      })}
    </div></div>
  );
}
