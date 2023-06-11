import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountDown from '../../CountDown';


export default function OutBlack() {
    const {outBlack,countDown} =useContext(MyContext)
    
  return (
    <div className='container-outblack'>
       <CountDown count={countDown[Object.keys(countDown)[1]]}/>
       <div className='outblack'> 
         {outBlack.map((item) => {
        return (
          <div className="box-black">
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
  )
}
